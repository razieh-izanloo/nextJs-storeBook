import { render, screen } from "@testing-library/react";
import NotFound from "./not-found";

jest.mock("@/components/btnBack/btnBack", () => ({
  BtnBack: () => <div>Go back</div>,
}));

describe("not-found page", () => {
  test("should display the page with the image & button", () => {
    render(<NotFound />);
    expect(screen.getByText("Go back")).toBeInTheDocument();
    expect(
      screen.getByAltText(
        "Animated 404 error page showing a cat playing with a ball of yarn"
      )
    ).toBeInTheDocument();
  });
});
