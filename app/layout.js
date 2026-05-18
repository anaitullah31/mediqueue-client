import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextThemeProvider from "./providers/NextThemeProvider";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextThemeProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-379px)]">{children}</main>
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
