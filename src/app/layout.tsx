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
    const theme = savedTheme === "dark" ? "dark" : "light";

    document.documentElement.dataset.theme = theme;

    const themeColorMeta = document.querySelector(
      'meta[name="theme-color"]'
    );

    if (themeColorMeta) {
      themeColorMeta.setAttribute(
        "content",
        theme === "dark" ? "#070b12" : "#f6f8fc"
      );
    }
  } catch {
    document.documentElement.dataset.theme = "light";

    const themeColorMeta = document.querySelector(
      'meta[name="theme-color"]'
    );

    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", "#f6f8fc");
    }
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

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "First Refrigeração",

    title:
      "First Refrigeração | Peças e Assistência Técnica em São Carlos",

    description:
      "Peças para linha branca e assistência técnica em São Carlos. Atendimento para consumidores, técnicos, oficinas e empresas.",

    images: [
      {
        url: "/brand/og-first.png",
        width: 1200,
        height: 630,
        alt: "First Refrigeração - Peças e Assistência Técnica em São Carlos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "First Refrigeração | Peças e Assistência Técnica em São Carlos",

    description:
      "Peças para linha branca e assistência técnica em São Carlos. Atendimento para consumidores, técnicos, oficinas e empresas.",

    images: ["/brand/og-first.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta
          id="theme-color-meta"
          name="theme-color"
          content="#f6f8fc"
          suppressHydrationWarning
        />

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