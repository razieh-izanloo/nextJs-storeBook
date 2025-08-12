import { render, screen } from "@testing-library/react";
import NotFound from "./not-found";
import { getDictionary } from "dictionaries/dictionaries";

jest.mock("@/components/btnBack/btnBack", () => ({
  BtnBack: () => <div>Go back</div>,
}));

jest.mock("../dictionaries/dictionaries", () => ({
  getDictionary: jest.fn(),
}));

describe("not-found page", () => {
  beforeEach(() => {
    (getDictionary as jest.Mock).mockResolvedValue({
      btnBack: "Go back",
    });
  });
  test("should display the page with the image & button", async () => {
    render(await NotFound());
    expect(screen.getByText("Go back")).toBeInTheDocument();
    expect(
      screen.getByAltText(
        "Animated 404 error page showing a cat playing with a ball of yarn"
      )
    ).toBeInTheDocument();
  });
});
