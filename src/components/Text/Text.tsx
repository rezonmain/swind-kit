import { OneOf } from "../../utils/oneOf";
import { getComputedClassName } from "./Text.utils";
import React, { ReactNode } from "react";
import { PolymorphicComponentProps } from "../../utils/polymorphic";

interface TextProps {
  children?: ReactNode;
  tw?: string;
}

type ConditionalWeight = OneOf<
  [
    { black?: true },
    { extrabold?: true },
    { bold?: true },
    { semibold?: true },
    { regular?: true },
    { light?: true },
    { extralight?: true },
    { thin?: true }
  ]
>;

type ConditionalStyle = OneOf<
  [{ sans?: true }, { serif?: true }, { mono?: true }]
>;

type ConditionalSize = OneOf<
  [
    { xs?: true },
    { sm?: true },
    { base?: true },
    { lg?: true },
    { xl?: true },
    { xxl?: true },
    { xxxl?: true },
    { xxxxl?: true },
    { xxxxxl?: true }
  ]
>;

export type Conditionals = ConditionalSize &
  ConditionalWeight &
  ConditionalStyle;

type Props<T extends React.ElementType> = PolymorphicComponentProps<
  T,
  TextProps
> &
  Conditionals;

/**
 * Generic polymorphic-typesafe Text component, pass HTML element via `as` prop, where `as` is any valid HTML element,
 */
const Text = <T extends React.ElementType = "span">({
  as,
  tw = "",
  ...props
}: Props<T>) => {
  const className = getComputedClassName(props);
  const Element = as || "span";
  return (
    <Element
      {...props}
      className={`${className} ${tw} ${props.className ?? ""}`.trim()}
    >
      {props.children ?? ""}
    </Element>
  );
};

export default Text;
