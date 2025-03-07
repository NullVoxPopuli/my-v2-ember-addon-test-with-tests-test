import { defineConfig } from 'vite';
import { extensions, ember, hbs } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

export default defineConfig(({ mode }) => {
  if (mode === 'test') {
    return {
      build: { rollupOptions: { input: { main: 'index.html' } } },
      plugins: [
        ember(),
        babel({
          extensions,
        }),
      ],
    };
  }

  throw new Error(`Build not implemented. Use rollup for now`);
});
