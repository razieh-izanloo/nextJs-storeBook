import "react-loading-skeleton/dist/skeleton.css";
import { LayoutProps } from "../../types/layout";
import StoreProvider from "./provider";
import { Toast } from "@/components/toast/toast";
import { getCurrentLang } from "@/helpers/language";
import { Navbar } from "@/components/navbar/index";
import { Footer } from "@/components/footer/footer";
import { INFO_LANGS } from "@/helpers/constants";
import "./globals.css";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const viewport = {
  themeColor: "#ffffff",
};

export default async function RootLayout({ children }: LayoutProps) {
  const currentLang = await getCurrentLang();
  
  return (
    <html lang={currentLang} dir={INFO_LANGS[currentLang].dir}>
      <body>
        <StoreProvider>
          <Navbar />
          <Toast />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
