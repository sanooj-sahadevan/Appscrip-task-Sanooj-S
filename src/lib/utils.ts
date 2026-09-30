import type { Product } from "@/types/product";
import type { SortValue } from "@/types/sort";

/**
 * Capitalize first letter of each word in category string
 */
export function formatCategoryName(category: string): string {
	if (category === "all") return "All products";
	return category.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Filter products by category
 */
export function filterProductsByCategory(
	products: Product[],
	category: string
): Product[] {
	if (category === "all") return products;
	return products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

/**
 * Sort products according to selected sort option
 */
export function sortProducts(
	products: Product[],
	sortValue: SortValue
): Product[] {
	const sorted = [...products];
	switch (sortValue) {
		case "price-high":
			return sorted.sort((a, b) => b.price - a.price);
		case "price-low":
			return sorted.sort((a, b) => a.price - b.price);
		case "popular":
			return sorted.sort((a, b) => (b.rating?.count ?? 0) - (a.rating?.count ?? 0));
		case "newest":
			return sorted.sort((a, b) => b.id - a.id);
		case "recommended":
		default:
			return sorted;
	}
}

/**
 * Generate schema.org JSON-LD data for SEO
 */
export function generateCollectionSchema(products: Product[]) {
	return {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Metta Muse Product Collection",
		description:
			"Browse the Metta Muse collection of fashion, accessories, and everyday essentials.",
		mainEntity: {
			"@type": "ItemList",
			numberOfItems: products.length,
			itemListElement: products.map((product, index) => ({
				"@type": "ListItem",
				position: index + 1,
				item: {
					"@type": "Product",
					name: product.title,
					description: product.description,
					image: product.image,
					category: product.category,
					offers: {
						"@type": "Offer",
						priceCurrency: "USD",
						price: product.price,
						availability: "https://schema.org/InStock",
					},
					...(product.rating && {
						aggregateRating: {
							"@type": "AggregateRating",
							ratingValue: product.rating.rate,
							reviewCount: product.rating.count,
						},
					}),
				},
			})),
		},
	};
}
