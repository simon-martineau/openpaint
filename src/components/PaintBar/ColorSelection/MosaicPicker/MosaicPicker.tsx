import { useState } from "react";
import { StylableComponentProps } from "src/types";
import styled, { css } from "styled-components";
import { mosaicColors } from "./colors";

const StyledMosaicWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 3px;
`;

interface StyledColorPadProps {
  color: string;
  selected?: boolean;
}

const SelectedColorPadAttributes = css`
  border: 1px solid #eee;
  box-shadow: 0 0 0 2px #eee;
`;

const StyledColorPad = styled.div<StyledColorPadProps>`
  aspect-ratio: 1;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.theme.neutral};
  border-radius: 5px;
  cursor: pointer;
  ${(props) => (props.selected ? SelectedColorPadAttributes : "")}
  &:hover {
    ${SelectedColorPadAttributes}
  }
`;

interface MosaicPickerProps extends StylableComponentProps {
  onChange?: (color: string) => void;
}

const MosaicPicker = (props: MosaicPickerProps): JSX.Element => {
  const { style, className, onChange } = props;
  const [activeIndex, setActiveIndex] = useState(20);

  const handlePadClick = (index: number) => {
    setActiveIndex(index);
    onChange && onChange(mosaicColors[index]);
  };

  return (
    <StyledMosaicWrapper {...{ style, className }}>
      {mosaicColors.map((color, index) => (
        <StyledColorPad
          key={index}
          color={color}
          selected={index === activeIndex}
          onClick={() => handlePadClick(index)}
        />
      ))}
    </StyledMosaicWrapper>
  );
};

export default MosaicPicker;
