import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Meychin Portfolio'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <main className='max-w-5xl mx-auto text-2xl pt-4 h-screen'>
                    {children}
                </main>
            </body>
        </html>
    );
}
