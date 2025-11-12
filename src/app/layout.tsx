import type { Metadata } from "next";
import { Holtwood_One_SC } from "next/font/google";
import "./globals.css";


const holtwood = Holtwood_One_SC({
  subsets: ["latin"],
  weight: ["400"], 
  variable: "--font-holtwood",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Hwamin – Creative Developer",
  description: "Building immersive digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={`${holtwood.variable} antialiased bg-[var(--bg)] text-[var(--text)]`}
      >
        <div className="relative z-10">{children}</div>
        <div className="fixed inset-0 -z-10 pointer-events-none bg-[rgba(0,0,0,0.02)]" />
      </body>
    </html>
  );
}
