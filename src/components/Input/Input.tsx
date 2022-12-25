import React, { ComponentPropsWithoutRef } from "react";
import Flex from "../Flex";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  formError?: string;
}

type Conditionals =
  | { as?: "money"; fractionals?: boolean; valueAsCents?: boolean }
  | { as?: "phone"; withAreaSelect?: boolean }
  | { as?: "email" }
  | { as?: "text" };

type Props = InputProps & Conditionals;

const Input = () =>
  React.forwardRef(({ as = "text" }: Props, ref) => {
    return <label></label>;
  });

export default Input;
