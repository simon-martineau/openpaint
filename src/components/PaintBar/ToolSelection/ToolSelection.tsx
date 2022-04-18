import { PaintBarSection } from "../../../style";
import { ToggleButton } from "../../../style/toggle-button";

const ToolSelection = () => {
  return (
    <PaintBarSection>
      <ToggleButton active>hello</ToggleButton>
      <ToggleButton>hello</ToggleButton>
      <ToggleButton>hello</ToggleButton>
      <ToggleButton>hello</ToggleButton>
    </PaintBarSection>
  );
};

export default ToolSelection;
