import "~/styles/index.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import ModalEdit from "./_components/Modal/ModalEdit/ModalEdit";
import ModalCreate from "./_components/Modal/ModalCreate";

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
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <ModalEdit/>
        <ModalCreate/>
      </body>
    </html>
  );
}
