export abstract class Command {
  abstract execute(context: CanvasRenderingContext2D): void;
}
