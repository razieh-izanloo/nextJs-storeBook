import {
  INFO_LANGS,
  LANG_COOKIE_DURATION,
  LANG_COOKIE_NAME,
  support_langs,
} from "./constants";

describe("constants", () => {
  describe("cookie", () => {
    test("LANG_COOKIE_DURATION", () => {
      expect(typeof LANG_COOKIE_DURATION).toEqual("number");
      expect(LANG_COOKIE_DURATION).toEqual(1296000); //15 day
    });
    test("LANG_COOKIE_NAME", () => {
      expect(typeof LANG_COOKIE_NAME).toEqual("string");
      expect(LANG_COOKIE_NAME).toEqual("LOCALE");
    });
  });

  test("support_langs", () => {
    expect(typeof support_langs).toEqual("object");
    expect(support_langs.length).toEqual(2);
    support_langs.forEach((item) => expect(typeof item).toEqual("string"));
  });

  test("info_langs", () => {
    expect(typeof INFO_LANGS).toEqual("object");
    expect(Object.keys(INFO_LANGS).length).toEqual(2);
    Object.keys(INFO_LANGS).forEach((item) =>
      expect(typeof INFO_LANGS[item].dir).toEqual("string")
    );
  });
});
