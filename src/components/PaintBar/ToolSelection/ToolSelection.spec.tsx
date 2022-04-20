import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "src/tests/utils/theme";
import ToolSelection from "./ToolSelection";

const mockDispatch = jest.fn();
jest.mock("src/contexts/ConfigStore/ConfigStore", () => ({
  useConfigStore: () => [{}, mockDispatch],
}));

describe("ToolSelection", () => {
  it("should dispatch tool when selecting it", () => {
    renderWithTheme(<ToolSelection />);

    fireEvent.click(screen.getByText("Eraser"));

    expect(mockDispatch.mock.calls[0][0]).toEqual({ type: "set-tool", tool: "eraser" });
  });
});
