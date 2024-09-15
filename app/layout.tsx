import type { Metadata } from "next";
import Header from "./components/Header";
import "./fonts/ProximaNova/fonts.css";
import "./globals.scss";

export const metadata: Metadata = {
  title: "INCHAPIN",
  description: "Тестовый сайт для INCHAPIN",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
