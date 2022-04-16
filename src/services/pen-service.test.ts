import { testExports } from "./pen-service";

describe("to2dCoordinates tests", () => {
  test("1 by 1", () => {
    const coords = testExports.as2dCoordinate(1, 1, 0);
    expect(coords).toEqual([0, 0]);
  });

  test("2 by 2", () => {
    const coords = testExports.as2dCoordinate(2, 2, 4);
    expect(coords).toEqual([1, 0]);
  });
  test("3 by 3", () => {
    const coords = testExports.as2dCoordinate(3, 3, 16);
    expect(coords).toEqual([1, 1]);
  });
});
