import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import p from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: p.main,
        format: "cjs",
        plugins: [terser()],
      },
      {
        file: p.module,
        format: "esm",
        plugins: [terser()],
      },
    ],
    plugins: [
      json(),
      resolve(),
      postcss({ config: { path: "./postcss.config.js" } }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    external: ["../styles/main.css"],
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
