'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useThemeStore } from '@/zustand/themeStore';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const theme = useThemeStore((state: any) => state.theme);

    return (
        <html lang='en' data-theme={theme}>
            <body className={inter.className}>
                <Navbar />
                <main className='text-2xl p-4 md:pt-4 mb-52 mt-10 font-mono text-gray-400'>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
