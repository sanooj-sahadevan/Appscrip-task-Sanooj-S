import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PLPClient from "@/components/PLPClient/PLPClient";
import { SITE_TEXT } from "@/constants/text";
import { getProducts } from "@/lib/api";
import { generateCollectionSchema } from "@/lib/utils";
import styles from "./page.module.css";

export const metadata: Metadata = {
	title: "Discover Our Products | LOGO",
	description:
		"Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.",
	keywords: ["products", "fashion", "accessories", "shop"],
	openGraph: {
		title: "Discover Our Products | LOGO",
		description:
			"Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.",
		type: "website",
	},
};

export default async function Home() {
	const products = await getProducts();
	const schema = generateCollectionSchema(products);

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
				}}
			/>
			<Header />
			<main className={styles.page}>
				<nav className={styles.breadcrumb} aria-label="Breadcrumb">
					<Link href="/" className={styles.breadcrumbLink}>
						{SITE_TEXT.breadcrumb.home}
					</Link>
					<span className={styles.breadcrumbSeparator} aria-hidden="true">
						|
					</span>
					<span className={styles.breadcrumbCurrent} aria-current="page">
						{SITE_TEXT.breadcrumb.shop}
					</span>
				</nav>
				<header className={styles.hero}>
					<h1 className={styles.title}>{SITE_TEXT.hero.title}</h1>
					<p className={styles.description}>{SITE_TEXT.hero.description}</p>
				</header>
				<PLPClient products={products} />
			</main>
			<Footer />
		</>
	);
}
