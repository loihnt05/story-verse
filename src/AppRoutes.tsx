import { Route, Routes } from "react-router-dom";
import NextButton from "./components/NextButton";
import VisibilityButton from "./components/VisibilityButton";
import { GAME_DETAIL_ROUTE, HOME_ROUTE, LOADING_ROUTE, MAIN_MENU_ROUTE, NARRATION_ROUTE } from "./constans";
import useSkipAutoDetector from "./hooks/useSkipAutoDetector";
import HistoryScreen from "./screens/HistoryScreen";
import LoadingScreen from "./screens/LoadingScreen";
import MainMenu from "./screens/MainMenu";
import TextInput from "./screens/modals/TextInput";
import NarrationScreen from "./screens/NarrationScreen";
import QuickTools from "./screens/QuickTools";
import HomeScreen from "./screens/HomeScreen";
import GameDetail from "./screens/GameDetail";

export default function AppRoutes() {
    return (
        <Routes>
            <Route key={'home'} path={HOME_ROUTE} element={<HomeScreen />} />
            <Route key={"game_detail"} path={GAME_DETAIL_ROUTE} element={<GameDetail />} />
            <Route key={"main_menu"} path={MAIN_MENU_ROUTE} element={<MainMenu />} />
            <Route key={"loading"} path={LOADING_ROUTE} element={<LoadingScreen />} />
            <Route key={"narration"} path={NARRATION_ROUTE} element={<NarrationElement />} />
            {/* <Route path='*' element={<MainMenu />} /> */}
        </Routes>
    );
}

function NarrationElement() {
    return (
        <>
            <HistoryScreen />
            <NarrationScreen />
            <QuickTools />
            <TextInput />
            <NextButton />
            <NarrationDetectors />
            <VisibilityButton />
        </>
    );
}

function NarrationDetectors() {
    useSkipAutoDetector();
    return <></>;
}
