import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Flex, Item } from "../src/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Flex",
  component: Flex,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    row: {
      type: { name: "boolean", required: false },
      description:
        "<b>Default direction</b>, If set, flex direction is row, never's: <em>col</em>",
    },
    col: {
      type: { name: "boolean", required: false },
      description: "If set flex direction is column, never's: <em>row</em>",
    },
    itemsCenter: {
      type: { name: "boolean", required: false },
      description:
        "<b>Default alignment</b>, If set, aligns items as center, never's: <em>itemsEnd, itemsStart</em>",
    },
    itemsEnd: {
      type: { name: "boolean", required: false },
      description:
        "If set, aligns items as end, never's: <em>itemsCenter, itemsStart</em>",
    },
    itemsStart: {
      type: { name: "boolean", required: false },
      description:
        "If set, aligns items as start, never's: <em>itemsCenter, itemsEnd</em>",
    },
    justifyCenter: {
      type: { name: "boolean", required: false },
      description:
        "<b>Default justify</b>, If set, justifies items as center, never's: <em>justifyEnd, justifyStart, justifyBetween</em>",
    },
    justifyEnd: {
      type: { name: "boolean", required: false },
      description:
        "If set, justifies items as end, never's: <em>justifyCenter, justifyStart, justifyBetween</em>",
    },
    justifyStart: {
      type: { name: "boolean", required: false },
      description:
        "If set, justifies items as start, never's: <em>justifyCenter, justifyEnd, justifyBetween</em>",
    },
    justifyBetween: {
      type: { name: "boolean", required: false },
      description:
        "If set, justifies items as between, never's: <em>justifyCenter, justifyEnd, justifyStart</em>",
    },
    tw: {
      type: { name: "string", required: false },
      description: "Tailwindcss string",
    },
    children: {
      description: "React Node",
    },
  },
} as ComponentMeta<typeof Flex>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Row.args = {
  row: true,
  children: (
    <>
      <Item className="bg-violet-400 w-4 text-center">1</Item>
      <Item grow className="bg-violet-300 w-4 text-center">
        2
      </Item>
      <Item className="bg-violet-400 w-4 text-center">3</Item>
      <Item className="bg-violet-400 w-4 text-center">4</Item>
    </>
  ),
  tw: "gap-8 border-2",
};

export const Col = Template.bind({});
Col.args = {
  col: true,
  children: (
    <>
      <Item className="bg-violet-400 w-4 text-center">1</Item>
      <Item className="bg-violet-400 w-4 text-center">2</Item>
      <Item className="bg-violet-400 w-4 text-center">3</Item>
      <Item className="bg-violet-400 w-4 text-center">4</Item>
    </>
  ),
  tw: "gap-4 border-2",
};

export const JustifyEnd = Template.bind({});
JustifyEnd.args = {
  justifyEnd: true,
  children: (
    <>
      <Item className="bg-violet-400 w-4 text-center">1</Item>
      <Item className="bg-violet-400 w-4 text-center">2</Item>
      <Item className="bg-violet-400 w-4 text-center">3</Item>
      <Item className="bg-violet-400 w-4 text-center">4</Item>
    </>
  ),
  tw: "gap-6 border-2",
};

export const JustifyBetween = Template.bind({});
JustifyBetween.args = {
  justifyBetween: true,
  children: (
    <>
      <Item className="bg-violet-400 w-4 text-center">1</Item>
      <Item className="bg-violet-400 w-4 text-center">2</Item>
      <Item className="bg-violet-400 w-4 text-center">3</Item>
      <Item className="bg-violet-300 w-4 text-center">4</Item>
    </>
  ),
  tw: "border-2",
};

export const ItemsStart = Template.bind({});
ItemsStart.args = {
  itemsStart: true,
  col: true,
  children: (
    <>
      <Item className="bg-violet-400 w-4 text-center">1</Item>
      <Item className="bg-violet-400 w-4 text-center">2</Item>
      <Item className="bg-violet-400 w-4 text-center">3</Item>
      <Item className="bg-violet-400 w-4 text-center">4</Item>
    </>
  ),
  tw: "gap-2 border-2",
};

export const ItemsEnd = Template.bind({});
ItemsEnd.args = {
  itemsEnd: true,
  col: true,
  children: (
    <>
      <Item className="bg-violet-300 w-4 text-center">1</Item>
      <Item className="bg-violet-400 w-4 text-center">2</Item>
      <Item className="bg-violet-400 w-4 text-center">3</Item>
      <Item className="bg-violet-400 w-4 text-center">4</Item>
    </>
  ),
  tw: "gap-2 border-2",
};
