import { cookieValue } from "./cookie";

describe("cookieValue function", () => {
let lang: string | undefined;

  beforeEach(() => {
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "",
    });
    
     lang = cookieValue("lang");
  });

  it("Shouldn't return anything if the cookie doesn't exist", () => {
    document.cookie = "other=valueJustTest";
    expect(lang).toBeUndefined();
  });

  it("It should return the correct value", () => {
    document.cookie = "lang=en; other=value";
    expect(lang).toBe("en");
  });
});
