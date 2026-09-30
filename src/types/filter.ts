export interface FilterOption {
	label: string;
	value: string;
}

export interface FilterGroup {
	id: string;
	title: string;
	subtitle?: string;
	options: FilterOption[];
}

export interface FilterState {
	category: string;
	idealFor: string[];
	occasion: string[];
	work: string[];
	fabric: string[];
	segment: string[];
	suitableFor: string[];
	rawMaterials: string[];
	pattern: string[];
}
