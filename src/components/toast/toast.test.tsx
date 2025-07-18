import { render, screen } from "@testing-library/react";
import { Toast } from "./toast";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateApp } from "../../redux/slices/app";
import * as reduxHooks from "../../redux/hooks";

jest.mock("../../redux/hooks");

const mockedHooks = jest.mocked(reduxHooks);

const mockDispatch = jest.fn();

describe("Toast", () => {
  beforeEach(() => {
    mockedHooks.useAppDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should not render toast when msg is null", async () => {
    mockedHooks.useAppSelector.mockImplementation((selector) =>
      selector({
        app: { errorMessage: null },
      })
    );
    render(<Toast />);
    expect(screen.queryByRole("button")).toBeNull();
  });

  it("should render toast with msg & close btn", () => {
    const testMessage = "Test Error Message";
    mockedHooks.useAppSelector.mockImplementation((selector) =>
      selector({
        app: { errorMessage: { text: testMessage, type: "error" } },
      })
    );
    render(<Toast />);
    const toastElement = screen.getByRole("button");
    expect(toastElement).toBeInTheDocument();
    expect(screen.getByText(testMessage)).toBeInTheDocument();
    expect(screen.getByText("x")).toBeInTheDocument();
  });

  it("should call dispatch to clear msg when close btn is clicked", () => {
    const testMessage = "Test Error Message";
    mockedHooks.useAppSelector.mockImplementation((selector) =>
      selector({
        app: { errorMessage: { text: testMessage, type: "error" } },
      })
    );
    render(<Toast />);
    const closeButton = screen.getByText("x");
    closeButton.click();
    expect(mockDispatch).toHaveBeenCalledWith(
      updateApp({ errorMessage: null })
    );
  });

  it("should call dispatch to clear msg after 3 seconds when msg is present", () => {
    jest.useFakeTimers();
    mockedHooks.useAppSelector.mockImplementation((selector) =>
      selector({
        app: { errorMessage: { text: "Test Error Message", type: "error" } },
      })
    );
    render(<Toast />);
    jest.advanceTimersByTime(3000);
    expect(mockDispatch).toHaveBeenCalledWith(
      updateApp({ errorMessage: null })
    );
  });

  describe.each(["success", "warning", "error"])("Toast type: %s", (type) => {
    it(`should display a toast with id "toast-${type}" when the type is "${type}"`, () => {
      const testMessage = "Test Message";
      mockedHooks.useAppSelector.mockImplementation((selector) =>
        selector({
          app: { errorMessage: { text: testMessage, type } },
        })
      );
      const { container } = render(<Toast />);
      const toastElement = container.querySelector(`div#toast-${type}`);
      expect(toastElement).toBeInTheDocument();
      expect(screen.getByText(testMessage)).toBeInTheDocument();
    });
  });
});
