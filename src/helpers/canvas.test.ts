import { toCanvasCoordinates } from "./canvas";

describe("toCanvasCoordinates", () => {
  const canvas = document.createElement("canvas");
  beforeEach(() => {
    const canvasRect = {
      left: 100,
      top: 100,
      right: 300,
      bottom: 200,
      width: 200,
      height: 100,
    } as DOMRect;
    canvas.getBoundingClientRect = jest.fn(() => {
      return canvasRect;
    });
  });

  it("should return correct coordinates", () => {
    const result = toCanvasCoordinates(canvas, 150, 125);
    expect(result).toEqual([75, 37.5]);
  });
});
