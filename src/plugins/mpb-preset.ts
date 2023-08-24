/* eslint-disable import/prefer-default-export */
import type { Config } from "tailwindcss";
import { mpbPlugin } from "./mpb-plugin";

export const mbpPreset = {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                latoBlack: "LatoBlack, sans-serif",
                latoBold: "LatoBold, sans-serif",
                latoLight: "LatoLight, sans-serif",
                latoRegular: "LatoRegular, sans-serif",
                latoThin: "LatoThin, sans-serif",
                Montserrat: "Montserrat",
            },
        },
    },
    plugins: [mpbPlugin],
} satisfies Config;
