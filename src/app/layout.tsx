'use client'
import "~/styles/index.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import ModalEdit from "./_components/Modal/ModalEdit/ModalEdit";
import ModalCreate from "./_components/Modal/ModalCreate";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode;
  session: Session
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <SessionProvider session={session}>
          <TRPCReactProvider>
            {children}
            <ModalEdit/>
            <ModalCreate/>
          </TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
