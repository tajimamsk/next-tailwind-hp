import { M_PLUS_1_Code } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const m_PLUS_1_Code = M_PLUS_1_Code({ subsets: ["latin"] });

export const metadata = {
  title: "next tailwind hp",
  description: "学習塾 サイト",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={m_PLUS_1_Code.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
