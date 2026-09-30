"use client";

import FilterSidebar from "@/components/FilterSidebar/FilterSidebar";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import SortDropdown from "@/components/SortDropdown/SortDropdown";
import { SITE_TEXT } from "@/constants/text";
import { useProductFilter } from "@/hooks/useProductFilter";
import { useWishlist } from "@/hooks/useWishlist";
import type { Product } from "@/types/product";
import styles from "./PLPClient.module.css";

export interface PLPClientProps {
	products: Product[];
}

export default function PLPClient({ products }: PLPClientProps) {
	const {
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
		totalCount,
	} = useProductFilter({ initialProducts: products });

	const { isWishlisted, toggleWishlist } = useWishlist();

	return (
		<div className={styles["plp-client"]}>
			{/* Utility Bar: Item count, Filter Toggle, Sort Dropdown */}
			<div className={styles["plp-client__filter-bar"]}>
				<div className={styles["plp-client__filter-left"]}>
					<span className={styles["plp-client__item-count"]}>
						{totalCount} ITEMS
					</span>
					<button
						type="button"
						className={styles["plp-client__filter-toggle"]}
						onClick={toggleFilterVisibility}
						aria-expanded={isFilterVisible}
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.2"
							style={{
								transform: isFilterVisible ? "rotate(180deg)" : "rotate(0deg)",
								transition: "transform 0.2s ease",
							}}
							aria-hidden="true"
						>
							<polyline points="15 18 9 12 15 6" />
						</svg>
						<span className="desktop-toggle-text">
							{isFilterVisible
								? SITE_TEXT.filter.hideFilter
								: SITE_TEXT.filter.showFilter}
						</span>
					</button>
				</div>

				<div className={styles["plp-client__filter-right"]}>
					<SortDropdown selectedSort={sortValue} onSortChange={setSortValue} />
				</div>
			</div>

			{/* Main Grid Content with Filter Sidebar */}
			<div className={styles["plp-client__content"]}>
				{isFilterVisible && (
					<FilterSidebar
						categories={categories}
						selectedCategory={selectedCategory}
						onCategoryChange={setSelectedCategory}
						isCustomizableOnly={isCustomizableOnly}
						onCustomizableChange={setIsCustomizableOnly}
					/>
				)}

				<div className={styles["plp-client__grid-wrapper"]}>
					<ProductGrid
						products={filteredProducts}
						isFilterVisible={isFilterVisible}
						isWishlisted={isWishlisted}
						onToggleWishlist={toggleWishlist}
					/>
				</div>
			</div>
		</div>
	);
}
