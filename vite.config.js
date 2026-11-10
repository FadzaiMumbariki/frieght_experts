import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Mirrors Vercel's `cleanUrls` behaviour locally so /about resolves to public/about.html
// in `vite`, `vite preview`, and in production.
function cleanUrls() {
  const rewrite = (req) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') return;
    const [pathname, query] = (req.url || '').split('?');
    if (!pathname || pathname === '/' || /\.[a-z0-9]+$/i.test(pathname)) return;
    const clean = pathname.replace(/\/+$/, '');
    if (!clean) return;
    const file = path.join(process.cwd(), 'public', `${clean}.html`);
    if (fs.existsSync(file)) req.url = `${clean}.html${query ? `?${query}` : ''}`;
  };

  return {
    name: 'clean-urls',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req);
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewrite(req);
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), cleanUrls()],
  server: {
    port: 3000,
    open: true
  }
});
