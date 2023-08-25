/* eslint-disable import/prefer-default-export */
import type { Config } from "tailwindcss";
// eslint-disable-next-line import/no-extraneous-dependencies
import animatePlugin from "tailwindcss-animate";
import { shadcnPlugin } from "./shadcn-plugin";

export const shadcnPreset = {
    darkMode: ["class"],
    content: [],
    plugins: [shadcnPlugin, animatePlugin],
} satisfies Config;
