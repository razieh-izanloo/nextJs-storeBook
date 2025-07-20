import "react-loading-skeleton/dist/skeleton.css";
import { LayoutProps } from "../types/layout";
import StoreProvider from "./StoreProvider";
import { Toast } from "../components/toast/toast";
import "./globals.css";
import { getCurrentLang } from "@/helpers/language";
import { INFO_LANGS } from "@/helpers/constants";

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
          <Toast />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
