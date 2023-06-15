/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { resolve as pathResolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

const resolve = (path: string) => pathResolve(__dirname, path);
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [react(), svgr(), tsconfigPaths()],
    resolve: {
        alias: {
            "~": resolve("src"),
        },
    },
    test: {
        coverage: {
            provider: "istanbul",
            all: true,
            include: ["src/**/*.tsx"],
            exclude:["src/main.tsx"],
            reporter: ['text', 'json', 'html'],
        },
        globals: true,
        environment: "jsdom",
        watch: true
    },
});
