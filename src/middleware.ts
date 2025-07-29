import { NextRequest, NextResponse } from "next/server";
import {
  LANG_COOKIE_NAME,
  LANG_COOKIE_DURATION,
  support_langs,
  AUTH_PATHS,
} from "@/helpers/constants";
import { jwtDecode } from "jwt-decode";


export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  const pathnameHasLocale = support_langs.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  let validLocale = "";
  // set-cookie-locale
  if (pathnameHasLocale) {
    //cookie
    const localePathname = pathname.split("/")[1];
    const localeCookie = request.cookies.get(LANG_COOKIE_NAME)?.value ?? "en";
    validLocale = localeCookie;
    if (localeCookie !== localePathname) {
      validLocale = localePathname;
      const response = NextResponse.next();
      response.cookies.set(LANG_COOKIE_NAME, localePathname, {
        maxAge: LANG_COOKIE_DURATION,
        path: "/",
      });
      return response;
    }
  }

  
  //token
  const isPublicPath = AUTH_PATHS.some(
    (path) =>
      pathname === `/${validLocale}/${path}` ||
      pathname.startsWith(`/${validLocale}/${path}/`)
  );
  if (token) {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decoded: any = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);

    if (decoded.exp < currentTime) {
      if (!isPublicPath)
        return NextResponse.redirect(
          new URL(`/${validLocale}/signin`, request.url)
        );
    } else if (isPublicPath)
      return NextResponse.redirect(
        new URL(`/${validLocale}/home`, request.url)
      );
  } else if (!isPublicPath) {
    return NextResponse.redirect(
      new URL(`/${validLocale}/signin`, request.url)
    );
  }

  const response = NextResponse.next();
  response.headers.set("x-current-lang",validLocale);
  response.headers.set("x-current-path",request.nextUrl.pathname);
  return response
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|images|_next|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
