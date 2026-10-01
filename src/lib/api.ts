import type { Product } from "@/types/product";
import { unstable_rethrow } from "next/navigation";

const PRODUCTS_API_URL =
	"https://dummyjson.com/products?limit=18&select=id,title,description,price,category,thumbnail";

interface ApiProduct {
	id: number;
	title: string;
	description: string;
	price: number;
	category: string;
	thumbnail: string;
}

export async function getProducts(): Promise<Product[]> {
	try {
		const response = await fetch(PRODUCTS_API_URL, {
			next: { revalidate: 3600 },
			headers: { Accept: "application/json" },
		});

		if (!response.ok) {
			console.error(`Product API returned status ${response.status}`);
			return [];
		}

		const data: unknown = await response.json();
		if (
			!data ||
			typeof data !== "object" ||
			!("products" in data) ||
			!Array.isArray(data.products)
		) {
			console.error("Product API returned an invalid payload");
			return [];
		}

		const products = data.products.filter(isApiProduct);
		if (data.products.length > 0 && products.length === 0) {
			console.error(`Product API returned ${data.products.length} invalid products`);
		}
		return products.map(({ id, title, description, price, category, thumbnail }) => ({
			id,
			title,
			description,
			price,
			category,
			image: thumbnail,
		}));
	} catch (error) {
		unstable_rethrow(error);
		console.error("Unable to load products from API:", error);
		return [];
	}
}

function isApiProduct(value: unknown): value is ApiProduct {
	if (!value || typeof value !== "object") return false;
	const product = value as Partial<ApiProduct>;
	return (
		typeof product.id === "number" &&
		typeof product.title === "string" &&
		typeof product.description === "string" &&
		typeof product.price === "number" &&
		typeof product.category === "string" &&
		typeof product.thumbnail === "string"
	);
}
