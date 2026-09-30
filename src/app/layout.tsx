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
	title: {
		default: "Metta Muse | Thoughtful Finds for Everyday Living",
		template: "%s | Metta Muse",
	},
	description:
		"Explore the Metta Muse collection of considered fashion, accessories, and everyday essentials.",
	applicationName: "Metta Muse",
	openGraph: {
		type: "website",
		siteName: "Metta Muse",
		title: "Metta Muse | Thoughtful Finds for Everyday Living",
		description:
			"Explore the Metta Muse collection of considered fashion, accessories, and everyday essentials.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Metta Muse | Thoughtful Finds for Everyday Living",
		description:
			"Explore the Metta Muse collection of considered fashion, accessories, and everyday essentials.",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
			<body>{children}</body>
		</html>
	);
}
