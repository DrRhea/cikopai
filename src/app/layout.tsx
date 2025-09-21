import type { Metadata, Viewport } from "next";
import { Aleo } from "next/font/google";
import "./globals.css";

const aleo = Aleo({
  variable: "--font-aleo",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cikopai.vercel.app'),
  title: "Cikopai - Coffee Shop Terbaik di Jakarta",
  description: "Nikmati pengalaman kopi terbaik di Cikopai. Coffee shop dengan suasana hangat dan nyaman di Jakarta. Menu kopi berkualitas tinggi, signature drinks, dan pelayanan terbaik.",
  keywords: "coffee shop jakarta, kopi jakarta, cikopai, coffee shop terbaik, kopi berkualitas, coffee shop cibubur, kopi premium, coffee experience",
  authors: [{ name: "Cikopai Coffee Shop" }],
  creator: "Cikopai",
  publisher: "Cikopai",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://cikopai.vercel.app",
    siteName: "Cikopai Coffee Shop",
    title: "Cikopai - Coffee Shop Terbaik di Jakarta",
    description: "Nikmati pengalaman kopi terbaik di Cikopai. Coffee shop dengan suasana hangat dan nyaman di Jakarta. Menu kopi berkualitas tinggi, signature drinks, dan pelayanan terbaik.",
    images: [
      {
        url: "/images/hero/cikopai-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Cikopai Coffee Shop Interior - Suasana hangat dan nyaman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cikopai - Coffee Shop Terbaik di Jakarta",
    description: "Nikmati pengalaman kopi terbaik di Cikopai. Coffee shop dengan suasana hangat dan nyaman di Jakarta.",
    images: ["/images/hero/cikopai-interior.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/images/favicon.ico",
        href: "/images/favicon.ico",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2e4d3d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Cikopai" />
        <link rel="apple-touch-icon" href="/images/logo/cikopai-logo.png" />
      </head>
      <body
        className={`${aleo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
