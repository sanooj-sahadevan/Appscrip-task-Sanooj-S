import type { Product } from "@/types/product";
import { unstable_rethrow } from "next/navigation";

const PRODUCTS_API_URL = "https://fakestoreapi.com/products";

export async function getProducts(): Promise<Product[]> {
	try {
		const response = await fetch(PRODUCTS_API_URL, {
			cache: "no-store",
			headers: { Accept: "application/json" },
		});

		if (!response.ok) {
			console.error(`Product API returned status ${response.status}`);
			return [];
		}

		const data: unknown = await response.json();
		if (!Array.isArray(data)) {
			console.error("Product API returned an invalid payload");
			return [];
		}

		const products = data.filter(isProduct);
		if (data.length > 0 && products.length === 0) {
			console.error(`Product API returned ${data.length} invalid products`);
		}
		return products;
	} catch (error) {
		unstable_rethrow(error);
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
