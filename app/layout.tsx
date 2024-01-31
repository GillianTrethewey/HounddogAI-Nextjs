import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import { Sidebar } from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hounddog AI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="flex flex-row">
          <Sidebar />
          {children}
        </section>
      </body>
    </html>
  );
}