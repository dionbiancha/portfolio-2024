import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Adicione uma configuração personalizada para servir o arquivo robots.txt
    fs: {
      // Certifique-se de que o caminho para o arquivo robots.txt seja correto
      allow: [".", ".."],
    },
  },
});
