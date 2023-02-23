import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [eslintPlugin(), solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
