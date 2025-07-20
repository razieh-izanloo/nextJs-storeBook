import { NextResponse } from "next/server";
import { LANG_COOKIE_NAME, LANG_COOKIE_DURATION, support_langs } from "@/helpers/constants";
import { cookies } from "next/headers";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = support_langs.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    //cookie
    const localePathname = pathname.split("/")[1];
    const localeCookie =  request.cookies.get(LANG_COOKIE_NAME)?.value;
     if (localeCookie !== localePathname) {
      const response = NextResponse.next();
      response.cookies.set(LANG_COOKIE_NAME, localePathname, {
        maxAge: LANG_COOKIE_DURATION,
        path: '/',
      });
      return response;
    }

    return NextResponse.next();
  

  }
    return NextResponse.next();

// console.log("redirect")
  // Redirect if there is no locale
  const locale = "en";
  //   const locale = getLocale(request)
  // request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  // return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|images|_next|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
