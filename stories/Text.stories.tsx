import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "../src/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Text",
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    as: {
      description:
        "An override of the default HTML tag. Can also be another React component, defaults to span",
    },
    regular: {
      type: { name: "boolean", required: false },
      description:
        "Regular font weight, never's: <em>black, extrabold, bold, semibold, light, extralight, thin</em>",
    },
    black: {
      type: { name: "boolean", required: false },
      description:
        "Black font weight, never's: <em>regular, extrabold, bold, semibold, light, extralight, thin</em>",
    },
    extrabold: {
      type: { name: "boolean", required: false },
      description:
        "Extrabold font weight, never's: <em>black, regular, bold, semibold, light, extralight, thin</em>",
    },
    bold: {
      type: { name: "boolean", required: false },
      description:
        "Bold font weight, never's: <em>black, extrabold, regular, semibold, light, extralight, thin</em>",
    },
    semibold: {
      type: { name: "boolean", required: false },
      description:
        "Semibold font weight, never's: <em>black, extrabold, bold, regular, light, extralight, thin</em>",
    },
    light: {
      type: { name: "boolean", required: false },
      description:
        "Light font weight, never's: <em>black, extrabold, bold, semibold, regular, extralight, thin</em>",
    },
    extralight: {
      type: { name: "boolean", required: false },
      description:
        "Extralight font weight, never's: <em>black, extrabold, bold, semibold, regular, light, thin</em>",
    },
    thin: {
      type: { name: "boolean", required: false },
      description:
        "Thin font weight, never's: <em>black, extrabold, bold, semibold, regular, light, extralight</em>",
    },
    sans: {
      type: { name: "boolean", required: false },
      description: "Sans font style, never's: <em>serif, mono</em>",
    },
    serif: {
      type: { name: "boolean", required: false },
      description: "Serif font style, never's: <em>sans, mono</em>",
    },
    mono: {
      type: { name: "boolean", required: false },
      description: "Monospace font style, never's: <em>serif, mono</em>",
    },
    tw: {
      type: { name: "string", required: false },
      description:
        "Tailwindcss string, setting it here will not work unless tailwind class has been loaded",
    },
    children: {
      description: "React Node",
    },
  },
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  children:
    "Default weight, default font style, defualt size, default element (span)",
};

export const SemiboldMono = Template.bind({});
SemiboldMono.args = {
  as: "p",
  semibold: true,
  mono: true,
  children: "semibold + mono",
};

export const ExtralightSerif = Template.bind({});
ExtralightSerif.args = {
  as: "p",
  extralight: true,
  serif: true,
  children: "Extralight + serif",
};

export const BlackLarge = Template.bind({});
BlackLarge.args = {
  as: "p",
  black: true,
  lg: true,
  children: "Black + lg size",
};

export const FiveXLThin = Template.bind({});
FiveXLThin.args = {
  as: "p",
  thin: true,
  xxxxxl: true,
  children: "Thin + 5xl size",
};

export const ExtraSmallLight = Template.bind({});
ExtraSmallLight.args = {
  as: "p",
  light: true,
  xs: true,
  children: "Light + xs size",
};

export const AsH1 = Template.bind({});
AsH1.args = {
  as: "h1",
  children: "As an h1 element",
};

export const AsH3 = Template.bind({});
AsH3.args = {
  as: "h3",
  children: "As an h3 element",
};

export const AsLabel = Template.bind({});
AsLabel.args = {
  as: "label",
  htmlFor: "inputElement",
  children: (
    <>
      Click me to focus input
      <input id='inputElement'></input>
    </>
  ),
};
