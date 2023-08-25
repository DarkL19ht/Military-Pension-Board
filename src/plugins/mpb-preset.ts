/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import type { Config } from "tailwindcss";
import tailwindDebugScreen from "tailwindcss-debug-screens";
import tailwindForm from "@tailwindcss/forms";
import tailwindScrollbar from "tailwind-scrollbar";
import { mpbPlugin } from "./mpb-plugin";

export const mbpPreset = {
    content: [],
    plugins: [mpbPlugin, tailwindDebugScreen, tailwindForm, tailwindScrollbar],
} satisfies Config;
