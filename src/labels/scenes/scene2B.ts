import { canvas, narration, newLabel, showImageContainer } from "@drincs/pixi-vn";
import { lan, mai, tuan } from "../../values/characters";
import { getProtagonist, ProtagonistSprites } from "../../utils/protagonist-manager";

/**
 * CẢNH 2B (NHÁNH B: ĐI CHUNG)
 * Scene 2B (Branch B: Stay Together)
 * 
 * The whole group stays together and explores the Archive Room
 */
export const scene2B = newLabel("scene2B_stay_together", [
    // Protagonist's decision - cautious approach
    async () => {
        const protagonist = getProtagonist();
        await showImageContainer("protagonist", [ProtagonistSprites.Open()]);
        narration.dialogue = {
            character: protagonist,
            text: "Không! Ở cùng nhau sẽ an toàn hơn. Chúng ta đi cùng nhau."
        };
    },
    
    async () => {
        narration.dialogue = `Cả nhóm đồng ý và cùng nhau thận trọng tiến bước.`;
    },
    
    async () => {
        narration.dialogue = `Vì họ không chia ra, họ bỏ qua Thư viện và Phòng Y tế.`;
    },
    
    // Archive Room discovery
    async () => {
        await showImageContainer("bg", ["toilet_corridor"], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = `Một cánh cửa nặng nề "PHÒNG LƯU TRỮ CLB" hé mở, một luồng khí lạnh buốt thổi ra.`;
    },
    
    async () => {
        narration.dialogue = `Họ bước vào. Căn phòng đầy ắp hồ sơ cũ và đạo cụ của các nghi lễ cũ.`;
    },
    
    async () => {
        narration.dialogue = `Cánh cửa đóng sầm lại.`;
    },
    
    async () => {
        narration.dialogue = `Giữa phòng, một cuốn sổ ghi chép (nhật ký CLB) đang mở sẵn.`;
    },
    
    // Ghost appears
    async () => {
        narration.dialogue = `Một bóng người mờ ảo của một nam sinh viên (hồn ma tay sai) hiện ra ở góc phòng, trông hoảng loạn.`;
    },
    
    async () => {
        narration.dialogue = {
            text: "Nó đã lừa tôi... Nó đã lừa tất cả chúng tôi... Nó nói dối..."
        };
    },
    
    // Mai's reaction
    async () => {
        await showImageContainer("mai", ["fm02_Frown"]);
        narration.dialogue = {
            character: mai,
            text: "Ai... ai nói dối?"
        };
    },
    
    async () => {
        narration.dialogue = {
            text: "Một người... luôn luôn là một người. Kẻ đã đưa các người đến đây. Kẻ đã muốn trò chơi này diễn ra."
        };
    },
    
    async () => {
        narration.dialogue = `Hồn ma chỉ tay vào cuốn nhật ký.`;
    },
    
    // Lan reads the diary
    async () => {
        await showImageContainer("lan", ["fm01_Frown"]);
        narration.dialogue = {
            character: lan,
            text: "Để tôi đọc..."
        };
    },
    
    async () => {
        narration.dialogue = `"...Tôi đã sai lầm khi tin tưởng [TÊN BỊ NHOÈ]. Hắn/Cô ta là người tìm thấy cuốn sách."`;
    },
    
    async () => {
        narration.dialogue = `"Hắn/Cô ta là người nằng nặc đòi chúng ta phải 'thử'. Hắn/Cô ta nói đó chỉ là một trò đùa, nhưng tôi thấy cái cách hắn/cô ta mỉm cười khi đọc thần chú."`;
    },
    
    async () => {
        narration.dialogue = `"Đây không phải tai nạn. Đây là một sự hiến tế. MỘT NGƯỜI TRONG NHÓM LÀ KẺ PHẢN BỘI TỪ ĐẦU."`;
    },
    
    async () => {
        narration.dialogue = `Không khí lập tức đóng băng.`;
    },
    
    // Tuấn accuses Lan
    async () => {
        await showImageContainer("tuan", ["m01_Frown"], { scale: { x: -1, y: 1 }, anchor: 0.5 });
        narration.dialogue = {
            character: tuan,
            text: "Lan. Cậu là người tìm thấy cuốn sách cổ tối nay mà, đúng không?"
        };
    },
    
    // Lan defends herself
    async () => {
        await showImageContainer("lan", ["fm01_Open_Blush"]);
        narration.dialogue = {
            character: lan,
            text: "Đó là sách lưu trữ! Tôi chỉ... tình cờ thấy nó! Sao cậu dám..."
        };
    },
    
    // Mai suspects Protagonist
    async () => {
        const protagonist = getProtagonist();
        await showImageContainer("mai", ["fm02_Frown"]);
        narration.dialogue = {
            character: mai,
            text: `Nhưng... ${protagonist.name}... cậu là trưởng nhóm. Cậu là người đồng ý làm việc này... và cậu là người đọc câu cuối cùng.`
        };
    },
    
    // Tuấn escalates
    async () => {
        await showImageContainer("tuan", ["m01_Open"], { scale: { x: -1, y: 1 }, anchor: 0.5 });
        narration.dialogue = {
            character: tuan,
            text: "Hay lắm. Người logic nhất và người lý trí nhất. Còn cậu thì sao, Mai? Cậu cứ giả vờ sợ hãi, có phải để che giấu việc cậu chính là kẻ chủ mưu không?"
        };
    },
    
    // Ghost laughs and vanishes
    async () => {
        narration.dialogue = {
            text: "Đúng thế... Tự hỏi nhau đi. Tìm ra kẻ đó đi..."
        };
    },
    
    async () => {
        narration.dialogue = `Linh hồn tan biến. Cánh cửa phòng lưu trữ bật mở.`;
    },
    
    async () => {
        await showImageContainer("bg", ["main_corridor"], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = `Nhóm không tìm thấy manh mối "TIN TƯỞNG LÀ LỐI THOÁT".`;
    },
    
    async () => {
        const protagonist = getProtagonist();
        narration.dialogue = `Sự nghi ngờ giờ đây gieo rắc lên cả Lan và ${protagonist.name}, không chỉ tập trung vào Mai.`;
    },
    
    async () => {
        narration.dialogue = `**[TO BE CONTINUED - CẢNH 3B]**`;
    }
]);
