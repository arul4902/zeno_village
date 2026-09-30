import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeno Village | A Forest Retreat in 900 Kandi, Wayanad",
  description: "Explore forest cottages, guided treks and slow days at Zeno Village, 900 Kandi, Wayanad.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

