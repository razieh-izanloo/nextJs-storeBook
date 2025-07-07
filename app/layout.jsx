import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import { headers } from "next/headers";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { BootstrClient } from "@/components/bootstrapClient";
import { CookieBanner } from "@/components/cookieBanner/cookieBanner";
import "./globals.scss";
import StoreProvider from "./StoreProvider";
import { GoogleAnalytics } from '@next/third-parties/google'
import { infoLang } from "@/helpers/language";
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const viewport = {
  themeColor: "#ffffff",
};

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const locale = headersList.get("pyl-locale");

  return (
    <html lang={locale} dir={infoLang[locale]?.dir ?? "ltr"}>
      <body>
        <StoreProvider>
          <CookieBanner />
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
        <BootstrClient />
        {process.env.NODE_ENV !== 'development' && <GoogleAnalytics gaId={process.env.GTAG_ID} /> }
      </body>
    </html>
  );
}
