import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "dWalletz: Crypto Assets Tracker",
  description: "Your safest crypto assets tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.className}`}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
