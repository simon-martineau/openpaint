import { Command, CommandGroup } from "./command/command";
import { DrawCommand, DrawCommandArgs } from "./command/draw";

let stack: CommandGroup[] = [];
let commitedIndex = -1;
let bufferGroup = new CommandGroup();

const clearCanvas = (canvas: HTMLCanvasElement) => {
  const context = canvas.getContext("2d");
  if (context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
};

const redrawAllUpTo = (context: CanvasRenderingContext2D, index: number) => {
  clearCanvas(context.canvas);
  for (let i = 0; i <= index; ++i) {
    stack[i].executeAll(context);
  }
};

const severHead = () => {
  stack = stack.slice(0, commitedIndex + 1);
};

export const draw = (context: CanvasRenderingContext2D, args: DrawCommandArgs) => {
  const command: DrawCommand = new DrawCommand(args);
  executeAndTrack(command, context);
};

const flushBuffer = () => {};

const executeAndTrack = (command: Command, context: CanvasRenderingContext2D) => {
  if (commitedIndex !== stack.length - 1) {
    console.log(`Severing head, commandIndex is ${commitedIndex}, stack size is ${stack.length}`);
    severHead();
  }

  command.execute(context);
  bufferGroup.addCommand(command);
  console.log("Commit index is now:", commitedIndex);
};

export const commit = () => {
  console.log("commit called");
  if (!bufferGroup.empty()) {
    stack.push(bufferGroup);
    bufferGroup = new CommandGroup();
    ++commitedIndex;
  }
};

export const undo = (context: CanvasRenderingContext2D) => {
  console.log("undo, stack size is:", stack.length);
  console.log("undo, commit index is:", stack.length);
  if (!bufferGroup.empty()) {
    flushBuffer();
  }
  if (commitedIndex >= 0) {
    --commitedIndex;
    console.log("commit index is now", commitedIndex);
    redrawAllUpTo(context, commitedIndex);
  }
};

export const redo = (context: CanvasRenderingContext2D) => {
  if (commitedIndex < stack.length - 1) {
    ++commitedIndex;
    stack[commitedIndex].executeAll(context);
  }
};

export const reset = (canvas: HTMLCanvasElement) => {
  clearCanvas(canvas);

  commitedIndex = -1;
  stack = [];
};

const drawService = { draw, undo, redo, reset, commit };
export default drawService;
