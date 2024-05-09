import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Footer from "./components/layout/footer/footer";
import Navbar from "./components/layout/navigation/navbar";
import { CartProvider } from "../providers/cart.provider";
import Avatar from "./components/layout/navigation/avatar";
import CartButton from "./components/layout/navigation/cart.button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
         {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
