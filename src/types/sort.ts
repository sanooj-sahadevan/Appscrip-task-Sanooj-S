export type SortValue =
	| "recommended"
	| "newest"
	| "popular"
	| "price-high"
	| "price-low";

export interface SortOption {
	value: SortValue;
	label: string;
}
