"use client";
import Footer from "@/components/FirstLayoutTheme/Footer";
import Navbar from "@/components/FirstLayoutTheme/Navbar";
import ScrollToTop from "@/components/FirstLayoutTheme/ScrollToTop";
import SocialMedia from "@/components/FirstLayoutTheme/SocialMedia";
import { useThemeStore } from "@/zustand/themeStore";
// import { Inter } from 'next/font/google';
import "../styles/globals.css";

// const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const theme = useThemeStore((state: any) => state.theme);

    return (
        <html lang='en' data-theme={theme}>
            <body className='exo-2'>
                <div className='hidden md:block'>
                    <SocialMedia />
                </div>
                <ScrollToTop />
                <Navbar />
                <main className='exo-2 text-2xl p-4 md:pt-4 md:mb-24 md:mt-10 text-gray-400 min-h-[72vh]'>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
