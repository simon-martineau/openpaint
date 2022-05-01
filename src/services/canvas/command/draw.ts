import Color from "color";
import { Command } from "./command";

export interface DrawCommandArgs {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  pensize: number;
  color: string;
}

const buildContextFromArgs = (
  args: DrawCommandArgs,
  context: CanvasRenderingContext2D
): CanvasRenderingContext2D => {
  context.strokeStyle = args.color;
  context.lineWidth = args.pensize;
  context.lineCap = "round";

  return context;
};

const performDraw = (context: CanvasRenderingContext2D, args: DrawCommandArgs) => {
  const contextForDraw = buildContextFromArgs(args, context);
  contextForDraw.beginPath();
  contextForDraw.moveTo(args.fromX, args.fromY);
  contextForDraw.lineTo(args.toX, args.toY);
  contextForDraw.stroke();
  contextForDraw.closePath();
};

export class DrawCommand extends Command {
  args: DrawCommandArgs;
  constructor(args: DrawCommandArgs) {
    super();
    this.args = args;
  }

  execute(context: CanvasRenderingContext2D): void {
    performDraw(context, this.args);
  }
}
