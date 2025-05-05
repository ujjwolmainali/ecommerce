import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "Sabaiko Bajar",
        short_name: "Skbajar",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/u.png",  // Correct path (must be inside public/)
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/u.png",  // You can use the same image for different sizes
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});
