import type { SortOption } from "@/types/sort";

export const SORT_OPTIONS: SortOption[] = [
	{ value: "recommended", label: "RECOMMENDED" },
	{ value: "newest", label: "NEWEST FIRST" },
	{ value: "popular", label: "POPULAR" },
	{ value: "price-high", label: "PRICE : HIGH TO LOW" },
	{ value: "price-low", label: "PRICE : LOW TO HIGH" },
];
