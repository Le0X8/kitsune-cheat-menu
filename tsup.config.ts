import { defineConfig } from 'tsup';

export default defineConfig({
  entry: { cheat: 'src/main.ts' },
  format: 'cjs',
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: 'terser',
  target: 'firefox115', // oldest supported ESR
  terserOptions: {
    keep_fnames: true, // prevent mangling cuz we may run into conflicts otherwise
  }
});
