import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "First Refrigeração",
  description:
    "Peças e assistência técnica para linha branca em São Carlos.",
};

const themeInitScript = `
  (function () {
    try {
      var savedTheme = localStorage.getItem("first-theme");

      document.documentElement.dataset.theme =
        savedTheme === "dark" ? "dark" : "light";
    } catch {
      document.documentElement.dataset.theme = "light";
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="pt-BR" suppressHydrationWarning>
    <head>
      <script
        dangerouslySetInnerHTML={{
          __html: themeInitScript,
        }}
      />
    </head>

    <body className={`${manrope.variable} font-sans antialiased`}>
      {children}
    </body>
  </html>
);
}