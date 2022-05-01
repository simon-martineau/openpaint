import Color from "color";

export abstract class Command {
  abstract execute(context: CanvasRenderingContext2D): void;
}
