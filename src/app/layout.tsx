import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const themeInitScript = `
  try {
    const savedTheme = localStorage.getItem("first-theme");

    document.documentElement.dataset.theme =
      savedTheme === "dark" ? "dark" : "light";
  } catch {
    document.documentElement.dataset.theme = "light";
  }
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.firstrefrigeracao.com.br"),

  title: {
    default:
      "First Refrigeração | Peças e Assistência Técnica em São Carlos",
    template: "%s | First Refrigeração",
  },

  description:
    "Peças para linha branca e assistência técnica em São Carlos. Atendimento para consumidores, técnicos, oficinas e empresas.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
    >
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