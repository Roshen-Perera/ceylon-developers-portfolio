// app/layout.tsx
import { Inter, Kaushan_Script } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Default font for whole app
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // good practice
});

// Secondary font
const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushan",
});

export const metadata = {
  title: "My App",
  description: "Using two fonts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      {/* Apply default font globally */}
      <body className={`${inter.className} ${kaushan.variable}`}>
        {children}
      </body>
    </html>
  );
}
