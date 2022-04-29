import Slider from "src/components/common/Slider";
import { useConfigStore } from "src/contexts/ConfigStore/ConfigStore";
import PaintBarSection from "../PaintBarSection";

const PensizeSelection = () => {
  const [state, dispatch] = useConfigStore();

  const handleSliderChange = (value: number) => {
    dispatch({ type: "set-pensize", size: Math.floor(value) });
  };

  return (
    <PaintBarSection title={`Size ${state.penSize}`}>
      <Slider initialValue={state.penSize} min={1} max={100} onChange={handleSliderChange} />
    </PaintBarSection>
  );
};

export default PensizeSelection;
