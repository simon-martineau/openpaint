import { DrawCommand, DrawCommandArgs } from "./command/draw";
import { executeAndPush } from "./undo-service";

const draw = (context: CanvasRenderingContext2D, args: DrawCommandArgs) => {
  const command: DrawCommand = new DrawCommand(args);
  executeAndPush(command, context);
};

const drawService = { draw };
export default drawService;
