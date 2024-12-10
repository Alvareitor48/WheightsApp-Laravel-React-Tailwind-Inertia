import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: '0.0.0.0', // Permite el acceso desde cualquier lugar
        port: 5173,      // Puerto del servidor de desarrollo
        strictPort: true,
        watch: {
            usePolling: true, // Necesario para Docker
        },
    },
});
