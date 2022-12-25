import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { OneOf } from "../../utils/oneOf";

interface FlexProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  tw?: string;
}
interface IsCol {
  col?: true;
}
interface IsRow {
  row?: true;
}
interface IsItemsCenter {
  itemsCenter?: true;
}
interface IsItemsEnd {
  itemsEnd?: true;
}
interface IsItemsStart {
  itemsStart?: true;
}
interface IsJustifyCenter {
  justifyCenter?: true;
}
interface IsJustifyStart {
  justifyStart?: true;
}
interface IsJustifyEnd {
  justifyEnd?: true;
}
interface IsJustifyBetween {
  justifyBetween?: true;
}

type ConditionalDir = OneOf<[IsCol, IsRow]>;
type ConditionalItems = OneOf<[IsItemsCenter, IsItemsEnd, IsItemsStart]>;
type ConditionalJustify = OneOf<
  [IsJustifyCenter, IsJustifyStart, IsJustifyEnd, IsJustifyBetween]
>;

type Props = FlexProps & ConditionalDir & ConditionalItems & ConditionalJustify;

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
