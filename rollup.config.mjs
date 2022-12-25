import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import p from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    external: ["react-dom"],
    output: [
      {
        file: p.main,
        format: "cjs",
      },
      {
        file: p.module,
        format: "esm",
      },
    ],
    plugins: [
      json(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({ config: { path: "./postcss.config.js" } }),
      terser({ sourceMap: true }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: ["../styles/main.css"],
  },
];
