import React from "react";
import "../src/index.css";
import { withThemeByDataAttribute } from "@storybook/addon-styling";
import Toaster from "../src/components/ui/toast/toaster";


/** @type { import('@storybook/react').Preview } */

type layout = "C" | "F" | "P";

export const getLayout = (layout: layout = "P") => {
    switch (layout) {
        case "C":
            return "centered";
        case "F":
            return "fullscreen";
        default:
            return "padded";
    }
};

const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: getLayout("F"),
    },
    decorators: [
        withThemeByDataAttribute({
            themes: {
                light: "light",
                dark: "dark",
            },
            defaultTheme: "light",
            attributeName: "data-mode",
        }),
        (Story) => {
            return (
                <div>
                    <Story />
                    <Toaster />
                </div>
            );
        },
    ],
};

export default preview;
