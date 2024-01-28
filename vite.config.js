/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
export default defineConfig({
    server: {
        port: 8080,
        open: '/index.html'
    }
});
