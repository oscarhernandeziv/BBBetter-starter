import type { Metadata } from "next";
import "./globals.css";
import type React from "react";

import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-geist-mono",
});

export const metadata: Metadata = {
	title: "Better Starter",
	description:
		"Next.js 15 Starter Kit for 2025 using Bun, Biome, and Better Auth",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`dark ${geistMono.className}`}
			suppressHydrationWarning
		>
			<head>
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏁</text></svg>"
				/>
			</head>
			<body className="bg-black text-white antialiased">{children}</body>
		</html>
	);
}
