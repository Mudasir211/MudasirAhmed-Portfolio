import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Mudasir Ahmed — Fullstack Web Developer",
  description:
    "Portfolio of Mudasir Ahmed — HTML, CSS, JavaScript, React, Node, Next.js, MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="min-h-screen px-6 lg:px-20">
          <Navbar />
          <main className="mt-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
