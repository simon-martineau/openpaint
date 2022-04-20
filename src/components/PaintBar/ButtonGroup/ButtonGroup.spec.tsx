import { fireEvent, render, screen } from "@testing-library/react";
import ToggleButton from "../ToggleButton";
import ButtonGroup from "./ButtonGroup";

describe("ButtonGroup", () => {
  it("should make only defaultValue button active", () => {
    render(
      <ButtonGroup defaultValue={1} data-testid="button-group">
        <ToggleButton value={1}>first-button</ToggleButton>
        <ToggleButton value={2}>second-button</ToggleButton>
      </ButtonGroup>
    );

    expect(screen.getByText("first-button")).toHaveAttribute("data-active", "true");
    expect(screen.getByText("second-button")).toHaveAttribute("data-active", "false");
  });

  it("should toggle on clicked button and toggle off all others", () => {
    render(
      <ButtonGroup defaultValue={1} data-testid="button-group">
        <ToggleButton value={1}>first-button</ToggleButton>
        <ToggleButton value={2}>second-button</ToggleButton>
        <ToggleButton value={3}>third-button</ToggleButton>
      </ButtonGroup>
    );

    fireEvent.click(screen.getByText("third-button"));

    expect(screen.getByText("first-button")).toHaveAttribute("data-active", "false");
    expect(screen.getByText("second-button")).toHaveAttribute("data-active", "false");
    expect(screen.getByText("third-button")).toHaveAttribute("data-active", "true");
  });

  it("should fire onChange when clicking a button", () => {
    const mockOnChange = jest.fn();

    render(
      <ButtonGroup defaultValue={1} onChange={mockOnChange}>
        <ToggleButton value={1}>first-button</ToggleButton>
        <ToggleButton value={2}>second-button</ToggleButton>
      </ButtonGroup>
    );

    fireEvent.click(screen.getByText("second-button"));

    expect(mockOnChange.mock.calls[0][0]).toBe(2);
  });
});
