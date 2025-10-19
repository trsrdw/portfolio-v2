import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto } from "next/font/google";
import { ErrorProvider } from "@/lib/context/errorcontext";
import HeaderCondition from "@/components/Global/Context/header";
import "@/styles/globals.scss";
// import FooterCondition from "@/components/Global/Context/footer";

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
  title: "Portfolio - Tiara S. Dewi",
  description: "Tiara's Portfolio",
  icons: {
    icon: "/logo/logo-icon.png",
    apple: "/logo/logo-icon.png",
  },
  manifest: "/manifest.json"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ErrorProvider>
      <html lang="en">
        <body className={`${jakarta.variable} ${roboto.variable}`}>
          <HeaderCondition />
          {children}
          {/* <FooterCondition /> */}
        </body>
      </html>
    </ErrorProvider>
  );
}