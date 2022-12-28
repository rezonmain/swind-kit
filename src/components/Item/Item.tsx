import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { OneOf } from "../../utils/oneOf";

interface ItemProps extends ComponentPropsWithoutRef<"div"> {
  tw?: string;
  children?: ReactNode;
}

type Props = ItemProps & OneOf<[{ grow?: true }, { shrink?: true }]>;

/**
 * Generic Item component
 */
const Item = ({ tw, grow, shrink, children, ...props }: Props) => {
  return (
    <div
      {...props}
      className={`${grow && "grow"} ${shrink && "shrink"} ${tw ?? ""} ${
        props.className ?? ""
      }`}
    >
      {children}
    </div>
  );
};
export default Item;
