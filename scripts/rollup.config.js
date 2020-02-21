import babel from "rollup-plugin-babel"
import minify from "rollup-plugin-babel-minify"

const banner = `/**
 * @author 1uokun <https://github.com/1uokun>
 * @copyright 2020 1uokun. All rights reserved.
 * See LICENSE file in root directory for full license.
 */`
const cjsOutro = `module.exports = Delay;
module.exports.Delay = module.exports["default"] = Delay;
`
const umdOutro = `if (typeof module === "undefined" && typeof define === "undefined") {
    var global = Function("return this")()
    global.EventLoopDelay = Delay
}
`

export default [
    {
        input: "src/Delay.mjs",
        output: {
            file: "dist/event-loop-delay.mjs",
            sourcemap: true,
            format: "es",
            banner,
        },
    },
    {

        input: "src/Delay.mjs",
        output: {
            file: "dist/event-loop-delay.js",
            sourcemap: true,
            format: "cjs",
            banner,
            outro: cjsOutro,
        },
    },
    {
        input: "src/Delay-es5.mjs",
        output: {
            file: "dist/event-loop-delay.umd.js",
            sourcemap: true,
            format: "umd",
            name: "EventLoopDelay",
            outro: umdOutro,
        },
        plugins: [
            babel({
                babelrc: false,
                runtimeHelpers: true,
                presets: ["@babel/preset-env"]
            }),
            minify({
                comments: false,
                banner,
                sourceMap: true,
            }),
        ],
    },
]
