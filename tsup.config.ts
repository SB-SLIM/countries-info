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
    outDir: 'dist/esm',
    define: {
      'process.env.BUILD_FORMAT': '"esm"',
    },
  },
  {
    entry: ['src/index.ts'],
    splitting: false,
    sourcemap: false,
    clean: true,
    minify: true,
    format: 'cjs',
    dts: true,
    outDir: 'dist/cjs',
    define: {
      'process.env.BUILD_FORMAT': '"cjs"',
    },
  },
]);
