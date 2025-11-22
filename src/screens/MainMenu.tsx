import { canvas, narration } from "@drincs/pixi-vn";
import { Box, Button, CircularProgress } from "@mui/joy";
import Stack from "@mui/joy/Stack";
import { useQueryClient } from "@tanstack/react-query";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import MenuButton from "../components/MenuButton";
import { CANVAS_UI_LAYER_NAME, NARRATION_ROUTE } from "../constans";
import useGameProps from "../hooks/useGameProps";
import { INTERFACE_DATA_USE_QUEY_KEY } from "../hooks/useQueryInterface";
import useQueryLastSave from "../hooks/useQueryLastSave";
import startLabel from "../labels/startLabel";
import useGameSaveScreenStore from "../stores/useGameSaveScreenStore";
import useInterfaceStore from "../stores/useInterfaceStore";
import useSettingsScreenStore from "../stores/useSettingsScreenStore";
import { loadSave } from "../utils/save-utility";

export default function MainMenu() {
    const setOpenSettings = useSettingsScreenStore((state) => state.setOpen);
    const editHideInterface = useInterfaceStore((state) => state.setHidden);
    const editSaveScreen = useGameSaveScreenStore((state) => state.editOpen);
    const queryClient = useQueryClient();
    const { data: lastSave = null, isLoading } = useQueryLastSave();
    const gameProps = useGameProps();
    const { uiTransition: t, navigate, notify } = gameProps;
    const [loading, setLoading] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        editHideInterface(false);

        return () => {
            canvas.getLayer(CANVAS_UI_LAYER_NAME)?.removeChildren();
        };
    }, [editHideInterface]);

    const handleStartClick = async () => {
        if (!videoRef.current) return;

        setLoading(true);
        setIsVideoPlaying(true);
        canvas.removeAll();

        // Play the video
        try {
            await videoRef.current.play();
        } catch (err) {
            console.error("Video play failed:", err);
            // If video fails, proceed anyway
            await navigate(NARRATION_ROUTE);
            narration
                .call(startLabel, gameProps)
                .then(() => queryClient.invalidateQueries({ queryKey: [INTERFACE_DATA_USE_QUEY_KEY] }))
                .finally(() => setLoading(false));
        }
    };

    const handleVideoEnd = async () => {
        // Navigate to narration after video completes
        await navigate(NARRATION_ROUTE);
        narration
            .call(startLabel, gameProps)
            .then(() => queryClient.invalidateQueries({ queryKey: [INTERFACE_DATA_USE_QUEY_KEY] }))
            .finally(() => {
                setLoading(false);
                setIsVideoPlaying(false);
            });
    };

    const handleSkipVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = videoRef.current.duration; // Jump to end to trigger onEnded
        }
    };

    return (
        <>
            {/* Video Background */}


            {/* Video overlay - only visible when playing */}
            <video
                ref={videoRef}
                muted
                playsInline
                onEnded={handleVideoEnd}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: isVideoPlaying ? 1000 : -1,
                    opacity: isVideoPlaying ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                }}
            >
                <source src="/asset/newBackground/OpenDoor.mov" type="video/quicktime" />
                Your browser does not support the video tag.
            </video>

            {/* Skip Button - only visible when video is playing */}
            {isVideoPlaying && (
                <Button
                    onClick={handleSkipVideo}
                    variant="soft"
                    color="neutral"
                    sx={{
                        position: "fixed",
                        bottom: { xs: 16, sm: 24, md: 32 },
                        right: { xs: 16, sm: 24, md: 32 },
                        zIndex: 1001,
                        fontSize: { xs: "0.875rem", sm: "1rem" },
                        padding: { xs: "8px 16px", sm: "10px 20px" },
                        backdropFilter: "blur(8px)",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                        },
                    }}
                    component={motion.button}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    {t("skip")}
                </Button>
            )}

            <Stack
                direction='column'
                justifyContent='center'
                alignItems='flex-start'
                spacing={{ xs: 1, sm: 2, lg: 3 }}
                sx={{
                    height: "100%",
                    width: "100%",
                    paddingLeft: { xs: 1, sm: 2, md: 4, lg: 6, xl: 8 },
                }}
                component={motion.div}
                initial='closed'
                animate={"open"}
                exit='closed'
            >
                <MenuButton
                    onClick={() => {
                        if (!lastSave) {
                            return;
                        }
                        setLoading(true);
                        loadSave(lastSave, navigate)
                            .then(() => queryClient.invalidateQueries({ queryKey: [INTERFACE_DATA_USE_QUEY_KEY] }))
                            .catch((e) => {
                                notify(t("fail_load"), { variant: "error" });
                                console.error(e);
                            })
                            .finally(() => setLoading(false));
                    }}
                    transitionDelay={0.1}
                    loading={isLoading}
                    disabled={(!isLoading && !lastSave) || loading}
                >
                    {t("continue")}
                </MenuButton>
                <MenuButton onClick={handleStartClick} transitionDelay={0.2} disabled={loading || isVideoPlaying}>
                    {t("start")}
                </MenuButton>
                <MenuButton onClick={editSaveScreen} transitionDelay={0.3} disabled={loading}>
                    {t("load")}
                </MenuButton>
                <MenuButton onClick={() => setOpenSettings(true)} transitionDelay={0.4}>
                    {t("settings")}
                </MenuButton>
                {loading && (
                    <Box
                        sx={{
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                            padding: 0.5,
                        }}
                        className='motion-preset-pop'
                    >
                        <CircularProgress />
                    </Box>
                )}
            </Stack>
        </>
    );
}
