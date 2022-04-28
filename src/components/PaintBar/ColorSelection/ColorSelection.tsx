import { SwatchesPicker } from "react-color";
import PaintBarSection from "../PaintBarSection";
import MosaicPicker from "./MosaicPicker";

const ColorSelection = () => {
  return (
    <PaintBarSection title="Color">
      <MosaicPicker />
    </PaintBarSection>
  );
};

export default ColorSelection;

/*You can import AlphaPicker BlockPicker ChromePicker
 CirclePicker CompactPicker GithubPicker HuePicker
  MaterialPicker PhotoshopPicker SketchPicker SliderPicker
   SwatchesPicker TwitterPicker respectively. */
