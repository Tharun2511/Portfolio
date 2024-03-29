import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Index from "./index";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Personal Portfolio",
    description: "This is my portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-[#030014] overflow-y-scroll flex`}
            >
                <Index />
                {children}
            </body>
        </html>
    );
}
