import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quizap",
  description: "Learn fun, fast and easy with quizap!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
