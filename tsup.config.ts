import { defineConfig } from 'tsup';

export default defineConfig({
  entry: { cheat: 'src/main.ts' },
  format: 'cjs',
  dts: false,
  splitting: false,
  clean: true,
  minify: 'terser',
  target: 'firefox115', // oldest supported ESR
});
