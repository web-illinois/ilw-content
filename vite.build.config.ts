import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist/cdn",
        lib: {
            name: "ilw-content",
            entry: "ilw-content.ts",
            fileName: "ilw-content",
            formats: ["es"],
        }
    },
    server: {
        hmr: false,
    },
});
