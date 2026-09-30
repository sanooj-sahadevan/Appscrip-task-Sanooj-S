"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import type { SortValue } from "@/types/sort";
import { filterProductsByCategory, sortProducts } from "@/lib/utils";

export interface UseProductFilterOptions {
	initialProducts: Product[];
}

export function useProductFilter({ initialProducts }: UseProductFilterOptions) {
	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	const [sortValue, setSortValue] = useState<SortValue>("recommended");
	const [isFilterVisible, setIsFilterVisible] = useState<boolean>(true);
	const [isCustomizableOnly, setIsCustomizableOnly] = useState<boolean>(false);

	// Extract unique categories from products
	const categories = useMemo(() => {
		const set = new Set<string>();
		for (const p of initialProducts) {
			if (p.category) {
				set.add(p.category);
			}
		}
		return Array.from(set);
	}, [initialProducts]);

	// Filter and sort products dynamically
	const filteredProducts = useMemo(() => {
		let result = filterProductsByCategory(initialProducts, selectedCategory);
		if (isCustomizableOnly) {
			// Demo customizable filter condition
			result = result.filter((p) => p.id % 2 === 0);
		}
		return sortProducts(result, sortValue);
	}, [initialProducts, selectedCategory, isCustomizableOnly, sortValue]);

	const toggleFilterVisibility = () => {
		setIsFilterVisible((prev) => !prev);
	};

	return {
		categories,
		selectedCategory,
		setSelectedCategory,
		sortValue,
		setSortValue,
		isFilterVisible,
		toggleFilterVisibility,
		isCustomizableOnly,
		setIsCustomizableOnly,
		filteredProducts,
		totalCount: filteredProducts.length,
	};
}
