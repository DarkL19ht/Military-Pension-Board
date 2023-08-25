/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-extraneous-dependencies
import plugin from "tailwindcss/plugin";

export const mpbPlugin = plugin(
    function ({ addBase }) {
        addBase({
            ":root": {
                "--mpb-color-primary": "147, 100%, 26%", // hsl(147, 100%, 26%)
                "--mpb-color-primary-100": "147, 100%, 21%", // hsla(147, 100%, 21%)
                "--mpb-color-primary-200": "147, 64%, 38%", // hsla(147, 64%, 38%)
                "--mpb-color-primary-300": "147, 51%, 61%", // hsla(147, 51%, 61%);
                "--mpb-color-primary-400": "147, 100%, 85%,", // hsla(147, 100%, 85%);
                "--mpb-color-warning": "44, 94%, 48%", // hsla(44, 94%, 48%)
                "--mpb-color-danger": "0, 72%, 52%", // hsla(0, 72%, 52%)
                "--mpb-color-info": "0, 72%, 52%", // hsla(216, 96%, 60%)
                "--mpb-color-accent": "147, 100%, 11%,", // hsla(147, 100%, 11%)
                "--mpb-color-black": "(0, 0%, 0%)", // hsla(0, 0%, 0%, 1)
                "--mpb-color-white": "0, 0%, 100%,", // hsla(0, 0%, 100%, 1);
                "--mpb-color-neutral-100": "220, 50%, 98%,", // background: hsla(220, 50%, 98%);
                "--mpb-color-neutral-200": "218, 40%, 96%", // background: hsla(218, 40%, 96%, 1);
                "--mpb-color-neutral-300": "220, 13%, 91%", // background: hsla(220, 13%, 91%, 1);
                "--mpb-color-neutral-400": "0, 72%, 52%", // background: hsla(0, 1%, 84%, 1);
                "--mpb-color-neutral-500": "0, 0%, 74%,", // background: hsla(0, 0%, 74%, 1);
                "--mpb-color-neutral-600": "211, 19%, 55%,", // background: hsla(211, 19%, 55%, 1);
                "--mpb-color-neutral-700": "0, 72%, 52%", // background: hsla(0, 8%, 22%, 1);
                "--mpb-color-neutral-800": "221, 39%, 11%,", // background: hsla(221, 39%, 11%, 1);
            },
        });
    },
    {
        theme: {
            container: {
                center: true,
                padding: "2rem",
                screens: {
                    "2xl": "1400px",
                },
            },
            extend: {
                fontFamily: {
                    latoBlack: "LatoBlack, sans-serif",
                    latoBold: "LatoBold, sans-serif",
                    latoLight: "LatoLight, sans-serif",
                    latoRegular: "LatoRegular, sans-serif",
                    latoThin: "LatoThin, sans-serif",
                    Montserrat: "Montserrat",
                },
                colors: {
                    border: "hsl(var(--border))",
                    input: "hsl(var(--input))",
                    ring: "hsl(var(--ring))",
                    background: "hsl(var(--background))",
                    foreground: "hsl(var(--foreground))",
                    primary: {
                        DEFAULT: "hsl(var(--primary))",
                        foreground: "hsl(var(--primary-foreground))",
                    },
                    secondary: {
                        DEFAULT: "hsl(var(--secondary))",
                        foreground: "hsl(var(--secondary-foreground))",
                    },
                    warning: {
                        DEFAULT: "hsl(var(--secondary))",
                        foreground: "hsl(var(--secondary-foreground))",
                    },
                    header: {
                        DEFAULT: "hsl(var(--header-background))",
                    },
                },
                textColor: {
                    skin: {
                        DEFAULT: "hsl(var(--mpb-color-neutral-700))",
                        primary: "hsl(var(--mpb-color-neutral-700))",
                    },
                },
                backgroundColor: {
                    header: "hsl(var(--mpb-color-primary-400))",
                    primary: "hsl(var(--mpb-color-primary))",
                },
                borderColor: {
                    primary: "hsl(var(--mpb-color-neutral-200))",
                },
            },
        },
    }
);
