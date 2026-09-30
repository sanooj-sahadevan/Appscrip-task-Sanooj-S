"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE_TEXT } from "@/constants/text";
import type { Product } from "@/types/product";
import styles from "./ProductCard.module.css";

export interface ProductCardProps {
	product: Product;
	isWishlisted?: boolean;
	onToggleWishlist?: (id: number) => void;
}

export default function ProductCard({
	product,
	isWishlisted = false,
	onToggleWishlist,
}: ProductCardProps) {
	const formattedAlt = `${product.title}, ${product.category}`;
	const isNew = product.id === 1 || product.id === 5;
	const isOutOfStock = product.id === 2;

	return (
		<article className={styles["product-card"]}>
			<div className={styles["product-card__image-wrapper"]}>
				<Image
					src={product.image}
					alt={formattedAlt}
					fill
					sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
					className={styles["product-card__image"]}
				/>
				{isNew && (
					<div className={styles["product-card__badge-new"]}>
						{SITE_TEXT.productCard.newProduct}
					</div>
				)}
				{isOutOfStock && (
					<div className={styles["product-card__badge-oos"]}>
						{SITE_TEXT.productCard.outOfStock}
					</div>
				)}
			</div>

			<div className={styles["product-card__info"]}>
				<div className={styles["product-card__header-row"]}>
					<h3 className={styles["product-card__title"]} title={product.title}>
						{product.title}
					</h3>
					<button
						type="button"
						className={`${styles["product-card__wishlist"]} ${
							isWishlisted ? styles["product-card__wishlist--active"] : ""
						}`}
						aria-label={
							isWishlisted
								? `${SITE_TEXT.productCard.removeFromWishlist} ${product.title}`
								: `${SITE_TEXT.productCard.addToWishlist} ${product.title}`
						}
						onClick={() => onToggleWishlist?.(product.id)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill={isWishlisted ? "currentColor" : "none"}
							stroke="currentColor"
							strokeWidth="1.8"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
						</svg>
					</button>
				</div>

				<p className={styles["product-card__pricing"]}>
					<Link href="/" className={styles["product-card__signin-link"]}>
						{SITE_TEXT.productCard.signIn}
					</Link>{" "}
					or{" "}
					<Link href="/" className={styles["product-card__signin-link"]}>
						{SITE_TEXT.productCard.createAccount}
					</Link>{" "}
					{SITE_TEXT.productCard.toSeePricing}
				</p>
			</div>
		</article>
	);
}
