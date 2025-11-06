import { canvas, narration, newLabel, showImageContainer } from "@drincs/pixi-vn";

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
        await showImageContainer("fmain", ["fmain_Casual_Closed_Frown"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `1/24: Casual - Closed Frown`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_Casual_Closed_Frown_Blush"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `2/24: Casual - Closed Frown Blush`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_Casual_Closed_Open"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `3/24: Casual - Closed Open`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_Casual_Closed_Open_Blush"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `4/24: Casual - Closed Open Blush`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_Casual_Closed_Smile"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `5/24: Casual - Closed Smile`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_Casual_Closed_Smile_Blush"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `6/24: Casual - Closed Smile Blush`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_Casual_Frown"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `7/24: Casual - Frown`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_Casual_Frown_Blush"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `8/24: Casual - Frown Blush`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_Casual_Open"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `9/24: Casual - Open`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_Casual_Open_Blush"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `10/24: Casual - Open Blush`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_Casual_Smile"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `11/24: Casual - Smile`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_Casual_Smile_Blush"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `12/24: Casual - Smile Blush`;
    },
    
    // UNIFORM STYLE - 12 sprites
    async () => {
        narration.dialogue = `**UNIFORM STYLE (Summer)**`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_SummerUni_Closed_Frown"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `13/24: Summer Uniform - Closed Frown`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_SummerUni_Closed_Frown_Blush"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `14/24: Summer Uniform - Closed Frown Blush`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_SummerUni_Closed_Open"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `15/24: Summer Uniform - Closed Open`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_SummerUni_Closed_Open_Blush"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `16/24: Summer Uniform - Closed Open Blush`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_SummerUni_Closed_Smile"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `17/24: Summer Uniform - Closed Smile`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_SummerUni_Closed_Smile_Blush"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `18/24: Summer Uniform - Closed Smile Blush`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_SummerUni_Frown"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `19/24: Summer Uniform - Frown`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_SummerUni_Frown_Blush"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `20/24: Summer Uniform - Frown Blush`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_SummerUni_Open"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `21/24: Summer Uniform - Open`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_SummerUni_Open_Blush"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `22/24: Summer Uniform - Open Blush`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_SummerUni_Smile"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `23/24: Summer Uniform - Smile`;
    },
    
    async () => {
        await showImageContainer("fmain", ["fmain_SummerUni_Smile_Blush"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `24/24: Summer Uniform - Smile Blush`;
    },
    
    async () => {
        narration.dialogue = `**Test Complete!** All 24 fmain sprites displayed.`;
    },
]);

export default testFmainSprites;
