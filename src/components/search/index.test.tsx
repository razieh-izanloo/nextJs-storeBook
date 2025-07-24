import { fireEvent, render, screen } from "@testing-library/react";
import { useAppSelector } from "@/redux/hooks";
import { useDictionary } from "@/hooks/useDictionary";
import { Search } from "./index";

jest.mock("@/redux/hooks", () => ({
  useAppSelector: jest.fn(),
}));

jest.mock("@/hooks/useDictionary", () => ({
  useDictionary: jest.fn(),
}));

const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: pushMock,
    };
  },
}));

const mockedUseAppSelector = useAppSelector as jest.MockedFunction<
  typeof useAppSelector
>;

describe("Search component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedUseAppSelector.mockReturnValue("en");
    (useDictionary as jest.Mock).mockReturnValue({
      dict: {
        placeholder: "placeholder serach",
      },
      loadingTranslate: false,
    });
  });

  it("It should render all elements on the page", () => {
    render(<Search />);

    expect(screen.getByAltText("book search")).toBeInTheDocument();

    const inputSearch = screen.getByPlaceholderText("placeholder serach");
    expect(inputSearch).toBeInTheDocument();

    fireEvent.change(inputSearch, { target: { value: "book" } });
    expect(screen.getByAltText("clear the search term")).toBeInTheDocument();
  });

  it("should redirect to search page on Enter key press", () => {
    render(<Search />);
    const inputSearch = screen.getByPlaceholderText("placeholder serach");

    fireEvent.change(inputSearch, { target: { value: "book guide" } });
    fireEvent.keyDown(inputSearch, { key: "Enter", code: "Enter" });

    expect(pushMock).toHaveBeenCalledWith("/search/book%20guide");
  });

  it("should NOT redirect if input is empty on Enter", () => {
    render(<Search />);
    const inputSearch = screen.getByPlaceholderText("placeholder serach");

    fireEvent.keyDown(inputSearch, { key: "Enter", code: "Enter" });

    expect(pushMock).not.toHaveBeenCalled();
  });

  it("If the input is empty, the close button should not be displayed", () => {
    render(<Search />);
    const inputSearch = screen.getByPlaceholderText("placeholder serach");
    fireEvent.change(inputSearch, { target: { value: "book" } });
    fireEvent.change(inputSearch, { target: { value: "" } });
    expect(
      screen.queryByAltText("clear the search term")
    ).not.toBeInTheDocument();
  });

  it("If the close button is clicked, the input value should be cleared", () => {
    render(<Search />);
    const inputSearch = screen.getByPlaceholderText("placeholder serach");
    fireEvent.change(inputSearch, { target: { value: "book" } });

    const btnClose = screen.getByAltText("clear the search term");
    fireEvent.click(btnClose);
    expect(inputSearch).toHaveAttribute("value", "");
  });

  it("If the loading of the translation is true, the input placeholder must be changed", () => {
    (useDictionary as jest.Mock).mockReturnValue({
      dict: {
        placeholder: "placeholder serach",
      },
      loadingTranslate: true,
    });
    render(<Search />);
    expect(screen.getByPlaceholderText("...")).toBeInTheDocument();
  });
});
