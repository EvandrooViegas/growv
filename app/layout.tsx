import "./globals.css";
import "./index.css";
import { Poppins as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Footer from "./footer";
import Navbar from "./navbar";
import ProvidersWrapper from "./ProvidersWrapper";
import { Metadata } from "next";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: `Growv Digital - Online Solucions, Real Results`,
  description:`Growv Digital - Online Solucions, Real Results`,
};


export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />

      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
      <link rel="icon" href="/image.png" sizes="any" className="rounded-xl" />
        <ProvidersWrapper>
          <Navbar />

    <main>
    {children}

    </main>
          <Toaster />
          <Footer />
        </ProvidersWrapper>
      </body>
    </html>
  );
}
