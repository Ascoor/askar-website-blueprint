
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
import { promises as fs } from "fs";
import { componentTagger } from "lovable-tagger";

function generateSitemapPlugin() {
  return {
    name: "generate-sitemap",
    async buildEnd() {
      const routes = ["/", "/demo", "/services", "/about", "/portfolio"];
      const urls = routes
        .map((r) => `  <url>\n    <loc>https://askarsolutions.com${r}</loc>\n  </url>`)
        .join("\n");
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
      await fs.writeFile(path.resolve(__dirname, "public", "sitemap.xml"), xml);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  
  return {
    // Server config only applies in development
    server: isDev ? {
        host: "localhost", // أو "127.0.0.1"
  port: 8080,
      hmr: {
        port: 8080,
        host: "localhost",
        protocol: 'ws'
      },
      strictPort: false,
      cors: true
    } : {},
    
    // Build configuration for production
    build: {
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: false, // Disable sourcemaps in production for security
      minify: "esbuild",
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
          }
        }
      }
    },
    
    // Only include development plugins in development mode
    plugins: [
      react(),
       VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'favicon.png', 'apple-touch-icon.png'],
        manifest: {
          name: 'Askar Solutions',
          short_name: 'Askar',
          start_url: '/',
          display: 'standalone',
          background_color: '#ffffff',
          theme_color: '#3b82f6',
          icons: [
            { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' }
          ],
        },
      }),
      // Only include componentTagger in development
      ...(isDev ? [componentTagger()] : []),
      generateSitemapPlugin(),
    ],
    
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    
    // Ensure no dev dependencies leak into production
    define: {
      __DEV__: JSON.stringify(isDev),
      // Explicitly define WebSocket token for development
      ...(isDev ? {} : {
        'process.env.NODE_ENV': '"production"'
      })
    },
    
    // Preview server config for production testing
    preview: {
      port: 4173,
      host: "0.0.0.0",
    },
    
    // Ensure proper environment handling
    clearScreen: false,
  };
});
