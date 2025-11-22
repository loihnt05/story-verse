import {
    Assets,
    moveIn,
    // moveOut,
    narration,
    newChoiceOption,
    newCloseChoiceOption,
    newLabel,
    showImage,
    showImageContainer,
} from "@drincs/pixi-vn";
import { james, 
    mc, 
    // sly, 
    // steph 

} from "../../values/characters";
// import { animation01 } from "../animations-labels";

// const steph_fullname = "Stephanie";

const introduction = newLabel(
    "introduction",
    [
        async () => {
            await showImage("bg", "apartment_exterior");
            await moveIn(
                "james",
                {
                    value: ["main_Open"],
                    options: { xAlign: 0.5, yAlign: 1 },
                },
                { direction: "right", ease: "circInOut", type: "spring" }
            );
            narration.dialogue = { character: james, text: `You're my roommate's replacement, huh?` };
        },
        async () => {
            await showImage("james", "main_Smile");
            narration.dialogue = {
                character: james,
                text: `Don't worry, you don't have much to live up to. Just don't use heroin like the last guy, and you'll be fine!`,
            };
        },
        async () => {
            await showImage("james", "main_Smile");
            narration.dialogue = { character: mc, text: `...` };
        },
        () => {
            narration.dialogue = `He thrusts out his hand.`;
        },
        async () => {
            narration.requestInput({ type: "string" }, "Peter");
            narration.dialogue = `What is your name?`;
        },
        async () => {
            mc.name = narration.inputValue as string;
            await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-grin00"]);
            narration.dialogue = { character: james, text: `${james.name}!` };
        },
        async () => {
            await showImage("james", "main_Smile");
            narration.dialogue = { character: mc, text: `...${mc.name}.` };
        },
        async () => {
            await showImage("james", "main_Smile");
            narration.dialogue = `I take his hand and shake.`;
        },
        async () => {
            await showImage("james", "main_Open");
            narration.dialogue = { character: james, text: `Ooh, ${mc.name}! Nice, firm handshake!` };
        },
        async () => {
            await showImage("james", "main_Frown");
            narration.dialogGlue = true;
            narration.dialogue = `The last guy always gave me the dead fish.`;
        },
        async () => {
            await showImage("james", "main_Smile");
            narration.dialogGlue = true;
            narration.dialogue = `I already think we're gonna get along fine.`;
        },
        async () => {
            await showImage("james", "main_Smile");
            narration.dialogue = { character: james, text: `Come on in and...` };
        },
        async () => {
            await showImage("james", "main_Smile");
            narration.dialogue = { character: james, text: `...` };
        },
        async () => {
            await showImage("james", "main_Frown");
            narration.dialogue = { character: james, text: `I know you're both watching, come on out already!` };
        },
        async () => {
            narration.dialogue = `You want continue to the next part?`;
            narration.choices = [
                newChoiceOption("Yes, I want to continue", "meeting", {}, { type: "jump" }),
                newCloseChoiceOption("No, I want to stop here"),
            ];
        },
    ],
    {
        onLoadingLabel: () => {
            Assets.backgroundLoadBundle(["fm01", "fm02", "m01", "backgrounds_pack1", "backgrounds_pack2", "backgrounds_pack3"]);
        },
    }
);
export default introduction;