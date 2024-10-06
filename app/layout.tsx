import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ВП9",
    template: `%s | ВП9`,
  },
  description: "Владивостокская поликлиника №9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased container mx-auto px-2">{children}</body>
    </html>
  );
}
