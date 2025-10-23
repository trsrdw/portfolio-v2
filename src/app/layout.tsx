import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto } from "next/font/google";
import { ErrorProvider } from "@/lib/context/errorcontext";
import Script from "next/script";
import HeaderCondition from "@/components/Global/Context/header";
import ScrollUp from "@/components/Global/ScrollUp/scrollup";
import FooterCondition from "@/components/Global/Context/footer";
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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://tiarasdewi.com";

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
    url: baseUrl || "https://tiarasdewi.com",
    siteName: "Tiara S. Dewi Portfolio",
    images: [
      {
        url:
          (baseUrl || "https://tiarasdewi.com") +
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
      (baseUrl || "https://tiarasdewi.com") +
      "/profile-meta.jpg",
    ],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "url": baseUrl,
      "name": "Tiara S. Dewi",
      "alternateName": "tiarasdewi.com",
      "publisher": {
        "@id": `${baseUrl}/#organization`
      }
    },
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "Tiara S. Dewi",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo/logo-icon.png`
      }
    },
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      "name": "Tiara S. Dewi",
      "url": baseUrl,
      "image": `${baseUrl}/logo/logo-icon.png`,
      "jobTitle": "Frontend Developer",
      "worksFor": {
        "@id": `${baseUrl}/#organization`
      },
      "sameAs": [
        "https://www.linkedin.com/in/tiarasdewi",
        "https://github.com/trsrdw"
      ]
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ErrorProvider>
      <html lang="en">
        <body className={`${jakarta.variable} ${roboto.variable}`}>
          <Script
            id="structured-data"
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
          <HeaderCondition />
          {children}
          <FooterCondition />
          <ScrollUp />
        </body>
      </html>
    </ErrorProvider>
  );
}