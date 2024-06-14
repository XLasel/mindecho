import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgrPlugin from "vite-plugin-svgr";
import { resolve } from "path";

const root = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      include: "**/*.svg",
      svgrOptions: {
        exportType: "default",
      },
    }),
  ],
  // base: "/todos-react/",
  resolve: {
    alias: {
      "@": resolve(root),
      "@styles": resolve(root, "styles"),
    },
  },
  css: {
    modules: {
      generateScopedName: "[name]_[local]__[hash:base64:5]",
      localsConvention: "camelCaseOnly",
    },
  },
});
