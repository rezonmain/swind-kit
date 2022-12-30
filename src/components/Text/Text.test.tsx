import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Text from "./Text";

describe("<Text> component", () => {
  it("renders with default props", async () => {
    const { baseElement } = render(<Text></Text>);
    expect(baseElement.firstChild?.firstChild?.nodeName).toBe("SPAN");
    expect(baseElement.firstChild?.firstChild?.textContent).toBe("");
  });

  describe("font weight props", () => {
    const testCases = [
      { prop: { black: "true" }, className: "font-black" },
      { prop: { extrabold: "true" }, className: "font-extrabold" },
      { prop: { bold: "true" }, className: "font-bold" },
      { prop: { semibold: "true" }, className: "font-semibold" },
      { prop: { regular: "true" }, className: "font-regular" },
      { prop: { light: "true" }, className: "font-light" },
      { prop: { extralight: "true" }, className: "font-extralight" },
      { prop: { thin: "true" }, className: "font-thin" },
    ];
    it.each(testCases)(
      "renders with classname $className when $prop is set",
      ({ prop, className }) => {
        const { baseElement } = render(
          // @ts-ignore
          <Text as="p" {...prop}>
            font weight
          </Text>
        );
        expect(baseElement.firstChild?.firstChild).toHaveClass(className);
      }
    );
  });

  describe("font style props", () => {
    const testCases = [
      { prop: { sans: "true" }, className: "font-sans" },
      { prop: { mono: "true" }, className: "font-mono" },
      { prop: { serif: "true" }, className: "font-serif" },
    ];
    it.each(testCases)(
      "renders with classname $className when $prop is set",
      ({ prop, className }) => {
        const { baseElement } = render(
          // @ts-ignore
          <Text as="p" {...prop}>
            font weight
          </Text>
        );
        expect(baseElement.firstChild?.firstChild).toHaveClass(className);
      }
    );
  });

  describe("text size props", () => {
    const testCases = [
      { prop: { xs: "true" }, className: "text-xs" },
      { prop: { sm: "true" }, className: "text-sm" },
      { prop: { base: "true" }, className: "text-base" },
      { prop: { lg: "true" }, className: "text-lg" },
      { prop: { xl: "true" }, className: "text-xl" },
      { prop: { xxl: "true" }, className: "text-2xl" },
      { prop: { xxxl: "true" }, className: "text-3xl" },
      { prop: { xxxxl: "true" }, className: "text-4xl" },
      { prop: { xxxxxl: "true" }, className: "text-5xl" },
    ];
    it.each(testCases)(
      "renders with classname $className when $prop is set",
      ({ prop, className }) => {
        const { baseElement } = render(
          // @ts-ignore
          <Text as="p" {...prop}>
            font weight
          </Text>
        );
        expect(baseElement.firstChild?.firstChild).toHaveClass(className);
      }
    );
  });
});
