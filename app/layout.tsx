import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import type React from "react";

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "BBBetter Starter",
	description:
		"Next.js 15 Starter Kit for 2025 using Bun, Biome, and Better Auth",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
