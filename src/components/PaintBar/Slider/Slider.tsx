import { StylableComponentProps } from "src/types";
import styled from "styled-components";

const sizes = {
  normal: {
    line: 4,
    handle: 20,
  },
};

const StyledSliderLine = styled.div`
  height: ${sizes.normal.line}px;
  margin: ${sizes.normal.handle / 2}px auto;
  width: calc(100% - ${sizes.normal.handle}px);
  border-radius: 20px;
  background-color: ${(props) => props.theme.neutral};
  position: relative;
`;

interface StyledSliderHandleProps {
  isGrabbing?: boolean;
  percentage: number;
}

const StyledSliderHandle = styled.div<StyledSliderHandleProps>`
  border-radius: 1000px;
  position: absolute;
  transform: translate(-10px, calc(-${sizes.normal.handle / 2}px + ${sizes.normal.line / 2}px));
  background-color: ${(props) => props.theme.neutralFocus};
  width: ${sizes.normal.handle}px;
  height: ${sizes.normal.handle}px;
  left: ${(props) => props.percentage}%;

  border: 1px solid ${(props) => props.theme.highlight};
  cursor: ${(props) => (props.isGrabbing ? "grabbing" : "pointer")};
`;

interface SliderComponentProps extends StylableComponentProps {}

const Slider = (props: SliderComponentProps) => {
  const { style, className } = props;

  return (
    <div {...{ style, className }}>
      <StyledSliderLine>
        <StyledSliderHandle percentage={25} />
      </StyledSliderLine>
    </div>
  );
};

export default Slider;
