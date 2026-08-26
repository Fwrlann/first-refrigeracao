import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "First Refrigeração",
  description:
    "Peças e assistência técnica para linha branca em São Carlos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}