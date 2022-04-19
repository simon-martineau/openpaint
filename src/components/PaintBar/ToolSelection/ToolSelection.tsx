import styled from "styled-components";
import PaintBarSection from "../PaintBarSection";
import ToggleButton from "../ToggleButton";

const StyledToolButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`;

const StyledToggleButton = styled(ToggleButton)`
  aspect-ratio: 1;
`;

const ToolSelection = () => {
  return (
    <PaintBarSection title="Tool">
      <StyledToolButtonsWrapper>
        <StyledToggleButton activeDefault>Pen</StyledToggleButton>
        <StyledToggleButton>Eraser</StyledToggleButton>
        <StyledToggleButton>Fill</StyledToggleButton>
        <StyledToggleButton>Brush</StyledToggleButton>
      </StyledToolButtonsWrapper>
    </PaintBarSection>
  );
};

export default ToolSelection;
