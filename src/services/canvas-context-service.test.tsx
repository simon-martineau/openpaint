import { render } from "@testing-library/react";
import Color from "color";
import { ConfigState } from "src/contexts/ConfigStore/ConfigStore";
import { buildContextFromConfig } from "./canvas-context-service";

describe("buildContextFromConfig", () => {
  const testConfig: ConfigState = {
    penSize: 123,
    color: Color("#fff"),
    tool: "pen",
  };

  it("should correctly modify context according to config", () => {
    render(<canvas data-testid="test-canvas"></canvas>);
    // @ts-ignore: mock
    const mockContext = jest.fn() as CanvasRenderingContext2D;
    const newContext = buildContextFromConfig(testConfig, mockContext);

    expect(newContext.strokeStyle).toEqual(testConfig.color.hex());
    expect(newContext.lineWidth).toEqual(testConfig.penSize);
  });
});
