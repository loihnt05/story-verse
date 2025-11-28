// ...existing code...
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// ...existing code...

const root = document.getElementById("root");
if (!root) {
    throw new Error("root element not found");
}
const reactRoot = createRoot(root);
reactRoot.render(<App />);
// ...existing code...