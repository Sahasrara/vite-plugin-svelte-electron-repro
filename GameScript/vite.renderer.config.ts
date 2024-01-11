import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig(async () => ({
    plugins: [svelte()],
    resolve: {
        alias: {
            '@lib': path.resolve(__dirname, './src/lib'),
        },
    },
}));
