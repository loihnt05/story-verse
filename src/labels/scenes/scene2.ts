import {
    canvas, narration, newLabel, newChoiceOption, showImageContainer
} from "@drincs/pixi-vn";
import { lan, tuan } from "../../values/characters";
import { getProtagonist, ProtagonistSprites } from "../../utils/protagonist-manager";
import { scene2A } from "./scene2A";
import { scene2B } from "./scene2B";
/**
 * CẢNH 2: MÊ CUNG CỦA SỰ NGHI NGỜ
 * Scene 2: The Maze of Suspicion
 * 
 * Setting: Behind the gate is an old, decaying school corridor.
 * Flickering lights, musty air. All classrooms on both sides are open.
 */
const scene2 = newLabel("scene2_maze_of_suspicion", [
    // Setting the scene
    async () => {
        await showImageContainer("bg", ["main_corridor"], {
            x: canvas.screen.width / 2,
            y: canvas.screen.height / 2,
            anchor: 0.5,
            width: canvas.screen.width,
            height: canvas.screen.height,
        });
        narration.dialogue = `**CẢNH 2: MÊ CUNG CỦA SỰ NGHI NGỜ**`;
    },
    async () => {
        narration.dialogue = `Sau cánh cổng là một dãy hành lang trường học cũ kỹ, mục nát. Ánh sáng le lói, không khí ẩm mốc. Các phòng học hai bên đều mở.`;
    },

    // Lan speaks - analytical
    async () => {
        await showImageContainer("lan", ["fm01_Open"]);
        narration.dialogue = {
            character: lan,
            text: "Chúng ta cần thông tin. Nếu có một 'kẻ mạo danh', phải có manh mối để nhận ra."
        };
    },

    // Tuấn suggests splitting up
    async () => {
        const protagonist = getProtagonist();
        await showImageContainer("tuan", ["m01_Open"], { scale: { x: -1, y: 1 }, anchor: 0.5 });
        narration.dialogue = {
            character: tuan,
            text: `Tốt nhất là chia ra. Sẽ nhanh hơn. ${protagonist.name} và Lan, hai người vào thư viện đi. Tôi sẽ trông chừng Mai, kiểm tra khu phòng y tế.`
        };
    },

    // Player choice - critical decision
    async () => {
        const protagonist = getProtagonist();
        await showImageContainer("protagonist", [ProtagonistSprites.Open()]); // Protagonist making wise decision
        narration.dialogue = {
            character: protagonist,
            text: "Chúng ta nên..."
        };
        narration.choices = [
            newChoiceOption("Được. Chia ra hành động. Hẹn gặp lại ở đây sau 15 phút.", scene2A, {}, {}),
            newChoiceOption("Không! Ở cùng nhau sẽ an toàn hơn. Chúng ta đi cùng nhau.", scene2B, {}, {}),
        ];

    }
]);

export default scene2;
