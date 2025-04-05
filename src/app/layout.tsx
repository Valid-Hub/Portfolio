import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Anta, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const anta = Anta({
    variable: '--font-anta',
    subsets: ['latin'],
    weight: '400',
});

const jetbrainsMono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Portfolio',
    description: "Jani Patrik's portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} ${anta.variable} ${jetbrainsMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
