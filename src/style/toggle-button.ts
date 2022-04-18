import styled, { css } from "styled-components";

export interface ToggleButtonProps {
  active?: boolean;
}

const activeStyle = css`
  background-color: ${(props) => props.theme.highlight};
`;

export const ToggleButton = styled.div<ToggleButtonProps>`
  color: ${(props) => props.theme.text};
  border-radius: 6px;
  background-color: ${(props) => props.theme.neutral};
  cursor: pointer;
  user-select: none;
  padding: 6px;

  ${({ active }) => (active ? activeStyle : "")}

  &:hover {
    filter: saturate(200%);
    background-color: ${(props) => props.theme.highlight};
  }
`;
