import { RootLayoutProps } from '../types/rootLayout';
import StoreProvider from "./StoreProvider";
import { Toast } from "../components/toast/toast";
import "./globals.css";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const viewport = {
  themeColor: "#ffffff",
};


export default async function RootLayout({ children }: RootLayoutProps) {

  return (
    <html>
      <body>
        <StoreProvider>
          <Toast/>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
