import styled from "styled-components";
import { Tool, useConfigStore } from "../../../contexts/ConfigStore/ConfigStore";
import ButtonGroup from "../ButtonGroup";
import PaintBarSection from "../PaintBarSection";
import ToggleButton from "../ToggleButton";

const StyledToolButtonGroup = styled(ButtonGroup)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`;

const StyledToggleButton = styled(ToggleButton)`
  aspect-ratio: 1;
`;

const toolMapping: { [key: number]: Tool } = {
  1: "pen",
  2: "eraser",
  3: "fill",
  4: "brush",
};

const ToolSelection = () => {
  const [, dispatch] = useConfigStore();

  const handleChange = (value: number | string) => {
    dispatch({ type: "set-tool", tool: toolMapping[value as number] });
  };

  return (
    <PaintBarSection title="Tool">
      <StyledToolButtonGroup onChange={handleChange} defaultValue={1}>
        <StyledToggleButton value={1} activeDefault>
          Pen
        </StyledToggleButton>
        <StyledToggleButton value={2}>Eraser</StyledToggleButton>
        <StyledToggleButton value={3}>Fill</StyledToggleButton>
        <StyledToggleButton value={4}>Brush</StyledToggleButton>
      </StyledToolButtonGroup>
    </PaintBarSection>
  );
};

export default ToolSelection;
