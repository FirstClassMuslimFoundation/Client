import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Head from "next/head";

import { RootLayout as CustomLayout } from "@/components/uis/RootLayout";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FCM Foundation (FCMF)",
  description:
    "Build students’ capacity by providing academic and professional support services with Islamic ethics to raising excellent youths.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-C030FBJ396`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C030FBJ396');
            `,
        }}
      />
      <body className={manrope.className}>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
