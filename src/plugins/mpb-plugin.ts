/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import plugin from "tailwindcss/plugin";

export const mpbPlugin = plugin(function ({ addBase }) {
    addBase({
        ":root": {
            "--mpb-primary": "rgba()",
        },
    });
});
