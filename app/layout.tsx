import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Senku.io",
    description:
        "The Requirement-Based Library Protocol for Rebuilding Civilization.",
    creator: "Joyal George K J",
    applicationName: "Senku.io",
    archives: "https://github.com/senku-io",
    authors: [
        { name: "senku-io github org", url: "https://github.com/senku-io" },
    ],
    category: "library",
    keywords: [
        "senku.io",
        "survival",
        "survival kit",
        "survival software",
        "survival library",
        "library",
        "knowledge",
        "archive",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
