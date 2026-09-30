import type { FilterGroup } from "@/types/filter";

export const FILTER_GROUPS: FilterGroup[] = [
	{
		id: "idealFor",
		title: "IDEAL FOR",
		subtitle: "All",
		options: [
			{ label: "Men", value: "men" },
			{ label: "Women", value: "women" },
			{ label: "Baby & Kids", value: "kids" },
		],
	},
	{
		id: "occasion",
		title: "OCCASION",
		subtitle: "All",
		options: [
			{ label: "Rainy Season", value: "rainy" },
			{ label: "Casual", value: "casual" },
			{ label: "Wedding", value: "wedding" },
		],
	},
	{
		id: "work",
		title: "WORK",
		subtitle: "All",
		options: [
			{ label: "Office", value: "office" },
			{ label: "Casual", value: "casual" },
			{ label: "Work", value: "work" },
		],
	},
	{
		id: "fabric",
		title: "FABRIC",
		subtitle: "All",
		options: [
			{ label: "Cotton", value: "cotton" },
			{ label: "Silk", value: "silk" },
			{ label: "Linen", value: "linen" },
		],
	},
	{
		id: "segment",
		title: "SEGMENT",
		subtitle: "All",
		options: [
			{ label: "Silver", value: "silver" },
			{ label: "Gold", value: "gold" },
			{ label: "Diamond", value: "diamond" },
		],
	},
	{
		id: "suitableFor",
		title: "SUITABLE FOR",
		subtitle: "All",
		options: [
			{ label: "Formal Wear", value: "formal" },
			{ label: "Casual Wear", value: "casual" },
		],
	},
	{
		id: "rawMaterials",
		title: "RAW MATERIALS",
		subtitle: "All",
		options: [
			{ label: "Cotton", value: "cotton" },
			{ label: "Wool", value: "wool" },
			{ label: "Silk", value: "silk" },
		],
	},
	{
		id: "pattern",
		title: "PATTERN",
		subtitle: "All",
		options: [
			{ label: "Windowpane", value: "windowpane" },
			{ label: "Pinstripe", value: "pinstripe" },
			{ label: "Solid", value: "solid" },
		],
	},
];
