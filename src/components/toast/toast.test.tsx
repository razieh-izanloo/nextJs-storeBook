import { render, screen } from "@testing-library/react";
import { Toast } from "./toast";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateApp } from "../../redux/slices/app";

jest.mock("../../redux/hooks", () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

const mockedUseAppDispatch: any = useAppDispatch;
const mockedUseAppSelector: any = useAppSelector;

const mockDispatch = jest.fn();

describe("Toast", () => {
  beforeEach(() => {
    mockedUseAppDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should not render toast when msg is null", async () => {
    mockedUseAppSelector.mockImplementation((selector: any) =>
      selector({
        app: { errorMessage: null },
      } as any)
    );
    render(<Toast />);
    expect(screen.queryByRole("button")).toBeNull();
  });

  it("should render toast with msg & close btn", () => {
    const testMessage = "Test Error Message";
    mockedUseAppSelector.mockImplementation((selector: any) =>
      selector({
        app: { errorMessage: testMessage },
      } as any)
    );
    render(<Toast />);
    const toastElement = screen.getByRole("button");
    expect(toastElement).toBeInTheDocument();
    expect(screen.getByText(testMessage)).toBeInTheDocument();
    expect(screen.getByText("x")).toBeInTheDocument();
  });

  it("should call dispatch to clear msg when close btn is clicked", () => {
    const testMessage = "Test Error Message";
    mockedUseAppSelector.mockImplementation((selector: any) =>
      selector({
        app: { errorMessage: testMessage },
      } as any)
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
    mockedUseAppSelector.mockImplementation((selector: any) =>
      selector({
        app: { errorMessage: "Test Error Message" },
      } as any)
    );
    render(<Toast />);
    jest.advanceTimersByTime(3000);
    expect(mockDispatch).toHaveBeenCalledWith(
      updateApp({ errorMessage: null })
    );
  });
});
