"use client";

import { useState } from "react";

export function useWishlist() {
	const [wishlist, setWishlist] = useState<Set<number>>(new Set());

	const toggleWishlist = (productId: number) => {
		setWishlist((prev) => {
			const updated = new Set(prev);
			if (updated.has(productId)) {
				updated.delete(productId);
			} else {
				updated.add(productId);
			}
			return updated;
		});
	};

	const isWishlisted = (productId: number) => wishlist.has(productId);

	return {
		wishlist,
		toggleWishlist,
		isWishlisted,
	};
}
