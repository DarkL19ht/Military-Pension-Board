/* eslint-disable import/no-extraneous-dependencies */
import plugin from "tailwindcss/plugin";

// eslint-disable-next-line import/prefer-default-export
export const shadcnPlugin = plugin(
    // 1. Add css variable definitions to the base layer
    function ({ addBase }) {
        addBase({
            ":root": {
                "--background": "147, 100%, 26%",
                "--foreground": "220, 100%, 98%",
                "--card": "0 0% 100%",
                "--card-foreground": "224 71.4% 4.1%",
                "--popover": "0 0% 100%",
                "--popover-foreground": "224 71.4% 4.1%",
                "--primary": "220.9 39.3% 11%",
                "--primary-foreground": "210 20% 98%",
                "--secondary": "220 14.3% 95.9%",
                "--secondary-foreground": "220.9 39.3% 11%",
                "--muted": "220 14.3% 95.9%",
                "--muted-foreground": "220 8.9% 46.1%",
                "--accent": "220 14.3% 95.9%",
                "--accent-foreground": "220.9 39.3% 11%",
                "--destructive": "0 84.2% 60.2%",
                "--destructive-foreground": "210 20% 98%",
                "--border": "220 13% 91%",
                "--input": "220 13% 91%",
                "--ring": "224 71.4% 4.1%",
                "--radius": "0.5rem",
            },
            ".dark": {
                "--background": "224 71.4% 4.1%",
                "--foreground": "210 20% 98%",
                "--card": "224 71.4% 4.1%",
                "--card-foreground": "210 20% 98%",
                "--popover": "224 71.4% 4.1%",
                "--popover-foreground": "210 20% 98%",
                "--primary": "210 20% 98%",
                "--primary-foreground": "220.9 39.3% 11%",
                "--secondary": "215 27.9% 16.9%",
                "--secondary-foreground": "210 20% 98%",
                "--muted": "215 27.9% 16.9%",
                "--muted-foreground": "217.9 10.6% 64.9%",
                "--accent": "215 27.9% 16.9%",
                "--accent-foreground": "210 20% 98%",
                "--destructive": "0 62.8% 30.6%",
                "--destructive-foreground": "210 20% 98%",
                "--border": "215 27.9% 16.9%",
                "--input": "215 27.9% 16.9%",
                "--ring": "216 12.2% 83.9%",
            },
        });
        addBase({
            "*": {
                "@apply border-border": {},
            },
            body: {
                "@apply bg-foreground text-background": {},
            },
        });
    },
    {
        // darkMode: ["class"],
        theme: {
            container: {
                center: true,
                padding: "2rem",
                screens: {
                    "2xl": "1400px",
                },
            },
            extend: {
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
                    destructive: {
                        DEFAULT: "hsl(var(--destructive))",
                        foreground: "hsl(var(--destructive-foreground))",
                    },
                    muted: {
                        DEFAULT: "hsl(var(--muted))",
                        foreground: "hsl(var(--muted-foreground))",
                    },
                    accent: {
                        DEFAULT: "hsl(var(--accent))",
                        foreground: "hsl(var(--accent-foreground))",
                    },
                    popover: {
                        DEFAULT: "hsl(var(--popover))",
                        foreground: "hsl(var(--popover-foreground))",
                    },
                    card: {
                        DEFAULT: "hsl(var(--card))",
                        foreground: "hsl(var(--card-foreground))",
                    },
                    header: {
                        DEFAULT: "hsl(var(--header-background))",
                    },
                },
                borderRadius: {
                    slg: "var(--radius)",
                    smd: "calc(var(--radius) - 2px)",
                    ssm: "calc(var(--radius) - 4px)",
                },
                keyframes: {
                    "accordion-down": {
                        from: { height: "0" },
                        to: { height: "var(--radix-accordion-content-height)" },
                    },
                    "accordion-up": {
                        from: { height: "var(--radix-accordion-content-height)" },
                        to: { height: "0" },
                    },
                },
                animation: {
                    "accordion-down": "accordion-down 0.2s ease-out",
                    "accordion-up": "accordion-up 0.2s ease-out",
                },
            },
        },
    }

    // 2. extend the tailwindcss theme with "themable" utilities
);
