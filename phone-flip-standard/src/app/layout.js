/*
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
*/
'use client'
import './globals.css'
import { AuthContextProvider } from '@/context/AuthContext'
import { ClerkProvider } from '@clerk/nextjs'
import { neobrutalism } from '@clerk/themes';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ClerkProvider>
        {/*<AuthContextProvider>*/}
          {children}
        {/*</AuthContextProvider>*/}
        </ClerkProvider>
      </body>
    </html>
  )
}
