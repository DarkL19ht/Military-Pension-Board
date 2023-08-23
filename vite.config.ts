/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./src/setupTest.ts"],
        css: true,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@redux": path.resolve(__dirname, "src/redux"),
        },
    },
    server: {
        host: true,
        strictPort: true,
        port: 4006,
    },
});
