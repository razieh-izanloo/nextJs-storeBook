import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { Suggestions } from "./suggestions";
import React from "react";

jest.useFakeTimers();

// Mock fetch
global.fetch = jest.fn();

describe("Suggestions Component", () => {
  const handleSelect = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch suggestions after debounce and display them", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ["کتاب اول", "کتاب دوم"],
    });

    render(<Suggestions query="کتاب" handleSelect={handleSelect} />);

    jest.advanceTimersByTime(400);

    await waitFor(() => {
      expect(screen.getByText("کتاب اول")).toBeInTheDocument();
      expect(screen.getByText("کتاب دوم")).toBeInTheDocument();
    });
  });

  it("should call handleSelect when a suggestion is clicked", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ["کتاب تست"],
    });

    render(<Suggestions query="تست" handleSelect={handleSelect} />);
    jest.advanceTimersByTime(400);

    await waitFor(() => {
      const item = screen.getByText("کتاب تست");
      fireEvent.click(item);
      expect(handleSelect).toHaveBeenCalledWith("کتاب تست");
    });
  });

  it("should not fetch if query is empty", () => {
    render(<Suggestions query="" handleSelect={handleSelect} />);
    expect(fetch).not.toHaveBeenCalled();
  });
});
