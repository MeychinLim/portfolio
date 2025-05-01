"use client";
import Footer from "@/components/FirstLayoutTheme/Footer";
import ScrollToTop from "@/components/FirstLayoutTheme/ScrollToTop";
import SecondNavbar from "@/components/SecondLayoutTheme/SecondNavbar";
import SecondLayoutNavbar from "@/components/SecondLayoutTheme/SecondNavbar";
import { useThemeStore } from "@/zustand/themeStore";
import "../styles/globals.css";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const theme = useThemeStore((state: any) => state.theme);

    return (
        <html lang='en' data-theme={theme}>
            <body className='exo-2'>
                <div className='flex flex-col min-h-screen'>
                    <SecondNavbar />
                    <main className='flex-1'>{children}</main>
                    <ScrollToTop />
                    <Footer />
                </div>
            </body>
        </html>
    );
}
