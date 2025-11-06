import { canvas, narration, newLabel, showImageContainer } from "@drincs/pixi-vn";
import scene1 from "./scene1";
import { fmale, minh } from "../../values/characters";
import { setProtagonistStyle } from "../../utils/protagonist-manager";

/**
 * PROTAGONIST SELECTION SCREEN
 * Allows player to choose between male or female protagonist before starting the game
 */
export const protagonistSelectionScene = newLabel("protagonist_selection", [
    // Introduction
    async () => {   
        await showImageContainer("bg", ["classroom_dark"], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = `**CHỌN NHÂN VẬT CHÍNH**`;
    },
    
    async () => {
        narration.dialogue = `Trước khi bắt đầu câu chuyện, hãy chọn nhân vật mà bạn muốn đóng vai.`;
    },
    
    // Show both protagonist options
    async () => {
        await showImageContainer("male_option", ["main_Smile"], { xAlign: 0.3, yAlign: 1 });
        await showImageContainer("female_option", ["fmain_Casual_Smile"], { xAlign: 0.7, yAlign: 1 , scale: { x: 0.95, y: 0.95 } });
        narration.dialogue = `Bạn muốn chơi với vai nhân vật nam hay nữ?`;
    },
    
    // Gender selection choice
    async () => {
        narration.dialogue = `Chọn giới tính nhân vật chính:`;
        narration.choices = [
            {
                text: "Nhân vật Nam (Male Protagonist)",
                label: "select_male_protagonist",
                type: "call",
            },
            {
                text: "Nhân vật Nữ (Female Protagonist)",
                label: "select_female_protagonist",
                type: "call",
            }
        ];
    }
]);

// Male protagonist selection
export const selectMaleProtagonist = newLabel("select_male_protagonist", [
    async () => {
        await showImageContainer("male_option", ["main_Smile"], { xAlign: 0.5, yAlign: 1 });
        await showImageContainer("female_option", []); // Hide female option
        narration.dialogue = `Bạn đã chọn: **Nhân vật Nam**`;
    },
    async () => {
        narration.dialogue = `Phong cách: Đeo kính, thông minh, lý trí`;
    },
    async () => {
        narration.dialogue = `Bạn muốn đặt tên gì cho nhân vật này?`;
        narration.requestInput({
            type: "text"
        }, "Minh");
    },
    async () => {
        const characterName = String(narration.inputValue || "Minh");
        narration.removeInputRequest();
        
        // Store the protagonist choice using character object
        minh.name = characterName;
        setProtagonistStyle("glasses");
        
        narration.dialogue = `Chào mừng, **${characterName}**! Câu chuyện sắp bắt đầu...`;
    },
    async () => {
        // Hide character display and start the game
        await showImageContainer("male_option", []);
        narration.dialogue = `[Đang tải game...]`;
    },
    async (props) => {
        // Start Scene 1
        await narration.call(scene1, props);
    }
]);

// Female protagonist selection
export const selectFemaleProtagonist = newLabel("select_female_protagonist", [
    async () => {
        await showImageContainer("female_option", ["fmain_Casual_Smile"], { xAlign: 0.5, yAlign: 1 });
        await showImageContainer("male_option", []); // Hide male option
        narration.dialogue = `Bạn đã chọn: **Nhân vật Nữ**`;
    },
    async () => {
        narration.dialogue = `Phong cách: Tươi tắn, tự tin, thông minh`;
    },
    async () => {
        narration.dialogue = `Chọn trang phục bạn thích:`;
        narration.choices = [
            {
                text: "Trang phục Casual (Casual Style)",
                label: "select_casual_style",
                type: "call",
            },
            {
                text: "Đồng phục mùa hè (Summer Uniform)",
                label: "select_uniform_style",
                type: "call",
            }
        ];
    }
]);

// Casual style selection
export const selectCasualStyle = newLabel("select_casual_style", [
    async () => {
        await showImageContainer("female_option", ["fmain_Casual_Smile"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `Bạn đã chọn: **Trang phục Casual**`;
    },
    async () => {
        narration.dialogue = `Bạn muốn đặt tên gì cho nhân vật này?`;
        narration.requestInput({
            type: "text"
        }, "Linh");
    },
    async () => {
        const characterName = String(narration.inputValue || "Linh");
        narration.removeInputRequest();
        
        // Store the protagonist choice using character object
        fmale.name = characterName;
        setProtagonistStyle("casual");
        
        narration.dialogue = `Chào mừng, **${characterName}**! Câu chuyện sắp bắt đầu...`;
    },
    async () => {
        // Hide character display and start the game
        await showImageContainer("female_option", []);
        narration.dialogue = `[Đang tải game...]`;
    },
    async (props) => {
        // Start Scene 1
        await narration.call(scene1, props);
    }
]);

// Uniform style selection
export const selectUniformStyle = newLabel("select_uniform_style", [
    async () => {
        await showImageContainer("female_option", ["fmain_SummerUni_Smile"], { xAlign: 0.5, yAlign: 1 });
        narration.dialogue = `Bạn đã chọn: **Đồng phục mùa hè**`;
    },
    async () => {
        narration.dialogue = `Bạn muốn đặt tên gì cho nhân vật này?`;
        narration.requestInput({
            type: "text"
        }, "Linh");
    },
    async () => {
        const characterName = String(narration.inputValue || "Linh");
        narration.removeInputRequest();
        
        // Store the protagonist choice using character object
        fmale.name = characterName;
        setProtagonistStyle("uniform");
        
        narration.dialogue = `Chào mừng, **${characterName}**! Câu chuyện sắp bắt đầu...`;
    },
    async () => {
        // Hide character display and start the game
        await showImageContainer("female_option", []);
        narration.dialogue = `[Đang tải game...]`;
    },
    async (props) => {
        // Start Scene 1
        await narration.call(scene1, props);
    }
]);

export default protagonistSelectionScene;
