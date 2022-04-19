import { Children, forwardRef, useState } from "react";
import { ComponentType, ReactFragment, ReactNode } from "react";
import { ParentComponentProps } from "../../../types";

interface ButtonGroupElement {
  active: boolean;
  value: any;
}

interface ButtonGroupProps {
  children: ComponentType<ButtonGroupElement>[];
  defaultValue: any;
}

const ButtonGroup = forwardRef(({ children, defaultValue }: ButtonGroupProps, ref) => {
  return <></>;
});

export default ButtonGroup;
