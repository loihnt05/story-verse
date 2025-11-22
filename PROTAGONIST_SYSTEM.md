# Protagonist Selection System

## Overview
Players can now choose between:
- **Male Protagonist** (main.ts) - Glasses style
- **Female Protagonist** (fmain.ts) - Casual or Summer Uniform style

## Usage in Scenes

### 1. Import the protagonist manager
```typescript
import { getProtagonist, getProtagonistSprite, ProtagonistSprites } from "../../utils/protagonist-manager";
```

### 2. Get the current protagonist character
```typescript
const protagonist = getProtagonist(); // Returns minh or fmale based on selection

// Use in dialogue
narration.dialogue = {
    character: protagonist,
    text: "This is the protagonist speaking!"
};
```

### 3. Display protagonist sprites

#### Method A: Using ProtagonistSprites helper (recommended)
```typescript
import { ProtagonistSprites } from "../../utils/protagonist-manager";

// Simple expressions
await showImageContainer("protagonist", [ProtagonistSprites.Smile()]);
await showImageContainer("protagonist", [ProtagonistSprites.Frown()]);
await showImageContainer("protagonist", [ProtagonistSprites.Open()]);

// With blush
await showImageContainer("protagonist", [ProtagonistSprites.SmileBlush()]);
```

#### Method B: Using getProtagonistSprite function
```typescript
import { getProtagonistSprite } from "../../utils/protagonist-manager";

// Specify expression manually
await showImageContainer("protagonist", [getProtagonistSprite("Smile")]);
await showImageContainer("protagonist", [getProtagonistSprite("Frown", true)]); // with blush
```

#### Method C: Direct sprite names (for specific control)
```typescript
// If you need different sprites for male vs female, use conditional logic
const protagonist = getProtagonist();
const sprite = protagonist === minh ? "main_Smile" : "fmain_Casual_Smile";
await showImageContainer("protagonist", [sprite]);
```

## Available Expressions

### Common to both protagonists:
- `Smile` / `SmileBlush`
- `Frown` / `FrownBlush`
- `Open` / `OpenBlush`
- `Closed_Smile`
- `Closed_Frown`
- `Closed_Open`

### Male protagonist only:
- All expressions have `shiny_` variants (glasses glare effect)
- Example: `main_shiny_Smile`, `main_shiny_Frown`

### Female protagonist only:
- Two style variants: **Casual** and **Summer Uniform**
- Style is automatically selected based on player choice
- All expressions available in both styles

## Example Scene

```typescript
import { canvas, narration, newLabel, showImageContainer, moveIn } from "@drincs/pixi-vn";
import { getProtagonist, ProtagonistSprites } from "../../utils/protagonist-manager";
import { lan, mai, tuan } from "../../values/characters";

export const exampleScene = newLabel("example_scene", [
    async () => {
        const protagonist = getProtagonist();
        
        // Show background
        await showImageContainer("bg", ["classroom_dark"]);
        
        // Show protagonist and other characters
        await showImageContainer("protagonist", [ProtagonistSprites.Smile()], { xAlign: 0.3, yAlign: 1 });
        await showImageContainer("lan", ["fm01_Smile"], { xAlign: 0.7, yAlign: 1 });
        
        // Protagonist speaks
        narration.dialogue = {
            character: protagonist,
            text: "Chúng ta nên làm gì tiếp theo?"
        };
    },
    
    async () => {
        const protagonist = getProtagonist();
        
        // Change protagonist expression
        await showImageContainer("protagonist", [ProtagonistSprites.Frown()]);
        
        narration.dialogue = {
            character: lan,
            text: "Tôi nghĩ chúng ta nên chia nhỏ nhóm..."
        };
    },
    
    async () => {
        // Use blush variant
        await showImageContainer("protagonist", [ProtagonistSprites.SmileBlush()]);
        
        narration.dialogue = {
            character: getProtagonist(),
            text: "*cảm thấy xấu hổ* Ừm... tốt thôi."
        };
    }
]);
```

## Migration Guide for Existing Scenes

### Old way (hardcoded to minh):
```typescript
narration.dialogue = {
    character: minh,
    text: "Hello!"
};
await showImageContainer("minh", ["main_Smile"]);
```

### New way (dynamic protagonist):
```typescript
narration.dialogue = {
    character: getProtagonist(),
    text: "Hello!"
};
await showImageContainer("protagonist", [ProtagonistSprites.Smile()]);
```

## Character Name Access

```typescript
const protagonist = getProtagonist();
const name = protagonist.name; // Gets the custom name player entered

narration.dialogue = `${name} looked around nervously...`;
```

## Notes

- The protagonist manager automatically selects the correct sprites based on:
  - Gender (male/female selection)
  - Style (casual/uniform for female, glasses for male)
- All sprite selection happens automatically - you just call the helper functions
- Player's custom name is stored in the character object
- Other characters (Lan, Mai, Tuấn) remain unchanged
