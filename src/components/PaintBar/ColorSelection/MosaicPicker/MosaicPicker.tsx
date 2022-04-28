import { StylableComponentProps } from "src/types";
import styled from "styled-components";
import { mosaicColors } from "./colors";

const StyledMosaicWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 3px;
`;

interface StyledColorPadProps {
  color: string;
}

const StyledColorPad = styled.div<StyledColorPadProps>`
  aspect-ratio: 1;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.theme.neutral};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border: 1px solid #eee;
    box-shadow: 0 0 0 2px #eee;
  }
`;

interface MosaicPickerProps extends StylableComponentProps {}

const MosaicPicker = (props: MosaicPickerProps): JSX.Element => {
  const { style, className } = props;
  return (
    <StyledMosaicWrapper {...{ style, className }}>
      {mosaicColors.map((color) => (
        <StyledColorPad color={color} />
      ))}
    </StyledMosaicWrapper>
  );
};

export default MosaicPicker;
