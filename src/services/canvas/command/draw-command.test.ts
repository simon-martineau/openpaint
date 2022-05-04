import { DrawCommand, DrawCommandArgs } from "./draw-command";

const mockContext: jest.Mocked<CanvasRenderingContext2D> = {
  beginPath: jest.fn(),
  moveTo: jest.fn(),
  stroke: jest.fn(),
  lineTo: jest.fn(),
  closePath: jest.fn(),
} as any as jest.Mocked<CanvasRenderingContext2D>;

describe("DrawCommand", () => {
  it("should correctly draw on context depending on args", () => {
    const args: DrawCommandArgs = {
      fromX: 0,
      fromY: 1,
      toX: 2,
      toY: 3,
      pensize: 17,
      color: "#feafea",
    };
    const command = new DrawCommand(args);
    command.execute(mockContext);

    expect(mockContext.lineWidth).toEqual(args.pensize);
    expect(mockContext.strokeStyle).toEqual(args.color);
  });
});
