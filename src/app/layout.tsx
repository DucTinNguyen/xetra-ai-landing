import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";
import { Inter, Chakra_Petch } from 'next/font/google'
import "./globals.css";
import AppWalletProvider from "@/providers/wallet.provider";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://dashboard.cellprotocol.science/"),
  title: "No Code. No Boundaries.Infinite Creativity.",
  description: "Turn your AI dreams into reality with Xetra AI - no coding, no limits, just unstoppable innovation on a censorship-resistant blockchain.",
  openGraph: {
    title: "No Code. No Boundaries.Infinite Creativity.",
    description: "Turn your AI dreams into reality with Xetra AI - no coding, no limits, just unstoppable innovation on a censorship-resistant blockchain.",
    url: new URL("https://dashboard.cellprotocol.science/")
  }
};

const chakra_petch = Chakra_Petch({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--chakra_petch'
})


const inter = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter'
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>No Code. No Boundaries.Infinite Creativity.</title>
        <meta
          name="description"
          content="Turn your AI dreams into reality with Xetra AI - no coding, no limits, just unstoppable innovation on a censorship-resistant blockchain."
        />
        <meta property="og:image" content="./opengraph-image.png"></meta>
        <meta property="og:url" content="https://dashboard.cellprotocol.science"></meta>
        <meta property="og:title" content="No Code. No Boundaries.Infinite Creativity."></meta>
        <meta property="og:site_name" content="https://dashboard.cellprotocol.science"></meta>
        <meta
          property="og:description"
          content="Turn your AI dreams into reality with Xetra AI - no coding, no limits, just unstoppable innovation on a censorship-resistant blockchain."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.ico"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${chakra_petch.variable} ${inter.variable}`}>
        <AppWalletProvider>
          <Suspense>
            {children}
          </Suspense>
        </AppWalletProvider>
      </body>
    </html>
  );
}
