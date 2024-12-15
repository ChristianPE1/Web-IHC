import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import SecondLayout from './second-layout';

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grupo SCS",
  description: "Grupo de estudiantes de la Escuela de Ciencias de la Computación de la UNSA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className}
      >
        <SecondLayout>
        {children}
        </SecondLayout>
      </body>
    </html>
  );
}
