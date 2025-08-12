import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "a5d15c76e0816413fd1b05d7ea8d47b3.serveo.net",
      "3249bf0a79bda98ec0a9eb288d73765b.serveo.net",
      "6bf2e5fe7681d308d44088dd2cc22195.serveo.net"
    ]
  },
  plugins: [dyadComponentTagger(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));