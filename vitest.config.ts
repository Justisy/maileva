import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  root: ".",
  test: {
    setupFiles: ["dotenv/config"],
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
});
