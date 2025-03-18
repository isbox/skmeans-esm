import { defineConfig } from 'rollup';
import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

export default defineConfig([
  {
    input: 'main.js',
    output: {
      file: 'dist/index.min.js',
      format: 'esm'
    },
    plugins: [
        nodeResolve({extensions: ['.js']}),
        esbuild({
            minify: true,
            target: 'es2015',
            sourceMap: true
        })
    ]
  },
]);
