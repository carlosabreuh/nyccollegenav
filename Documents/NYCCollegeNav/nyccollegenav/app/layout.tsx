import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import CustomCursor from "@/components/CustomCursor";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NYCCollegeNav - Free Help Paying for College",
  description: "Get help with FAFSA, NYS DREAM Act, and TAP applications. Unlock thousands in free financial aid for college.",
  keywords: "FAFSA, financial aid, college, NYC, DREAM Act, TAP, scholarships, Pell Grant",
  openGraph: {
    title: "NYCCollegeNav - Free Help Paying for College",
    description: "Get help with FAFSA, NYS DREAM Act, and TAP applications.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <LanguageProvider>
          {/* Skip to main content link for keyboard accessibility */}
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <CustomCursor />
          <Header />
          <main id="main-content" className="pt-16">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
