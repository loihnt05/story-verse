import { canvas, moveIn, narration, newLabel, showImageContainer } from "@drincs/pixi-vn";
import { lan, mai, tuan } from "../../values/characters";
import { getProtagonist, ProtagonistSprites } from "../../utils/protagonist-manager";
import scene2 from "./scene2";

/**
 * CẢNH 1: LỜI MỜI GỌI
 * Scene 1: The Invitation
 * 
 * Setting: Spiritual Club room, 11 PM
 * A dimly lit room with only a few flickering candles casting eerie shadows on the walls.
 * The atmosphere is suffocating and silent. Four friends sit around an old, worn book.
 */
const scene1 = newLabel("scene1_invitation", [
    // Setting the scene
    async () => {
        await showImageContainer("bg", ["classroom_dark"], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = `**CẢNH 1: LỜI MỜI GỌI**`;
    },
    async () => {
        narration.dialogue = `**BỐI CẢNH:** Phòng sinh hoạt CLB Tâm linh. 11 giờ đêm.`;
    },
    async () => {
        narration.dialogue = `Căn phòng chỉ được thắp sáng bằng vài ngọn nến leo lét, tạo ra những cái bóng nhảy múa kỳ dị trên tường.`;
    },
    async () => {
        narration.dialogue = `Không khí ngột ngạt và tĩnh lặng. Bốn người bạn ngồi quanh một cuốn sách cổ sờn cũ.`;
    },
    
    // Show all characters - Group 1: Protagonist and Lan (left side)
    async () => {
        await moveIn(
            "protagonist",
            {
                value: [ProtagonistSprites.Open()],
                options: { xAlign: 0.1, yAlign: 1 },
            },
            { direction: "right", ease: "circInOut", type: "spring" }
        );
        await moveIn(
            "lan",
            {
                value: ["fm01_Smile"],
                options: { xAlign: 0.35, yAlign: 1.2 },
            },
            { direction: "right", ease: "anticipate"}
        );
    },
    
    // Show all characters - Group 2: Tuấn and Mai (right side)
    async () => {
        await moveIn(
            "tuan",
            {
                value: ["m01_Frown"],
                options: { xAlign: 0.75, yAlign: 1, scale: { x: -1, y: 1 }, anchor: 0.5 },
            },
            { direction: "left", ease: "circInOut", type: "spring"}
        );
        await moveIn(
            "mai",
            {
                value: ["fm02_Frown"],
                options: { xAlign: 0.95, yAlign: 1 },
            },
            { direction: "left", ease: "easeInOut" }
        );
    },
    
    // Tuấn speaks - skeptical
    async () => {
        await showImageContainer("tuan", ["m01_Frown"], { xAlign: 0.75, yAlign: 1, scale: { x: -1, y: 1 }, anchor: 0.5 });
        narration.dialogue = {
            character: tuan,
            text: "Tớ vẫn không tin được là chúng ta đang làm chuyện này đấy. Nhỡ có con gì hiện ra thật thì sao?"
        };
    },
    // Lan speaks - analytical
    async () => {
        await showImageContainer("lan", ["fm01_Smile"], { xAlign: 0.35, yAlign: 1.2 });
        narration.dialogue = {
            character: lan,
            text: "Thống kê cho thấy 99% các nghi thức gọi hồn chỉ là do ảo giác nhóm. Cứ xem như một trải nghiệm tâm lý đi."
        };
    },
    
    // Mai speaks - nervous
    async () => {
        await showImageContainer("mai", ["fm02_Frown"], { xAlign: 0.95, yAlign: 1 });
        narration.dialogue = {
            character: mai,
            text: "Nhưng... từ lúc vào đây tớ đã thấy lạnh sống lưng rồi."
        };
    },
    
    // Protagonist speaks - reassuring
    async () => {
        const protagonist = getProtagonist();
        await showImageContainer("protagonist", [ProtagonistSprites.Smile()], { xAlign: 0.1, yAlign: 1 });
        narration.dialogue = {
            character: protagonist,
            text: "Thôi nào mọi người. Chỉ là đọc vài câu cho vui thôi mà. Sẽ không có gì xảy ra đâu. Để tớ đọc câu cuối cùng nhé."
        };
    },
    
    // The ritual action
    async () => {
        const protagonist = getProtagonist();
        narration.dialogue = `${protagonist.name} hắng giọng, đọc to câu niệm cuối cùng từ cuốn sách.`;
    },
    async () => {
        narration.dialogue = `Vừa dứt lời, tất cả nến trong phòng đồng loạt phụt tắt.`;
    },
    async () => {
        // TODO: Add screen effect - fade to black
        narration.dialogue = `Một cơn đau buốt nhói lên trong đầu cả bốn người.`;
    },
    async () => {
        narration.dialogue = `Trong bóng tối và sự im lặng tuyệt đối, mỗi người nghe thấy một lời thì thầm khác nhau...`;
    },
    
    // Whispers - what each character hears
    async () => {
        const protagonist = getProtagonist();
        await showImageContainer("protagonist", [ProtagonistSprites.Frown()], { xAlign: 0.1, yAlign: 1 });
        narration.dialogue = {
            character: protagonist,
            text: `*(${protagonist.name} nghe):* "Trong số các ngươi, có một kẻ đã bị chiếm xác."`
        };
    },
    async () => {
        await showImageContainer("lan", ["fm01_Frown"], { xAlign: 0.35, yAlign: 1.2 });
        narration.dialogue = {
            character: lan,
            text: `*(Lan nghe):* "Đừng tin ai cả. Một người trong nhóm không còn là chính mình nữa."`
        };
    },
    async () => {
        await showImageContainer("tuan", ["m01_Frown"], { xAlign: 0.75, yAlign: 1, scale: { x: -1, y: 1 }, anchor: 0.5 });
        narration.dialogue = {
            character: tuan,
            text: `*(Tuấn nghe):* "Là Mai. Nó đang giả vờ yếu đuối. Hãy cẩn thận."`
        };
    },
    async () => {
        await showImageContainer("mai", ["fm02_Closed_Frown"], { xAlign: 0.95, yAlign: 1 });
        narration.dialogue = {
            character: mai,
            text: `*(Mai nghe):* "Bọn họ đang nghi ngờ ngươi. Ngươi sẽ bị bỏ lại."`
        };
    },
    
    // After the whispers
    async () => {
        narration.dialogue = `Cơn đau biến mất.`;
    },
    async () => {
        const protagonist = getProtagonist();
        narration.dialogue = `${protagonist.name} vội bật đèn pin điện thoại lên.`;
    },
    async () => {
        // Change to main corridor to show they've moved
        await showImageContainer("bg", ["main_corridor"], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = `Cả nhóm vẫn ở trong phòng CLB, nhưng cánh cửa gỗ quen thuộc đã biến mất...`;
    },
    async () => {
        narration.dialogue = `Thay vào đó là một cánh cổng sắt lạnh lẽo.`;
    },
    async () => {
        // TODO: Add bloody text effect
        narration.dialogue = `Trên cổng, những giọt máu tươi từ từ rỉ ra, tạo thành dòng chữ:`;
    },
    async () => {
        narration.dialogue = `**"TRÒ CHƠI BẮT ĐẦU. TÌM RA KẺ MẠO DANH ĐỂ SỐNG SÓT."**`;
    },
    
    // The suspicion begins
    async () => {
        await showImageContainer("protagonist", [ProtagonistSprites.Open()]);
        await showImageContainer("lan", ["fm01_Frown"]);
        await showImageContainer("tuan", ["m01_Frown"], { scale: { x: -1, y: 1 }, anchor: 0.5 });
        await showImageContainer("mai", ["fm02_Frown"]);
        narration.dialogue = `Cả nhóm nhìn nhau, ánh mắt giờ đây không chỉ có sợ hãi mà còn đầy sự nghi kỵ.`;
    },
    async () => {
        const protagonist = getProtagonist();
        await showImageContainer("protagonist", [ProtagonistSprites.Frown()], { xAlign: 0.1, yAlign: 1 });
        narration.dialogue = {
            character: protagonist,
            text: `Chuyện gì đang xảy ra vậy? Ai đó trong chúng ta... thật sự đã bị chiếm xác?`
        };
    },
    async () => {
        narration.dialogue = `**[KẾT THÚC CẢNH 1]**`;
    },
    
    // Continue to Scene 2
    async (props) => {
        await narration.call(scene2, props);
    },
]);

export default scene1;
