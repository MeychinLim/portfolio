"use client";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import ScrollToTop from "@/components/ScrollToTop";
import SecondLayoutNavbar from "@/components/SecondLayout/SecondLayoutNavbar";
// import SocialMedia from "@/components/SocialMedia";
import { useThemeStore } from "@/zustand/themeStore";
// import Image from "next/image";
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
            <body className='exo-2 h-screen w-screen'>
                <div className='flex h-full'>
                    <main className='flex-1'>{children}</main>
                    <SecondLayoutNavbar />
                </div>
            </body>
        </html>
    );
}
