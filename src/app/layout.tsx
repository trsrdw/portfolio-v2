import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto } from "next/font/google";
import { ErrorProvider } from "@/lib/context/errorcontext";
import HeaderCondition from "@/components/Global/Context/header";
import ScrollUp from "@/components/Global/ScrollUp/scrollup";
import FooterCondition from "@/components/Global/Context/footer";
import SchemaMarkup from "@/components/Global/Schema/schema";
import "@/styles/globals.scss";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Tiara S. Dewi - Frontend Developer",
  description: "Portfolio of Tiara S. Dewi, a Frontend Developer specializing in React and Next.js.",
  robots: "index, follow",
  icons: {
    icon: "/logo/logo-icon.png",
    apple: "/logo/logo-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Tiara S. Dewi - Frontend Developer",
    description: "Portfolio of Tiara S. Dewi, a Frontend Developer specializing in React and Next.js.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://tiarasdewi.com",
    siteName: "Tiara S. Dewi Portfolio",
    images: [
      {
        url:
          (process.env.NEXT_PUBLIC_BASE_URL || "https://tiarasdewi.com") +
          "/profile-meta.jpg",
        width: 1280,
        height: 720,
        alt: "Tiara S. Dewi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiara S. Dewi - Frontend Developer",
    description: "Portfolio of Tiara S. Dewi, a Frontend Developer specializing in React and Next.js.",
    images: [
      (process.env.NEXT_PUBLIC_BASE_URL || "https://tiarasdewi.com") +
      "/profile-meta.jpg",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ErrorProvider>
      <html lang="en">
        <body className={`${jakarta.variable} ${roboto.variable}`}>
          <SchemaMarkup />
          <HeaderCondition />
          {children}
          <FooterCondition />
          <ScrollUp />
        </body>
      </html>
    </ErrorProvider>
  );
}