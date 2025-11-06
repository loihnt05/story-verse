import { canvas, narration, newLabel, showImageContainer, moveIn } from "@drincs/pixi-vn";

/**
 * TEST SCENE - Female Main Character Sprites
 * Display all 24 fmain sprites (Casual + Uniform styles)
 */
export const testFmainSprites = newLabel("test_fmain_sprites", [
    async () => {
        await showImageContainer("bg", ["classroom_dark"], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = `**TEST: Female Protagonist Sprites**`;
    },
    
    async () => {
        narration.dialogue = `Total: 24 sprites (12 Casual + 12 Uniform)`;
    },
    
    // CASUAL STYLE - 12 sprites
    async () => {
        narration.dialogue = `**CASUAL STYLE**`;
    },
    
    async () => {
        // Use moveIn for smooth scale animation
        await moveIn("fmain", {
            value: ["fmain_Casual_Closed_Frown"],
            options: { xAlign: 0.2, yAlign: 1}
        }, { direction: "up", ease: "circInOut", type: "spring" , duration: 0.2 });
        narration.dialogue = `1/24: Casual - Closed Frown`;

    },
        async () => {
        // Use moveIn for smooth scale animation
        await moveIn("fmain", {
            value: ["fmain_Casual_Closed_Frown"],
            options: { xAlign: 0.8, yAlign: 1}
        }, { direction: "up", ease: "circInOut", type: "spring" , duration: 0.2 });
        narration.dialogue = `1/24: Casual - Closed Frown`;

    },
]);

export default testFmainSprites;
