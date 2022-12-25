import React, { ComponentPropsWithoutRef, ReactNode } from "react";

interface FlexProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  tw?: string;
}

type ConditionalsDir =
  | {
      col?: true;
      row?: never;
    }
  | { col?: never; row?: true };

type ConditionalsItems =
  | {
      itemsCenter?: true;
      itemsEnd?: never;
      itemsStart?: never;
    }
  | { itemsCenter?: never; itemsEnd?: true; itemsStart?: never }
  | { itemsCenter?: never; itemsEnd?: never; itemsStart?: true };

type Conditionaljustify =
  | {
      justifyCenter?: true;
      justifyEnd?: never;
      justifyStart?: never;
      justifyBetween?: never;
    }
  | {
      justifyCenter?: never;
      justifyEnd?: true;
      justifyStart?: never;
      justifyBetween?: never;
    }
  | {
      justifyCenter?: never;
      justifyEnd?: never;
      justifyStart?: true;
      justifyBetween?: never;
    }
  | {
      justifyCenter?: never;
      justifyEnd?: never;
      justifyStart?: never;
      justifyBetween?: true;
    };

export type Props = FlexProps &
  ConditionalsDir &
  ConditionalsItems &
  Conditionaljustify;

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
