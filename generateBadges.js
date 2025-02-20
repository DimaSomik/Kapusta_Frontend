import { makeBadge } from "badge-maker";
import fs from "fs";

const badge = makeBadge({
  label: "VS Code",
  message: "Supported",
  labelColor: "#555",
  color: "#007ACC",
  style: "for-the-badge",
  logo: "visualstudiocode",
});

fs.writeFileSync("vscode-badge.svg", badge);
console.log("Badge wygenerowany: vscode-badge.svg");
