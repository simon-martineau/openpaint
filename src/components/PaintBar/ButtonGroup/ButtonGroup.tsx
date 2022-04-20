import React, { ReactNode, useState } from "react";
import { StylableComponentProps } from "../../../types";

// interface ButtonGroupElement extends ToggleButtonProps {
//   value: any;
// }

interface ButtonGroupProps extends StylableComponentProps {
  children: ReactNode;
  defaultValue: any;
  onChange?: (value: string | number) => void;
}

const ButtonGroup = ({ children, defaultValue, style, className, onChange }: ButtonGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const childrenToRender = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const handleChildClick = () => {
        if (selectedValue !== child.props.value) {
          setSelectedValue(child.props.value);
          onChange && onChange(child.props.value);
        }
      };
      return React.cloneElement(child, {
        ...child.props,
        onToggle: handleChildClick,
        override: true,
        overrideValue: selectedValue === child.props.value,
      });
    }
  });

  return (
    <div style={style} className={className}>
      {childrenToRender}
    </div>
  );
};

export default ButtonGroup;
