import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aluga Facil - Carros",
  description: "Melhor plataforma par alugar carros em qualquer lugar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
