import "./globals.css";
import {
  Cedarville_Cursive,
  Inter,
  Libre_Baskerville,
  Outfit,
  Sekuya,
} from "next/font/google";
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
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular & Bold
  style: ["normal", "italic"],
  display: "swap", // Prevents invisible text during load
  variable: "--font-libre-baskerville", // Optional: CSS variable for flexibility
});
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libreBaskerville.variable}`}
    >
      <body className="overflow-x-hidden">
        <div className="min-h-screen flex flex-col px-6 lg:px-20 overflow-x-hidden">
          <Navbar />
          <main className="mt-8 w-full max-w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
