import type { Metadata } from "next";
import './assets/css/materialdesignicons.min.css'
import './assets/scss/tailwind.scss'
import LayoutWrapper from './components/layout-wrapper'

export const metadata: Metadata = {
  title: "Global Dispatch Services - Professional Truck Dispatch Services",
  description: "Professional truck dispatch services providing reliable coordination and support for carriers, owner-operators, and trucking businesses across the transportation industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body
        className={` dark:bg-slate-900`}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
