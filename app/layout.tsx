import Nav from "@/components/nav";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Footer } from "@/components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "APEX Fitness",
  description: "APEX Fitness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#FEF6F3] !scroll-smooth">
      <body className={poppins.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
