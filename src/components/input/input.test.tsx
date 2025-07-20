import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./input";

describe("Input component", () => {
  it("should render input and call onChange", () => {
    const mockOnChange = jest.fn();

    render(
      <Input name="email" title="Email" type="email" onChange={mockOnChange} />
    );

    const input = screen.getByLabelText("Email");

    fireEvent.change(input, { target: { value: "test@example.com" } });

    expect(mockOnChange).toHaveBeenCalledWith("test@example.com");
  });
});
