import { fireEvent, render, screen } from "@testing-library/react";
import ToggleButton from "./ToggleButton";

describe("ToggleButton", () => {
  it("should fire correct onToggle when clicking", () => {
    const mockCallback = jest.fn();
    render(<ToggleButton onToggle={mockCallback} />);

    fireEvent.click(screen.getByTestId("toggle-button"));
    fireEvent.click(screen.getByTestId("toggle-button"));

    expect(mockCallback.mock.calls[0][0]).toBe(true);
    expect(mockCallback.mock.calls[1][0]).toBe(false);
  });

  it("should be indifferent to clicks when having override", () => {
    const mockCallback = jest.fn();
    render(<ToggleButton onToggle={mockCallback} override overrideValue={true} />);

    fireEvent.click(screen.getByTestId("toggle-button"));
    fireEvent.click(screen.getByTestId("toggle-button"));

    expect(mockCallback.mock.calls).toHaveLength(0);
  });
});
