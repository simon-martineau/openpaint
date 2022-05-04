import { createMockContext } from "src/tests/helpers/create-mock-context";
import { DrawCommand, DrawCommandArgs } from "./draw-command";

describe("DrawCommand", () => {
  let mockContext = createMockContext();

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
