'use client'
import "~/styles/index.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import ModalEdit from "./_components/Modal/ModalEdit/ModalEdit";
import ModalCreate from "./_components/Modal/ModalCreate";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import Home from "./page";

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
  
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <SessionProvider session={session}>
          <TRPCReactProvider>
            <Home setId={setId} setTitle={setTitle} setStatus={setStatus}/>
            <ModalEdit id={id} title={title} status={status}/>
            <ModalCreate/>
          </TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
