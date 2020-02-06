"use strict"

const babel = require("rollup-plugin-babel")
const commonjs = require("rollup-plugin-commonjs")
const json = require("rollup-plugin-json")
const resolve = require("rollup-plugin-node-resolve")

module.exports = function(config) {
    config.set({
        basePath: "..",
        frameworks: ["mocha"],
        files: ["test/index.js"],
        browsers: ["Chrome", "Firefox", "IE"],
        reporters: ["progress", "growl"],
        preprocessors: { "test/index.js": ["rollup"] },
        rollupPreprocessor: {
            plugins: [
                resolve({ browser: true, preferBuiltins: false }),
                commonjs(),
                json(),
                babel({
                    babelrc: false,
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                modules: false,
                                targets: { browsers: ["ie 11"] },
                            },
                        ],
                    ],
                    externalHelpers: false,
                }),
            ],
            output: {
                format: "iife",
                name: "EventLoopDelay",
                sourcemap: "inline",
            },
        },
    })
}
