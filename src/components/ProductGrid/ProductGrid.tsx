"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import type { Product } from "@/types/product";
import styles from "./ProductGrid.module.css";

export interface ProductGridProps {
	products: Product[];
	isFilterVisible?: boolean;
	isWishlisted?: (id: number) => boolean;
	onToggleWishlist?: (id: number) => void;
}

export default function ProductGrid({
	products,
	isFilterVisible = true,
	isWishlisted,
	onToggleWishlist,
}: ProductGridProps) {
	if (products.length === 0) {
		return (
			<section className={styles["product-grid"]} aria-label="Product listing">
				<div className={styles["product-grid__empty"]}>
					No products match the selected criteria.
				</div>
			</section>
		);
	}

	return (
		<section
			className={`${styles["product-grid"]} ${
				isFilterVisible ? styles["product-grid--with-sidebar"] : ""
			}`}
			aria-label="Product listing"
		>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					isWishlisted={isWishlisted ? isWishlisted(product.id) : false}
					onToggleWishlist={onToggleWishlist}
				/>
			))}
		</section>
	);
}
