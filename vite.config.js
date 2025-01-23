import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [react()],
      build: {
        lib: {
          entry: 'src/index.js',
          name: 'my-react-components',
          fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
          // external: ['react', 'react-dom'], // Optional: Exclude React from the bundle
        },
      },
    });
