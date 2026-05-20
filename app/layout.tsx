import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roberto | Advanced Roblox Developer",
  description:
    "Portfolio of Roberto (@realgroupreal) — Advanced Roblox Developer specializing in Luau scripting, 3D modeling, and immersive game systems.",
  keywords: ["Roblox", "Luau", "Developer", "Roberto", "3D Modeling", "Scripter"],
  authors: [{ name: "Roberto" }],
  openGraph: {
    title: "Roberto | Advanced Roblox Developer",
    description: "Crafting immersive Roblox experiences with precision code & custom assets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-[#080506] font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
