import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

import Footer from "@/components/global/Footer";

export const metadata: Metadata = {
  title: "Adisa Alago",
  description: "Watch that speaks style",
};

// Customize the font
const poppins = Poppins({
  subsets: ["latin"], // Use the subsets you need
  weight: ["400", "700"], // Specify weights (optional)
  style: ["normal", "italic"], // Specify styles (optional)
  display: "swap", // Improves loading behavior
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
