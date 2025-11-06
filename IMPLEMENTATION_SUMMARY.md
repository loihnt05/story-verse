# Protagonist Selection - Implementation Summary

## ✅ What's Been Created

### 1. **Protagonist Selection Scene** (`src/labels/scenes/protagonistSelection.ts`)
   - Gender selection: Male or Female protagonist
   - Female protagonist style selection: Casual or Summer Uniform
   - Custom name input for selected protagonist
   - Smooth transition to Scene 1 after selection

### 2. **Protagonist Manager Utility** (`src/utils/protagonist-manager.ts`)
   - `getProtagonist()` - Returns current protagonist character (minh or fmale)
   - `getProtagonistSprite(expression, withBlush)` - Gets correct sprite based on selection
   - `ProtagonistSprites` - Quick access object for common expressions
   - `setProtagonistStyle()` / `getProtagonistStyle()` - Manage style selection

### 3. **Updated Files**
   - ✅ `src/labels/startLabel.ts` - Now calls protagonist selection before game starts
   - ✅ `src/assets/manifest.ts` - Already includes both `main` and `fmain` bundles
   - ✅ `src/values/characters.ts` - Already has `minh` and `fmale` characters

### 4. **Test Scene** (`src/labels/scenes/testFmainSprites.ts`)
   - Displays all 24 female protagonist sprites
   - Can be used to verify sprites load correctly

## 🎮 How It Works

### Player Flow:
1. **Game Starts** → Protagonist Selection Screen
2. **Choose Gender** → Male or Female
3. **Choose Style** (Female only) → Casual or Summer Uniform
4. **Enter Name** → Custom protagonist name
5. **Game Begins** → Scene 1 starts with selected protagonist

### Character Assets:
- **Male Protagonist (main.ts)**: 18 sprites (Glasses + Glasses Shiny)
- **Female Protagonist (fmain.ts)**: 24 sprites (12 Casual + 12 Summer Uniform)

## 📝 Usage Examples

### In Your Scenes:

```typescript
// Import the helpers
import { getProtagonist, ProtagonistSprites } from "../../utils/protagonist-manager";

// Get the protagonist
const protagonist = getProtagonist();

// Show protagonist sprite
await showImageContainer("protagonist", [ProtagonistSprites.Smile()], { xAlign: 0.5, yAlign: 1 });

// Protagonist dialogue
narration.dialogue = {
    character: protagonist,
    text: "Let's investigate together!"
};

// Change expression
await showImageContainer("protagonist", [ProtagonistSprites.FrownBlush()]);
```

## 🔄 Next Steps

### To Use in Existing Scenes:
1. Update `scene1.ts`, `scene2.ts`, etc. to use `getProtagonist()` instead of hardcoded `minh`
2. Replace sprite references like `"main_Smile"` with `ProtagonistSprites.Smile()`
3. This makes all scenes work with both male and female protagonists

### Example Migration:

**Before:**
```typescript
narration.dialogue = {
    character: minh,
    text: "I'm scared..."
};
await showImageContainer("minh", ["main_Frown"]);
```

**After:**
```typescript
const protagonist = getProtagonist();
narration.dialogue = {
    character: protagonist,
    text: "I'm scared..."
};
await showImageContainer("protagonist", [ProtagonistSprites.Frown()]);
```

## 📋 File Structure

```
src/
├── labels/
│   ├── scenes/
│   │   ├── protagonistSelection.ts    ← NEW: Character selection
│   │   ├── testFmainSprites.ts        ← NEW: Test all 24 sprites
│   │   ├── scene1.ts                  ← (needs update to use protagonist manager)
│   │   ├── scene2.ts                  ← (needs update to use protagonist manager)
│   │   └── ...
│   └── startLabel.ts                  ← UPDATED: Calls protagonist selection
├── utils/
│   └── protagonist-manager.ts         ← NEW: Protagonist helper functions
├── assets/
│   └── characters/
│       ├── main.ts                    ← Male protagonist (18 sprites)
│       └── fmain.ts                   ← Female protagonist (24 sprites)
└── values/
    └── characters.ts                  ← Has minh & fmale characters
```

## 🎨 Sprite Mapping

### Male Protagonist (Glasses Style):
- `main_Smile`, `main_Frown`, `main_Open`
- `main_Closed_Smile`, `main_Closed_Frown`, `main_Closed_Open`
- `main_shiny_*` variants (glasses glare)

### Female Protagonist (Casual Style):
- `fmain_Casual_Smile`, `fmain_Casual_Frown`, `fmain_Casual_Open`
- `fmain_Casual_Closed_Smile`, `fmain_Casual_Closed_Frown`, `fmain_Casual_Closed_Open`
- All with `_Blush` variants

### Female Protagonist (Uniform Style):
- `fmain_SummerUni_Smile`, `fmain_SummerUni_Frown`, `fmain_SummerUni_Open`
- `fmain_SummerUni_Closed_Smile`, `fmain_SummerUni_Closed_Frown`, `fmain_SummerUni_Closed_Open`
- All with `_Blush` variants

## ✨ Features

- ✅ Choose between male and female protagonist
- ✅ Female protagonist has 2 style options (Casual / Uniform)
- ✅ Custom name input for protagonist
- ✅ Name persists throughout the game
- ✅ Automatic sprite selection based on choices
- ✅ Easy-to-use helper functions for scenes
- ✅ All assets loaded from Cloudflare R2
- ✅ No TypeScript errors
- ✅ Ready to test!

## 🚀 Testing

To test the system:
1. Run the game
2. You'll see the protagonist selection screen
3. Choose male or female
4. If female, choose casual or uniform style
5. Enter a custom name
6. The game will start Scene 1 with your selected protagonist

## 📚 Documentation

See `PROTAGONIST_SYSTEM.md` for detailed API documentation and more examples.
