import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ParentComponentProps, StylableComponentProps } from "../../../types";

export interface StyledToggleButtonProps {
  active?: boolean;
}

const activeStyle = css`
  background-color: ${(props) => props.theme.highlight};
`;

export const StyledToggleButton = styled.div<StyledToggleButtonProps>`
  color: ${(props) => props.theme.text};
  border-radius: 6px;
  background-color: ${(props) => props.theme.neutral};
  cursor: pointer;
  user-select: none;
  padding: 6px;

  ${({ active }) => (active ? activeStyle : "")}

  &:hover {
    background-color: ${(props) => props.theme.highlight};
  }
`;

export interface ToggleButtonProps extends ParentComponentProps, StylableComponentProps {
  onToggle?: (value: boolean) => void;
  activeDefault?: boolean;
  override?: boolean;
  overrideValue?: boolean;
}

const ToggleButton = (props: ToggleButtonProps) => {
  const { className, children, style, onToggle, activeDefault, override, overrideValue } = props;
  const [active, setActive] = useState(activeDefault || false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setActive(!active);
    onToggle && onToggle(active);
  };

  return (
    <StyledToggleButton
      style={style}
      className={className}
      active={override ? overrideValue : active}
      onClick={handleClick}
    >
      {children}
    </StyledToggleButton>
  );
};

export default ToggleButton;
