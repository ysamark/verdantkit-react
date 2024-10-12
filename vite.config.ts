import path from "node:path";

import react from "@vitejs/plugin-react";
import { pathsToModuleAliases } from "tsconfig-paths-to-module-name-mapper";
import { AliasOptions } from "vite";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

import { compilerOptions } from "./tsconfig.app.json";

const pathAliases = pathsToModuleAliases(compilerOptions.paths, {
  prefix: path.resolve(__dirname, compilerOptions.baseUrl),
});

export default defineConfig({
  plugins: [react(), dts(), tsConfigPaths()],

  test: {
    alias: pathAliases as AliasOptions,
    environment: "node",
    include: ["src/**/*.test.ts", "src/**/*.spec.ts"],
    setupFiles: ["./src/tests/setup.ts"],
    browser: {
      name: "chrome",
      enabled: true,
      headless: true,
      provider: "webdriverio",
    },
    env: {
      API_CLIENT_ID: "MyAPIClientId",
      API_SECRET_KEY: "MyAPISecretKey",
    },
    coverage: {
      enabled: true,
      provider: "istanbul",
    },
    environmentMatchGlobs: [
      ["src/**/*.test.ts", "node"],
      ["src/**/*.spec.ts", "happy-dom"],
    ],
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, "src", "index.ts"),
      name: "@verdantkit/react",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
