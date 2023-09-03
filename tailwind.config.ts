import type { Config } from "tailwindcss";
// import { fontFamily } from "tailwindcss/defaultTheme";
// import { shadcnPreset } from "./src/plugins/shadcn-preset";
import { mbpPreset } from "./src/plugins/mpb-preset";

const config = {
    presets: [
        mbpPreset,
        // shadcnPreset,
    ],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
} satisfies Config;

export default config;
