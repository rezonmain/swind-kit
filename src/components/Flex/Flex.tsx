import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { OneOf } from "../../utils/oneOf";

interface FlexProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  tw?: string;
}

type ConditionalDir = OneOf<[{ col?: true }, { row?: true }]>;

type ConditionalItems = OneOf<
  [{ itemsCenter?: true }, { itemsEnd?: true }, { itemsStart?: true }]
>;
type ConditionalJustify = OneOf<
  [
    { justifyCenter?: true },
    { justifyStart?: true },
    { justifyEnd?: true },
    { justifyBetween?: true }
  ]
>;

type Props = FlexProps & ConditionalDir & ConditionalItems & ConditionalJustify;

/**
 * Generic Flex container, can be used with Item component or any other blocked element
 */
const Flex = ({
  col,
  justifyEnd,
  justifyStart,
  justifyBetween,
  itemsEnd,
  itemsStart,
  tw,
  ...props
}: Props) => {
  return (
    <div
      {...props}
      className={`flex ${col ? "flex-col" : "flex-row"}  ${
        justifyEnd
          ? "justify-end"
          : justifyStart
          ? "justify-start"
          : justifyBetween
          ? "justify-between"
          : "justify-center"
      } ${
        itemsEnd ? "items-end" : itemsStart ? "items-start" : "items-center"
      } ${tw ?? ""} ${props.className ?? ""}`}
    >
      {props.children}
    </div>
  );
};

export default Flex;
