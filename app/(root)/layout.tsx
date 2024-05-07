import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import FooterCom from "@/components/FooterCom";
import DogAnimations from '@/components/DogAnimations';
import DogAnimation from '@/components/DogAnimation';



const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "9jak9 Store",
  description: "9jak9's product Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ToasterProvider />
          <Navbar />
          <DogAnimations />
          <DogAnimation />
          <div className=" bg-black text-white">{children}</div>
          <FooterCom />
        </ClerkProvider>
      </body>
    </html>
  );
}
