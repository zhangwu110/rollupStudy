import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: 'dist/bundle.js',
            format: 'cjs',
        },
        {
            file: 'dist/bundle.min.js',
            format: 'cjs',
            plugins: [terser()],
        },
    ],
    plugins: [
        typescript(),
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**'
        }),
        sizeSnapshot()
    ],
    external: ['react', 'react-dom']
};