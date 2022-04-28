import { ConfigState } from "../contexts/ConfigStore/ConfigStore";

export const buildContextFromConfig = (
  config: ConfigState,
  context: CanvasRenderingContext2D
): CanvasRenderingContext2D => {
  context.strokeStyle = config.color.hex();
  context.lineWidth = config.penSize;
  context.lineCap = "round";

  return context;
};
