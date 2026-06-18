import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import SmoothScroll from "../components/SmoothScroll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DotFieldBackground from "../components/DotFieldBackground";
import CustomCursor from "../components/CustomCursor/CustomCursor";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata = {
  title: "AK SOFT-TECH - Custom Software & AI Enterprise Solutions",
  description: "Empower your product with our versatile Software Development, Generative AI, RAG Systems, Educational ERP, and Enterprise Solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ position: 'relative' }}>
        <CustomCursor />
        <DotFieldBackground />
        <SmoothScroll>
          <Navbar />
          <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="beforeInteractive" />
        <Script src="/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
