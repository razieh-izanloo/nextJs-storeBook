import { render, screen } from "@testing-library/react";
import { NavbarActions } from "./navbarActions";
import { useAppSelector } from "@/redux/hooks";
import { useDictionary } from "@/hooks/useDictionary";
import { usePathname } from "next/navigation";

jest.mock("@/redux/hooks", () => ({
  useAppSelector: jest.fn(),
}));

jest.mock("@/hooks/useDictionary", () => ({
  useDictionary: jest.fn(),
}));

jest.mock("react-loading-skeleton", () => {
  return () => <div data-testid="skeleton">loading</div>;
});

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
      dict: { home: "home page", sellers: "list sellers" },
      loadingTranslate: false,
    });
  });
  (usePathname as jest.Mock).mockReturnValue("/fa/home");

  it("renders translated text", () => {
    render(<NavbarActions />);
    expect(screen.getByText("home page")).toBeInTheDocument();
    expect(screen.getByText("list sellers")).toBeInTheDocument();
  });

  it("shows skeleton when loadingTranslate is true", () => {
    (useDictionary as jest.Mock).mockReturnValue({
      dict: {},
      loadingTranslate: true,
    });

    render(<NavbarActions />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(screen.getByText("home page")).not.toBeInTheDocument();
  });

  it("There should be navigation items with links on the page", () => {
    //     (useDictionary as jest.Mock).mockReturnValue({
    //   dict: {},
    //   loadingTranslate: false,
    // });
    render(<NavbarActions />);
const items = [
  { name: "home", href: "/home" },
  { name: "publishers", href: "/publishers" },
  { name: "sellers", href: "/sellers" },
  { name: "author", href: "/author" },
]
items.forEach(item => 
    expect(screen.getByText(item.name)).toBeInTheDocument()

)

    const links = screen.getAllByRole("link");
    const loginLink = links.find(
      (link) => link.getAttribute("href") === "/fa/signin"
    );
    const cartLink = links.find(
      (link) => link.getAttribute("href") === "/fa/basket"
    );

    expect(loginLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
  });
});
