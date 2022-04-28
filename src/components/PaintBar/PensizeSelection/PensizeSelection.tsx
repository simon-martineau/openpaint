import { useConfigStore } from "src/contexts/ConfigStore/ConfigStore";
import PaintBarSection from "../PaintBarSection";
import Slider from "../Slider";

const PensizeSelection = () => {
  const [state, dispatch] = useConfigStore();

  const handleSliderChange = (value: number) => {
    dispatch({ type: "set-pensize", size: Math.floor(value) });
  };

  return (
    <PaintBarSection title="Size">
      <Slider initialValue={state.penSize} onChange={handleSliderChange} />
    </PaintBarSection>
  );
};

export default PensizeSelection;
