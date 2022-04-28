import Color from "color";
import { useConfigStore } from "src/contexts/ConfigStore/ConfigStore";
import PaintBarSection from "../PaintBarSection";
import MosaicPicker from "./MosaicPicker";

const ColorSelection = () => {
  const [, dispatch] = useConfigStore();

  const handleColorChange = (color: string) => {
    dispatch({ type: "set-color", color: Color(color) });
  };

  return (
    <PaintBarSection title="Color">
      <MosaicPicker onChange={handleColorChange} />
    </PaintBarSection>
  );
};

export default ColorSelection;
