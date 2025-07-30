import { render, screen } from "@testing-library/react";
import { useAppSelector } from "@/redux/hooks";
import { useDictionary } from "@/hooks/useDictionary";
import { usePathname } from "next/navigation";
import { NavItems } from "./navItems";

jest.mock("@/redux/hooks", () => ({
  useAppSelector: jest.fn(),
}));

jest.mock("@/hooks/useDictionary", () => ({
  useDictionary: jest.fn(),
}));

jest.mock("react-loading-skeleton", () => {
  const MockSkeleton = () => <div data-testid="skeleton">loading</div>;
  MockSkeleton.displayName = "MockSkeleton";
  return MockSkeleton;
})

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const mockedUseAppSelector = useAppSelector as jest.MockedFunction<
  typeof useAppSelector
>;

describe("NavItems component", () => {
  beforeEach(() => {
    mockedUseAppSelector.mockReturnValue("fa");
    (useDictionary as jest.Mock).mockReturnValue({
      dict: {
        home: "home page",
        sellers: "list sellers",
        publishers: "publishers",
        author: "author",
      },
      loadingTranslate: false,
    });
  });
  (usePathname as jest.Mock).mockReturnValue("/fa/home");

  it("renders translated text", () => {
    render(<NavItems />);
    expect(screen.getByText("home page")).toBeInTheDocument();
    expect(screen.getByText("list sellers")).toBeInTheDocument();
  });

  it("shows skeleton when loadingTranslate is true", () => {
    (useDictionary as jest.Mock).mockReturnValue({
      dict: {},
      loadingTranslate: true,
    });

    render(<NavItems />);
    expect(screen.getAllByText("loading")[0]).toBeInTheDocument();
    expect(screen.queryByText("home page")).not.toBeInTheDocument();
  });

  it("There should be navigation items with links on the page", () => {
    //     (useDictionary as jest.Mock).mockReturnValue({
    //   dict: {},
    //   loadingTranslate: false,
    // });
    render(<NavItems />);
    const items = [
      { name: "home page", href: "/home" },
      { name: "list sellers", href: "/sellers" },
      { name: "publishers", href: "/publishers" },
      { name: "author", href: "/author" },
    ];
    items.forEach((item) => {
      const link = screen.getByText(item.name);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", item.href);
    });

    // const links = screen.getAllByRole("link");
    // const loginLink = links.find(
    //   (link) => link.getAttribute("href") === "/fa/signin"
    // );
    // const cartLink = links.find(
    //   (link) => link.getAttribute("href") === "/fa/cart"
    // );

    // expect(loginLink).toBeInTheDocument();
    // expect(cartLink).toBeInTheDocument();
  });
});
