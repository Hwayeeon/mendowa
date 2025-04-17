import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import MouseMoveEffect from "@/components/mouse-move-effect";
import { company } from "@/resources/content"
import { baseURL } from "@/resources/config";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(`https://${baseURL}`),
    title: company.name,
    description: company.description,
    openGraph: {
      title: company.name,
      description: company.description,
      url: `https://${baseURL}`,
      siteName: company.name,
      images: [
        {
          url: `https://${baseURL}/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: company.name,
      description: company.description,
      images: [`https://${baseURL}/og-image.png`],
      creator: "@mendowa",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        nocache: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MouseMoveEffect />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
