import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    splitting: false,
    sourcemap: false,
    clean: true,
    minify: true,
    format: 'esm',
    dts: true,
    outDir: 'dist',
    define: {
      'process.env.BUILD_FORMAT': '"esm"',
    },
  }
]);
