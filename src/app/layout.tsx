import type { Metadata } from "next";
import "./globals.css";

// Di sini tempat ganti nama tab-nya!
export const metadata: Metadata = {
  title: "Ciel golek okane",
  description: "Adel Commission Desk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}