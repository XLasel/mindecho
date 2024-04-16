import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

const root = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/todos-react/",
  resolve: {
    alias: {
      "@": resolve(root),
      "@components": resolve(root, "components"),
      "@constants": resolve(root, "constants"),
      "@assets": resolve(root, "assets"),
      "@hooks": resolve(root, "hooks"),
      "@redux": resolve(root, "redux"),
      "@lib": resolve(root, "lib"),
      "@utils": resolve(root, "utils"),
      "@config": resolve(root, "config"),
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
