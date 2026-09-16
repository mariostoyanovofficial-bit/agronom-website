import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Agronom – Екологични консултации | Шумен, цяла България",
  description:
    "Пълен набор от консултантски и проектантски услуги по опазване на околната среда. ОВОС, комплексни разрешителни, управление на отпадъците. Работим с всички РИОСВ.",
  keywords:
    "екологични консултации, ОВОС, комплексни разрешителни, управление отпадъци, РИОСВ, еколог Шумен",
  openGraph: {
    title: "Agronom – Екологични консултации",
    description:
      "Пълен набор от консултантски услуги по опазване на околната среда",
    type: "website",
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="bg"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col bg-white"
        style={{
          fontFamily: "var(--font-inter), 'Inter', -apple-system, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
