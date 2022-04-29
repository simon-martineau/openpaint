import React, { useRef, useState } from "react";
import useOnClickOutside from "src/hooks/use-on-click-outside";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
`;

interface StyledMenuProps {
  show?: boolean;
  width?: number;
  align?: "left" | "right";
}

const StyledMenu = styled.div<StyledMenuProps>`
  user-select: none;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  box-shadow: 1px 1px 5px 0px black;
  width: ${(props) => `${props.width || 200}px`};
  padding: 12px;
  height: fit-content;
  top: calc(100% + 12px);
  ${(props) => ((props.align || "left") === "left" ? "left: 0;" : "right: 0;")}
  background-color: ${(props) => props.theme.neutral};
  color: ${(props) => props.theme.text};
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: stretch;
  gap: 4px;
`;

const activeStyle = css`
  color: ${(props) => props.theme.highlightContrast};
  background-color: ${(props) => props.theme.highlight};
`;

interface StyledMenuButtonProps {
  active?: boolean;
}

const StyledMenuButton = styled.div<StyledMenuButtonProps>`
  cursor: pointer;
  padding: 8px;
  border-radius: 5px;

  ${(props) => (props.active ? activeStyle : "")}
  &:hover {
    ${activeStyle}
  }
`;

interface MenuButtonProps {
  onClick?: (e: React.MouseEvent) => void;
}

export type SelectMenuChoice = { label: string; value: any };

interface SelectMenuProps {
  buttonElement: React.ReactElement<MenuButtonProps>;
  align?: "left" | "right";
  width?: number;
  choices: SelectMenuChoice[];
  defaultChoiceIndex?: number;
  onChange?: (choice: SelectMenuChoice) => void;
}

const SelectMenu = (props: SelectMenuProps) => {
  const { buttonElement, align, width, choices, onChange, defaultChoiceIndex } = props;
  const [isActive, setIsActive] = useState(false);
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(defaultChoiceIndex || 0);
  const ref = useRef(null);

  const toggleActive = () => {
    setIsActive((previous) => !previous);
  };

  const wrappedButton = React.cloneElement(buttonElement, {
    ...buttonElement.props,
    onClick: toggleActive,
  });

  const handleChoiceClick = (choice: SelectMenuChoice, index: number) => {
    setSelectedChoiceIndex(index);
    onChange && onChange(choice);
  };

  useOnClickOutside(ref, () => {
    setIsActive(false);
  });

  return (
    <StyledWrapper>
      {wrappedButton}
      <StyledMenu show={isActive} align={align} width={width} ref={ref}>
        {choices.map((choice, index) => (
          <StyledMenuButton
            key={choice.value}
            onClick={() => handleChoiceClick(choice, index)}
            active={selectedChoiceIndex === index}
          >
            {choice.label}
          </StyledMenuButton>
        ))}
      </StyledMenu>
    </StyledWrapper>
  );
};

export default SelectMenu;
