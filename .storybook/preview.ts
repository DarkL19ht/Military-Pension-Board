import "../src/index.css";

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
};

export default preview;
