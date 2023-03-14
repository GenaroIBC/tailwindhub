"use client";

import "@/styles/tailwind.min.css";
import "@/styles/globals.css";
import { SupabaseProvider } from "@/context/SupabaseContext";
import { Header } from "./components/Header/Header";
import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html className={lexendDeca.className} lang="en">
      <head />
      <body>
        <SupabaseProvider>
          <Header />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
