import React, { ReactNode } from "react";
import Flex from "../Flex/Flex";

interface GridProps {
  gap?: number;
  colWidth?: number;
  children: ReactNode;
}

type Conditionals = {};

type Props = GridProps & Conditionals;

const Grid = ({ colWidth = 16, children }: Props) => {
  const colWidthStyle = `grid-cols-[repeat(auto-fill,minmax(theme(width.${colWidth}),1fr))]}`;
  return <div className={`grid p-2 gap-2 ${colWidthStyle}`}>{children}</div>;
};

export default Grid;
