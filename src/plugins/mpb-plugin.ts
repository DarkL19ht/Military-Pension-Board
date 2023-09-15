/* eslint-disable import/prefer-default-export */
import plugin from "tailwindcss/plugin";

export const mpbPlugin = plugin(
    function ({ addBase }) {
        addBase({
            ":root": {
                "--background": "147, 100%, 26%", // hsl(0 0% 100%)
                "--foreground": "220, 100%, 98%", // hsl(224 71.4% 4.1%)

                "--mpb-color-primary": "147, 100%, 26%", // hsl(147, 100%, 26%)
                "--mpb-color-primary-100": "147, 100%, 21%", // hsla(147, 100%, 21%)
                "--mpb-color-primary-200": "147, 64%, 38%", // hsla(147, 64%, 38%)
                "--mpb-color-primary-300": "147, 51%, 61%", // hsla(147, 51%, 61%);
                "--mpb-color-primary-400": "147, 100%, 85%,", // hsla(147, 100%, 85%);
                "--mpb-color-success": "147, 64%, 38%", // hsla(147, 64%, 38%)
                "--mpb-color-warning": "44, 94%, 48%", // hsla(44, 94%, 48%)
                "--mpb-color-error": "0, 72%, 52%", // hsla(0, 72%, 52%)
                "--mpb-color-secondary": "0, 72%, 52%", // hsla(0, 72%, 52%)
                "--mpb-color-info": "0, 72%, 52%", // hsla(216, 96%, 60%)
                "--mpb-color-accent": "147, 100%, 11%", // hsla(147, 100%, 11%)
                "--mpb-color-black": "0, 0%, 0%", // hsla(0, 0%, 0%, 1)
                "--mpb-color-white": "100, 100%, 100%", // hsla(100, 100%, 100%, 1);
                "--mpb-color-white-100": "220, 50%, 98%", // background: hsla(220, 50%, 98%);
                "--mpb-color-neutral-100": "220, 50%, 98%", // background: hsla(220, 50%, 98%);
                "--mpb-color-neutral-200": "218, 40%, 96%", // background: hsla(218, 40%, 96%, 1);
                "--mpb-color-neutral-300": "220, 13%, 91%", // background: hsla(220, 13%, 91%, 1);
                "--mpb-color-neutral-400": "0, 1%, 84%, 1", // background: hsla(0, 1%, 84%, 1);
                "--mpb-color-neutral-500": "0, 0%, 74%", // background: hsla(0, 0%, 74%, 1);
                "--mpb-color-neutral-600": "211, 19%, 55%", // background: hsla(211, 19%, 55%, 1);
                "--mpb-color-neutral-700": "0, 8%, 22%, 1", // background: hsla(0, 8%, 22%, 1);
                "--mpb-color-neutral-800": "221, 39%, 11%", // background: hsla(221, 39%, 11%, 1);
                "--mpb-color-neutral-input": "220 13% 91%", // hsl(220 13% 91%)
                "--radius": "0.75rem",
                "--input": "0.75rem",
            },
            ".dark": {
                "--background": "224 71.4% 4.1%", // hsl(224 71.4% 4.1%)
                "--foreground": "210 20% 98%", // hsl(210 20% 98%)
                "--mpb-color-primary": "221, 39%, 11%", //  background: hsla(221, 39%, 11%, 1);
            },
        });

        addBase({
            "*": {
                // "@apply bord": {},
            },
            body: {
                // "@apply text-background": {},
            },

            h1: {
                "@apply text-xl font-medium capitalize": {},
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
                    background: "hsl(var(--background))",
                    foreground: "hsl(var(--foreground))",
                    primary: {
                        DEFAULT: "hsl(var(--mpb-color-primary))",
                        foreground: "hsl(var(--mpb-color-white))",
                    },
                    secondary: {
                        DEFAULT: "hsl(var(--mpb-color-secondary))",
                        foreground: "hsl(var(--mpb-color-white))",
                    },
                    success: {
                        DEFAULT: "hsl(var(--mpb-color-success))",
                        foreground: "hsl(var(--mpb-color-white))",
                    },
                    warning: {
                        DEFAULT: "hsl(var(--mpb-color-warning))",
                        foreground: "hsl(var(--mpb-color-white))",
                    },
                    info: {
                        DEFAULT: "hsl(var(--mpb-color-info))",
                        foreground: "hsl(var(--mpb-color-white))",
                    },
                    error: {
                        DEFAULT: "hsl(var(--mpb-color-error))",
                        foreground: "hsl(var(--mpb-color-white))",
                    },
                },
                textColor: {
                    btn: {
                        DEFAULT: "hsl(var(--mpb-color-white))",
                        primary: "hsl(var(--mpb-color-white))",
                        secondary: "hsl(var(--mpb-color-white))",
                        warning: "hsl(var(--mpb-color-white))",
                        cancel: "hsl(var(--mpb-color-neutral-700))",
                        disabled: "hsl(var(--mpb-color-white))",
                    },
                    sidebar: {
                        link: "hsl(var(--mpb-color-white))",
                        icon: "hsl(var(--mpb-color-white))",
                        "icon-active": "hsl(var(--mpb-color-white))",
                        "link-active": "hsl(var(--mpb-color-primary))",
                    },
                    outline: {
                        primary: "hsl(var(--mpb-color-primary))",
                        secondary: "hsl(var(--mpb-color-secondary))",
                        info: "hsl(var(--mpb-color-info))",
                        warning: "hsl(var(--mpb-color-warning))",
                    },
                },
                backgroundColor: {
                    sidebar: {
                        surface: "hsl(var(--mpb-color-primary))",
                        "active-link": "hsl(var(--mpb-color-neutral-300))",
                    },
                    btn: {
                        primary: "hsl(var(--mpb-color-primary))",
                        secondary: "hsl(var(--mpb-color-secondary))",
                        info: "hsl(var(--mpb-color-info))",
                        warning: "hsl(var(--mpb-color-warning))",
                        cancel: "hsl(var(--mpb-color-neutral-400))",
                        disabled: "hsl(var(--mpb-color-neutral-400))",
                        clicked: "hsl(var(--mpb-color-primary-100))",
                        outline: "hsl(var(--mpb-color-white))",
                    },
                    outline: {
                        DEFAULT: "hsl(var(--mpb-color-white))",
                        primary: "hsl(var(--mpb-color-white))",
                        secondary: "hsl(var(--mpb-color-white))",
                        warning: "hsl(var(--mpb-color-white))",
                        success: "hsl(var(--mpb-color-white))",
                    },
                    input: {
                        default: "hsl(var(--mpb-color-neutral-input))",
                    },
                },
                borderColor: {
                    outline: {
                        primary: "hsl(var(--mpb-color-primary))",
                        secondary: "hsl(var(--mpb-color-secondary))",
                        info: "hsl(var(--mpb-color-info))",
                        warning: "hsl(var(--mpb-color-warning))",
                    },
                },
                borderRadius: {
                    btn: "var(--radius)",
                    "btn-lg": "var(--radius)",
                    "btn-md": "calc(var(--radius) - 2px)",
                    "btn-sm": "calc(var(--radius) - 4px)",
                    input: "20px",
                },
            },
        },
    }
);
