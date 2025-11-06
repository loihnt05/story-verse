import { canvas, narration, newLabel, showImageContainer } from "@drincs/pixi-vn";
import { lan, minh } from "../../values/characters";

/**
 * CẢNH 2A (NHÁNH A: CHIA RA)
 * Scene 2A (Branch A: Split Up)
 * 
 * Minh and Lan explore the Library
 * Tuấn and Mai explore the Medical Room
 */
export const scene2A = newLabel("scene2A", [
    // Minh's decision - logical approach
    async () => {
        await showImageContainer("minh", ["main_Open"]);
        narration.dialogue = {
            character: minh,
            text: "Được. Chia ra hành động. Hẹn gặp lại ở đây sau 15 phút."
        };
    },
    
    // GROUP 1: Minh and Lan at the Library
    async () => {
        await showImageContainer("bg", ["library"], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        await showImageContainer("minh", ["main_Open"], { xAlign: 0.3, yAlign: 1 });
        await showImageContainer("lan", ["fm01_Open"], { xAlign: 0.7, yAlign: 1 });
            await showImageContainer("tuan", []);
            await showImageContainer("mai", []);
        narration.dialogue = `**NHÓM MINH VÀ LAN - THƯ VIỆN**`;
    },
    
    async () => {
        narration.dialogue = `Giữa đống sách lộn xộn, họ tìm thấy một trang nhật ký bị xé, nét chữ run rẩy:`;
    },
    
    async () => {
        narration.dialogue = `"Nó đã chiếm lấy con bé đó. Con bé nhạy cảm nhất nhóm. Nó cứ khóc lóc, thao túng lòng thương của chúng tôi. Đừng tin vào nước mắt của nó..."`;
    },
    
    async () => {
        narration.dialogue = `Mọi chi tiết đều chỉ thẳng vào Mai.`;
    },
    
    // Lan's conclusion
    async () => {
        await showImageContainer("lan", ["fm01_Frown"]);
        narration.dialogue = {
            character: lan,
            text: "Rõ ràng rồi. Manh mối chỉ thẳng vào Mai. Chúng ta nên quay lại ngay."
        };
    },
    
    // Sub-choice for player (Minh)
    async () => {
        await showImageContainer("minh", ["main_shiny_Frown"]); // Shiny glasses - thinking critically
        narration.dialogue = {
            character: minh,
            text: "Nhưng..."
        };
        narration.choices = [
            {
                text: "A1 (Tin vào bằng chứng): 'Cậu nói đúng. Bằng chứng là đây rồi. Đi thôi.'",
                label: "scene2A_choice_A1",
                type: "call",
            },
            {
                text: "A2 (Nghi ngờ bằng chứng): 'Đợi đã, Lan. Mọi thứ có vẻ... quá dễ dàng. Tớ muốn kiểm tra thêm.'",
                label: "scene2A_choice_A2",
                type: "call",
            }
        ];
    }
]);

// Choice A1 - Trust the evidence
export const scene2A_choiceA1 = newLabel("scene2A_choice_A1", [
    async () => {
        await showImageContainer("minh", ["main_Open"]);
        narration.dialogue = {
            character: minh,
            text: "Cậu nói đúng. Bằng chứng là đây rồi. Đi thôi."
        };
    },
    async () => {
        narration.dialogue = `Minh và Lan rời khỏi thư viện. Minh không bao giờ tìm thấy manh mối thứ hai.`;
    },
    
    // Meanwhile transition screen
    async () => {
        await showImageContainer("bg", ["main_corridor"], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        // Hide all characters for transition
        await showImageContainer("minh", []);
        await showImageContainer("lan", []);
        narration.dialogue = `**MEANWHILE...**`;
    },
    
    // Switch to Tuấn and Mai group - hide Minh and Lan, show Tuấn and Mai
    async () => {
        await showImageContainer("bg", ["medical_room"], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        // Hide Minh and Lan
        await showImageContainer("minh", []);
        await showImageContainer("lan", []);
        // Show Tuấn and Mai
        await showImageContainer("tuan", ["m01_Open"], { 
            xAlign: 0.3, 
            yAlign: 1,
            scale: { x: -1, y: 1 }, 
            anchor: 0.5 
        });
        await showImageContainer("mai", ["fm02_Open"], { xAlign: 0.7, yAlign: 1 });
        narration.dialogue = `**NHÓM TUẤN VÀ MAI - PHÒNG Y TẾ**`;
    },
    async () => {
        narration.dialogue = `Tuấn phát hiện một đoạn ghi âm cũ, trong đó một giọng nam gào lên hoảng loạn về việc bị một "cô gái" lừa dối.`;
    },
    async () => {
        await showImageContainer("mai", ["fm02_Closed_Frown"]);
        narration.dialogue = `Đúng lúc đó, Mai giật mình và kêu lên một tiếng nhỏ, khiến Tuấn càng thêm nghi ngờ.`;
    },
    
    // Reunion - show all 4 characters
    async () => {
        await showImageContainer("bg", ["main_corridor"], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        // Show all 4 characters
        await showImageContainer("minh", ["main_Frown"], { xAlign: 0.1, yAlign: 1 });
        await showImageContainer("lan", ["fm01_Frown"], { xAlign: 0.35, yAlign: 1 });
        await showImageContainer("tuan", ["m01_Frown"], { 
            xAlign: 0.65, 
            yAlign: 1,
            scale: { x: -1, y: 1 }, 
            anchor: 0.5 
        });
        await showImageContainer("mai", ["fm02_Frown"], { xAlign: 0.9, yAlign: 1 });
        narration.dialogue = `Cả nhóm tập trung lại ở hành lang.`;
    },
    async () => {
        narration.dialogue = `**[TO BE CONTINUED - CẢNH 3A]**`;
    }
]);

// Choice A2 - Doubt the evidence
export const scene2A_choiceA2 = newLabel("scene2A_choice_A2", [
    async () => {
        await showImageContainer("minh", ["main_shiny_Open"]); // Wise moment - shiny glasses
        narration.dialogue = {
            character: minh,
            text: "Đợi đã, Lan. Mọi thứ có vẻ... quá dễ dàng. Tớ muốn kiểm tra thêm."
        };
    },
    async () => {
        await showImageContainer("lan", ["fm01_Frown"]);
        narration.dialogue = {
            character: lan,
            text: "Thời gian không nhiều, Minh..."
        };
    },
    async () => {
        narration.dialogue = `Lan bực bội nhưng Minh tìm kỹ hơn. Anh quay lại giá sách nơi tìm thấy trang giấy.`;
    },
    async () => {
        await showImageContainer("minh", ["main_shiny_Smile"]); // Discovery moment
        narration.dialogue = `Minh phát hiện một mảnh giấy nhỏ hơn bị gấp lại, nhét sâu bên trong một cuốn sách khác.`;
    },
    async () => {
        narration.dialogue = `Chữ viết vội vã: "NÓ DỰNG KỊCH. MỌI BẰNG CHỨNG ĐỀU LÀ GIẢ. TIN TƯỞNG NHAU LÀ LỐI THOÁT DUY NHẤT."`;
    },
    async () => {
        await showImageContainer("minh", ["main_Frown"]);
        narration.dialogue = {
            character: minh,
            text: "Lan... Cậu xem đây. Có vẻ như ai đó đang thao túng chúng ta."
        };
    },
    
    // Meanwhile transition screen
    async () => {
        await showImageContainer("bg", ["main_corridor"], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        // Hide all characters for transition
        await showImageContainer("minh", []);
        await showImageContainer("lan", []);
        narration.dialogue = `**Trong khi đó...**`;
    },
    
    // Switch to Tuấn and Mai group - hide Minh and Lan, show Tuấn and Mai
    async () => {
        await showImageContainer("bg", ["medical_room"], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        // Hide Minh and Lan
        await showImageContainer("minh", []);
        await showImageContainer("lan", []);
        // Show Tuấn and Mai
        await showImageContainer("tuan", ["m01_Open"], { 
            xAlign: 0.3, 
            yAlign: 1,
            scale: { x: -1, y: 1 }, 
            anchor: 0.5 
        });
        await showImageContainer("mai", ["fm02_Open"], { xAlign: 0.7, yAlign: 1 });
        narration.dialogue = `**NHÓM TUẤN VÀ MAI - PHÒNG Y TẾ**`;
    },
    async () => {
        narration.dialogue = `Tuấn phát hiện một đoạn ghi âm cũ, trong đó một giọng nam gào lên hoảng loạn về việc bị một "cô gái" lừa dối.`;
    },
    async () => {
        await showImageContainer("mai", ["fm02_Closed_Frown"]);
        narration.dialogue = `Đúng lúc đó, Mai giật mình và kêu lên một tiếng nhỏ, khiến Tuấn càng thêm nghi ngờ.`;
    },
    async()=>{
        await showImageContainer("bg", ["main_corridor"], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        // Hide all characters for transition
        await showImageContainer("minh", []);
        await showImageContainer("lan", []);
                await showImageContainer("tuan", []);
        await showImageContainer("mai", []);
        narration.dialogue = `**Cả nhóm sau đó tập trung lại ở hành lang.**`;
    },
    // Reunion - show all 4 characters
    async () => {
        await showImageContainer("bg", ["main_corridor"], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        // Show all 4 characters
        await showImageContainer("minh", ["main_Frown"], { xAlign: 0.1, yAlign: 1 });
        await showImageContainer("lan", ["fm01_Frown"], { xAlign: 0.35, yAlign: 1 });
        await showImageContainer("tuan", ["m01_Frown"], { 
            xAlign: 0.65, 
            yAlign: 1,
            scale: { x: -1, y: 1 }, 
            anchor: 0.5 
        });
        await showImageContainer("mai", ["fm02_Frown"], { xAlign: 0.9, yAlign: 1 });
    },
    async () => {
        narration.dialogue = `**[TO BE CONTINUED - CẢNH 3A]**`;
    }
]);
