import type { Product } from "@/types/product";

const PRODUCTS_API_URL = "https://fakestoreapi.com/products";

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
		if (!Array.isArray(data)) return [];

		return data.filter(isProduct);
	} catch (error) {
		console.error("Unable to load products from API:", error);
		return [];
	}
}

function isProduct(value: unknown): value is Product {
	if (!value || typeof value !== "object") return false;
	const product = value as Partial<Product>;
	return (
		typeof product.id === "number" &&
		typeof product.title === "string" &&
		typeof product.description === "string" &&
		typeof product.price === "number" &&
		typeof product.category === "string" &&
		typeof product.image === "string" &&
		(!product.rating ||
			(typeof product.rating.rate === "number" &&
				typeof product.rating.count === "number"))
	);
}
