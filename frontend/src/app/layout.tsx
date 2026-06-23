import "./globals.css";

import type { Metadata } from "next";

import Providers from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "DeepTrust AI",
  description: "AI Powered DeepFake Detection Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}