import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Sonia's Portfolio",
  description: "Portfolio website of all my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex-col">
          {children}
          <Analytics />
      </body>
    </html>
  );
}
