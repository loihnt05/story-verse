import { RegisteredCharacters } from "@drincs/pixi-vn";
import Character from "../models/Character";

export const mc = new Character("mc", {
    name: "Me",
});

export const james = new Character("james", {
    name: "James",
    color: "#0084ac",
});

export const steph = new Character("steph", {
    name: "Steph",
    color: "#ac5900",
});

export const sly = new Character("sly", {
    name: "Sly",
    color: "#6d00ac",
});

// Horror visual novel characters
export const minh = new Character("minh", {
    name: "Minh",
    color: "#4a90e2",
});

export const tuan = new Character("tuan", {
    name: "Tuấn",
    color: "#e24a4a",
});

export const lan = new Character("lan", {
    name: "Lan",
    color: "#e2b84a",
});

export const mai = new Character("mai", {
    name: "Mai",
    color: "#9b4ae2",
});

export const fmale = new Character("fmale", {
    name: "Fmale",
    color: "#e2b84a",
});
RegisteredCharacters.add([mc, james, steph, sly, minh, tuan, lan, mai, fmale]);
