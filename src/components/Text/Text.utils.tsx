import { Conditionals } from "./Text";

export const getComputedClassName = (props: Conditionals): string => {
  const { black, extrabold, bold, semibold, regular, light, extralight, thin } =
    props;
  const { sans, serif, mono } = props;
  const { xs, sm, base, lg, xl, xxl, xxxl, xxxxl, xxxxxl } = props;

  const weight = black
    ? "font-black"
    : extrabold
    ? "font-extrabold"
    : bold
    ? "font-bold"
    : semibold
    ? "font-semibold"
    : regular
    ? "font-regular"
    : light
    ? "font-light"
    : extralight
    ? "font-extralight"
    : thin
    ? "font-thin"
    : "";

  const style = sans
    ? "font-sans"
    : serif
    ? "font-serif"
    : mono
    ? "font-mono"
    : "";

  const size = xs
    ? "text-xs"
    : sm
    ? "text-sm"
    : base
    ? "text-base"
    : lg
    ? "text-lg"
    : xl
    ? "text-xl"
    : xxl
    ? "text-2xl"
    : xxxl
    ? "text-3xl"
    : xxxxl
    ? "text-4xl"
    : xxxxxl
    ? "text-5xl"
    : "";

  return `${weight} ${style} ${size}`.trim();
};
