import { canvas, narration, newLabel, showImageContainer } from "@drincs/pixi-vn";
import { lan, mai, minh, tuan } from "../../values/characters";
import scene2 from "./scene2";

/**
 * CHARACTER SELECTION SCREEN
 * Allows player to choose which character they want to play as
 */
export const characterSelectionScene = newLabel("character_selection", [
    // Introduction
    async () => {   
        await showImageContainer("bg", ["classroom_dark"], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = `**CHỌN NHÂN VẬT CỦA BẠN**`;
    },
    
    async () => {
        narration.dialogue = `Bạn sẽ trải nghiệm câu chuyện qua góc nhìn của ai?`;
    },
    
    // Show all 4 characters
    async () => {
        await showImageContainer("minh", ["main_Smile"], { xAlign: 0.15, yAlign: 1 });
        await showImageContainer("lan", ["fm01_Smile"], { xAlign: 0.38, yAlign: 1 });
        await showImageContainer("mai", ["fm02_Smile"], { xAlign: 0.62, yAlign: 1 });
        await showImageContainer("tuan", ["m01_Smile"], { 
            xAlign: 0.85, 
            yAlign: 1,
            scale: { x: -1, y: 1 }, 
            anchor: 0.5 
        });
        narration.dialogue = `Mỗi nhân vật có cách suy nghĩ và phản ứng khác nhau với các sự kiện.`;
    },
    
    // Character selection choice
    async () => {
        narration.dialogue = `Chọn nhân vật của bạn:`;
        narration.choices = [
            {
                text: "Trưởng nhóm lý trí (Male 01)",
                label: "select_minh",
                type: "call",
            },
            {
                text: "gái phân tích logic (Female 01)",
                label: "select_lan",
                type: "call",
            },
            {
                text: "Cô gái nhạy cảm (Female 02)",
                label: "select_mai",
                type: "call",
            },
            {
                text: "Chàng trai hoài nghi (Male 02)",
                label: "select_tuan",
                type: "call",
            }
        ];
    }
]);

// Selection confirmations
export const selectMinh = newLabel("select_minh", [
    async () => {
        await showImageContainer("minh", ["main_Smile"]);
        // Hide others
        await showImageContainer("lan", []);
        await showImageContainer("mai", []);
        await showImageContainer("tuan", []);
        narration.dialogue = {
            character: minh,
            text: "Được rồi. Tôi sẽ dẫn dắt mọi người qua chuyện này."
        };
    },
    async () => {
        narration.dialogue = `Bạn đã chọn chơi với vai trò: **Trưởng nhóm lý trí**`;
    },
    async () => {
        narration.dialogue = `**Điểm mạnh:** Logic, lãnh đạo, phân tích\n**Điểm yếu:** Đôi khi quá tin vào lý trí`;
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
        // Set the character's name permanently
        minh.name = characterName;
        narration.dialogue = `Tuyệt vời! Nhân vật của bạn sẽ được gọi là: **${characterName}**`;
    },
    async () => {
        narration.dialogue = `[Lưu lựa chọn và bắt đầu game...]`;
    }
]);

export const selectLan = newLabel("select_lan", [
    async () => {
        await showImageContainer("lan", ["fm01_Smile"]);
        // Hide others
        await showImageContainer("minh", []);
        await showImageContainer("mai", []);
        await showImageContainer("tuan", []);
        narration.dialogue = {
            character: lan,
            text: "Tốt. Tôi sẽ dùng logic để tìm ra sự thật."
        };
    },
    async () => {
        narration.dialogue = `Bạn đã chọn chơi với vai trò: **Nhà phân tích logic**`;
    },
    async () => {
        narration.dialogue = `**Điểm mạnh:** Thông minh, quan sát sắc bén, tư duy khoa học\n**Điểm yếu:** Thiếu đồng cảm cảm xúc`;
    },
    async () => {
        narration.dialogue = `Bạn muốn đặt tên gì cho nhân vật này?`;
        narration.requestInput({
            type: "text"
        }, "Lan");
    },
    async () => {
        const characterName = String(narration.inputValue || "Lan");
        narration.removeInputRequest();
        // Set the character's name permanently
        lan.name = characterName;
        narration.dialogue = `Tuyệt vời! Nhân vật của bạn sẽ được gọi là: **${characterName}**`;
    },
    async () => {
        narration.dialogue = `[Lưu lựa chọn và bắt đầu game...]`;
    }
]);

export const selectMai = newLabel("select_mai", [
    async () => {
        await showImageContainer("mai", ["fm02_Smile"]);
        // Hide others
        await showImageContainer("minh", []);
        await showImageContainer("lan", []);
        await showImageContainer("tuan", []);
        narration.dialogue = {
            character: mai,
            text: "Tớ sẽ cố gắng... Tớ sẽ giúp mọi người."
        };
    },
    async () => {
        narration.dialogue = `Bạn đã chọn chơi với vai trò: **Cô gái nhạy cảm**`;
    },
    async () => {
        narration.dialogue = `**Điểm mạnh:** Đồng cảm cao, cảm nhận tâm linh, chân thành\n**Điểm yếu:** Dễ bị tổn thương, hay hoang mang`;
    },
    async () => {
        narration.dialogue = `Bạn muốn đặt tên gì cho nhân vật này?`;
        narration.requestInput({
            type: "text"
        }, "Mai");
    },
    async () => {
        const characterName = String(narration.inputValue || "Mai");
        narration.removeInputRequest();
        // Set the character's name permanently
        mai.name = characterName;
        narration.dialogue = `Tuyệt vời! Nhân vật của bạn sẽ được gọi là: **${characterName}**`;
    },
    async () => {
        narration.dialogue = `[Lưu lựa chọn và bắt đầu game...]`;
    }
]);

export const selectTuan = newLabel("select_tuan", [
    async () => {
        await showImageContainer("tuan", ["m01_Smile"], { scale: { x: -1, y: 1 }, anchor: 0.5 });
        // Hide others
        await showImageContainer("minh", []);
        await showImageContainer("lan", []);
        await showImageContainer("mai", []);
        narration.dialogue = {
            character: tuan,
            text: "Được thôi. Tôi sẽ để mắt đến tất cả mọi người."
        };
    },
    async () => {
        narration.dialogue = `Bạn đã chọn chơi với vai trò: **Người hoài nghi**`;
    },
    async () => {
        narration.dialogue = `**Điểm mạnh:** Thận trọng, bảo vệ nhóm, phát hiện dối trá\n**Điểm yếu:** Quá nghi ngờ, có thể gây mâu thuẫn`;
    },
    async () => {
        narration.dialogue = `Bạn muốn đặt tên gì cho nhân vật này?`;
        narration.requestInput({
            type: "text"
        }, "Tuấn");
    },
    async () => {
        const characterName = String(narration.inputValue || "Tuấn");
        narration.removeInputRequest();
        // Set the character's name permanently
        tuan.name = characterName;
        narration.dialogue = `Tuyệt vời! Nhân vật của bạn sẽ được gọi là: **${characterName}**`;
    },
    async () => {
        narration.dialogue = `[Lưu lựa chọn và bắt đầu game...]`;
    },
    async (props) => {
        await narration.call(scene2, props);
    },
]);

export default characterSelectionScene;
