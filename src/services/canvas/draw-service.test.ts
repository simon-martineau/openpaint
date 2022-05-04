import { drawFixtures } from "src/tests/fixtures/draw-command-fixtures";
import { createMockContext } from "src/tests/helpers/create-mock-context";
import drawService from "./draw-service";

describe("drawService", () => {
  let mockContext = createMockContext();
  // Operation used to determine if something was drawn
  let barometerOperation = mockContext.beginPath;
  let [firstCommandArgs, secondCommandArgs] = drawFixtures;

  beforeEach(() => {
    drawService.reset(mockContext.canvas);
    mockContext = createMockContext();
    barometerOperation = mockContext.beginPath;
  });

  describe("undo redo behaviour", () => {
    test("when no modifications, undo performs nothing", () => {
      drawService.undo(mockContext);
      expect(barometerOperation).not.toHaveBeenCalled();
    });

    test("when no modifications, redo performs nothing", () => {
      drawService.redo(mockContext);
      expect(barometerOperation).not.toHaveBeenCalled();
    });

    test("given 2 commits, when undo, then re-execute only first", () => {
      drawService.draw(mockContext, firstCommandArgs);
      drawService.commit();
      drawService.draw(mockContext, secondCommandArgs);
      drawService.commit();

      drawService.undo(mockContext);

      expect(mockContext.moveTo).toHaveBeenCalledTimes(3);
      expect(mockContext.moveTo).toHaveBeenLastCalledWith(
        firstCommandArgs.fromX,
        firstCommandArgs.fromY
      );
    });

    test("given undo, when redo, then re-execute proper commands", () => {
      drawService.draw(mockContext, firstCommandArgs);
      drawService.commit();
      drawService.draw(mockContext, secondCommandArgs);
      drawService.commit();

      drawService.undo(mockContext);
      drawService.redo(mockContext);

      expect(mockContext.moveTo).toHaveBeenCalledTimes(4);
      expect(mockContext.moveTo).toHaveBeenLastCalledWith(
        secondCommandArgs.fromX,
        secondCommandArgs.fromY
      );
    });

    test("given uncommited draw, when undo and redo, then uncommited draw is still re-executed", () => {
      drawService.draw(mockContext, firstCommandArgs);
      drawService.commit();
      drawService.draw(mockContext, secondCommandArgs);

      drawService.undo(mockContext);
      drawService.redo(mockContext);

      expect(mockContext.moveTo).toHaveBeenCalledTimes(4);
      expect(mockContext.moveTo).toHaveBeenLastCalledWith(
        secondCommandArgs.fromX,
        secondCommandArgs.fromY
      );
    });

    test("given undone commit X, when draw, then undone commit X cannot be redone", () => {
      drawService.draw(mockContext, firstCommandArgs);
      drawService.commit();
      drawService.undo(mockContext);
      mockContext.moveTo.mockClear();

      drawService.draw(mockContext, secondCommandArgs);
      drawService.commit();
      drawService.undo(mockContext);
      drawService.redo(mockContext);

      expect(mockContext.moveTo).not.toHaveBeenCalledWith(
        firstCommandArgs.fromX,
        firstCommandArgs.fromY
      );
      expect(mockContext.moveTo).toHaveBeenLastCalledWith(
        secondCommandArgs.fromX,
        secondCommandArgs.fromY
      );
    });
  });
});
