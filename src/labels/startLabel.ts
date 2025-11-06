import {
    Assets,
    narration,
    newLabel,
} from "@drincs/pixi-vn";
// import scene1 from "./scenes/scene1";
// import testFmainSprites from "./scenes/testFmainSprites";
// import protagonistSelectionScene from "./scenes/protagonistSelection";
import testFmainSprites from "./scenes/testFmainSprites";

const startLabel = newLabel(
    "start",
    [
        async (props) => {
            // Character selection before starting the game
            // await narration.call(protagonistSelectionScene, props);
            await narration.call(testFmainSprites, props);
        },
    ],
    {
        onLoadingLabel: () => {
            Assets.backgroundLoadBundle(["fm01", "fm02", "m01", "main", "fmain", "backgrounds_pack4"]);
        },
    }
);
export default startLabel;

export const secondPart = newLabel("second_part", [
    async () => {
        narration.dialogue = "Placeholder for second part.";
    },
]);
