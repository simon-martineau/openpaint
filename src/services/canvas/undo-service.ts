import { Command } from "./command/command";

let stack: Command[] = [];
let commitedIndex = -1;

const redrawAllUpTo = (context: CanvasRenderingContext2D, index: number) => {
  for (let i = 0; i <= index; ++i) {
    stack[i].execute(context);
  }
};

const severHead = () => {
  stack = stack.slice(0, -commitedIndex);
};

export const executeAndPush = (command: Command, context: CanvasRenderingContext2D) => {
  if (commitedIndex !== stack.length - 1) {
    severHead();
  }
  command.execute(context);
  stack.push(command);
  ++commitedIndex;
};

export const undo = (context: CanvasRenderingContext2D) => {
  --commitedIndex;
  redrawAllUpTo(context, commitedIndex);
};

export const redo = (context: CanvasRenderingContext2D) => {
  if (commitedIndex < stack.length - 1) {
    ++commitedIndex;
    stack[commitedIndex].execute(context);
  }
};
