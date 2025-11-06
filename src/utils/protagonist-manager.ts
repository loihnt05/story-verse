import { fmale, minh } from "../values/characters";

/**
 * Protagonist Manager
 * Helper functions to get the correct protagonist sprites based on player selection
 */

// Track which protagonist style is selected
let selectedStyle: "casual" | "uniform" | "glasses" = "glasses";

export function setProtagonistStyle(style: "casual" | "uniform" | "glasses") {
    selectedStyle = style;
}

export function getProtagonistStyle(): "casual" | "uniform" | "glasses" {
    return selectedStyle;
}

/**
 * Get the protagonist character object
 * Returns either minh (male) or fmale (female) based on who has a custom name
 */
export function getProtagonist() {
    // If fmale has been renamed, they're the protagonist
    if (fmale.name !== "Fmale") {
        return fmale;
    }
    // Otherwise, default to minh
    return minh;
}

/**
 * Get protagonist sprite alias based on expression and current style
 * @param expression - Expression name (e.g., "Smile", "Frown", "Open")
 * @param withBlush - Whether to include blush variant
 * @returns Sprite alias string
 */
export function getProtagonistSprite(expression: string, withBlush: boolean = false): string {
    const protagonist = getProtagonist();
    const blush = withBlush ? "_Blush" : "";
    
    if (protagonist === fmale) {
        // Female protagonist
        if (selectedStyle === "casual") {
            return `fmain_Casual_${expression}${blush}`;
        } else {
            return `fmain_SummerUni_${expression}${blush}`;
        }
    } else {
        // Male protagonist
        if (expression.includes("shiny")) {
            return `main_shiny_${expression.replace("shiny_", "")}`;
        }
        return `main_${expression}`;
    }
}

/**
 * Quick access sprite getters
 */
export const ProtagonistSprites = {
    Smile: () => getProtagonistSprite("Smile"),
    SmileBlush: () => getProtagonistSprite("Smile", true),
    Frown: () => getProtagonistSprite("Frown"),
    FrownBlush: () => getProtagonistSprite("Frown", true),
    Open: () => getProtagonistSprite("Open"),
    OpenBlush: () => getProtagonistSprite("Open", true),
    Closed_Smile: () => getProtagonistSprite("Closed_Smile"),
    Closed_Frown: () => getProtagonistSprite("Closed_Frown"),
    Closed_Open: () => getProtagonistSprite("Closed_Open"),
};

export default {
    getProtagonist,
    getProtagonistSprite,
    ProtagonistSprites,
    setProtagonistStyle,
    getProtagonistStyle,
};
