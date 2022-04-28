import PaintBarSection from "../PaintBarSection";
import Slider from "../Slider";

const PensizeSelection = () => {
  return (
    <PaintBarSection title="Size">
      <Slider initialValue={25} />
    </PaintBarSection>
  );
};

export default PensizeSelection;
