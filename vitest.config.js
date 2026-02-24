import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './resources/js/tests/setup.js',
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
        },
    },
});
