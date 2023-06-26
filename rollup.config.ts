

import { RollupOptions } from "rollup";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser"
// export default {
//     input: "src/mian.js",
//     output: {
//         file: './dist/bundle.js',
//         format: 'cjs'
//     }
// }
const config: RollupOptions = {
    input: "./src/mian.js",
    output: [
        {
            file: "./dist/bundle.js",
            format: "cjs"
        },
        {
            file: "./dist/bundle.min.js",
            format: "iife",
            plugins: [
                terser()
            ]
        }

    ],
    plugins: [
        json()
    ]
}
export default config; 