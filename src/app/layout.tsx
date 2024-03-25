'use client'; // Corrigindo a diretiva 'use client' (certifique-se de que seja a correta para o seu caso)
import "~/styles/index.css";
import { Inter } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import ModalEdit from "./_components/Modal/ModalEdit/ModalEdit";
import ModalCreate from "./_components/Modal/ModalCreate";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { UpdateProvider } from "~/providers/UpdateProvider";



export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode;
  session: never; 
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session ?? undefined}> {/* Corrigindo a passagem de session */}
          <TRPCReactProvider>
            <UpdateProvider>
              {children}
              <ModalEdit/>
            </UpdateProvider>
            <ModalCreate/>
          </TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
