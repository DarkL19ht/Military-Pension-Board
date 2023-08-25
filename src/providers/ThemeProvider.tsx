/* eslint-disable react/require-default-props */
import React, { createContext, useContext, useEffect, useState, useMemo } from "react";

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: string;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: string;
    setTheme: (theme: string) => void;
};

const initialState = {
    theme: "system",
    setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export default function ThemeProvider({
    children,
    defaultTheme = "light", // set default theme here
    storageKey = "mpb-i-theme",
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState(
        () => localStorage.getItem(storageKey) || defaultTheme
    );

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove("light", "dark");

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";

            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(theme);
    }, [theme]);

    const value = useMemo(() => {
        return {
            theme,
            setTheme: (val: string) => {
                localStorage.setItem(storageKey, val);
                setTheme(val);
            },
        };
    }, [storageKey, theme]);

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider");

    return context;
};
