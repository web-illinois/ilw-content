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
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-content.css";
                    return "[name][extname]";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
