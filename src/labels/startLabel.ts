import {
    Assets,
    narration,
    newLabel,
} from "@drincs/pixi-vn";
import scene1 from "./scenes/scene1";
// import characterSelectionScene from "./scenes/characterSelection";

const startLabel = newLabel(
    "start",
    [
        async (props) => {
            // Test character selection first
            // await narration.call(characterSelectionScene, props);
            // Then start the main story
            await narration.call(scene1, props);
        },
    ],
    {
        onLoadingLabel: () => {
            Assets.backgroundLoadBundle(["fm01", "fm02", "m01", "main", "backgrounds_pack4"]);
        },
    }
);
export default startLabel;

export const secondPart = newLabel("second_part", [
    async () => {
        narration.dialogue = "Placeholder for second part.";
    },
]);
