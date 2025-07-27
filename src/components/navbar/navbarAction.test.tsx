import { render, screen } from "@testing-library/react";
import { NavbarActions } from "./navbarActions";
import { useAppSelector } from "@/redux/hooks";
import { useDictionary } from "@/hooks/useDictionary";

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

const mockedUseAppSelector = useAppSelector as jest.MockedFunction<
  typeof useAppSelector
>;

describe("NavbarActions component", () => {
  beforeEach(() => {
    mockedUseAppSelector.mockReturnValue("fa");
    (useDictionary as jest.Mock).mockReturnValue({
      dict: { signin: "ورود", signup: "ثبت‌نام" },
      loadingTranslate: false,
    });
  });

  it("renders translated sign in/sign up text", () => {
    render(<NavbarActions />);
    expect(screen.getByText(/ورود\/ثبت‌نام/i)).toBeInTheDocument();
  });

  it("shows skeleton when loadingTranslate is true", () => {
    (useDictionary as jest.Mock).mockReturnValue({
      dict: {},
      loadingTranslate: true,
    });

    render(<NavbarActions />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("There must be a signin link & a basket link", () => {
    render(<NavbarActions />);

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
