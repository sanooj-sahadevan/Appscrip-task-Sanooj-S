"use client";

import { useState } from "react";
import { FILTER_GROUPS } from "@/constants/filter";
import { SITE_TEXT } from "@/constants/text";
import { formatCategoryName } from "@/lib/utils";
import styles from "./FilterSidebar.module.css";

export interface FilterSidebarProps {
	categories: string[];
	selectedCategory: string;
	onCategoryChange: (category: string) => void;
	isCustomizableOnly: boolean;
	onCustomizableChange: (val: boolean) => void;
}

export default function FilterSidebar({
	categories,
	selectedCategory,
	onCategoryChange,
	isCustomizableOnly,
	onCustomizableChange,
}: FilterSidebarProps) {
	// Open section state: Category and Ideal For expanded by default as in Figma
	const [openSections, setOpenSections] = useState<Record<string, boolean>>({
		category: true,
		idealFor: true,
		occasion: false,
		work: false,
		fabric: false,
		segment: false,
		suitableFor: false,
		rawMaterials: false,
		pattern: false,
	});

	// Checked attributes state for custom filter checkboxes
	const [checkedOptions, setCheckedOptions] = useState<Record<string, boolean>>({});

	const toggleSection = (sectionId: string) => {
		setOpenSections((prev) => ({
			...prev,
			[sectionId]: !prev[sectionId],
		}));
	};

	const handleOptionToggle = (key: string) => {
		setCheckedOptions((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	const unselectAllForGroup = (groupId: string, optionValues: string[]) => {
		setCheckedOptions((prev) => {
			const updated = { ...prev };
			optionValues.forEach((val) => {
				delete updated[`${groupId}-${val}`];
			});
			return updated;
		});
	};

	return (
		<aside className={styles["filter-sidebar"]} aria-label="Product Filters">
			{/* CUSTOMIZABLE Checkbox */}
			<div className={styles["filter-sidebar__customizable"]}>
				<input
					type="checkbox"
					id="customizable-checkbox"
					className={styles["filter-sidebar__checkbox"]}
					checked={isCustomizableOnly}
					onChange={(e) => onCustomizableChange(e.target.checked)}
				/>
				<label
					htmlFor="customizable-checkbox"
					className={styles["filter-sidebar__checkbox-label"]}
				>
					{SITE_TEXT.filter.customizable}
				</label>
			</div>

			{/* CATEGORY (FakeStore API Categories) */}
			<div className={styles["filter-sidebar__section"]}>
				<button
					type="button"
					className={styles["filter-sidebar__section-header"]}
					aria-expanded={openSections.category}
					onClick={() => toggleSection("category")}
				>
					<div className={styles["filter-sidebar__section-titles"]}>
						<span className={styles["filter-sidebar__section-label"]}>CATEGORY</span>
						<p className={styles["filter-sidebar__current-value"]}>
							{formatCategoryName(selectedCategory)}
						</p>
					</div>
					<svg
						className={`${styles["filter-sidebar__chevron"]} ${
							openSections.category ? styles["filter-sidebar__chevron--open"] : ""
						}`}
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.2"
						aria-hidden="true"
					>
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</button>
				{openSections.category && (
					<div className={styles["filter-sidebar__options"]}>
						{selectedCategory !== "all" && (
							<button
								type="button"
								className={styles["filter-sidebar__unselect"]}
								onClick={() => onCategoryChange("all")}
							>
								{SITE_TEXT.filter.unselectAll}
							</button>
						)}
						{["all", ...categories].map((category) => (
							<button
								key={category}
								type="button"
								className={`${styles["filter-sidebar__option-btn"]} ${
									selectedCategory === category
										? styles["filter-sidebar__option-btn--active"]
										: ""
								}`}
								aria-pressed={selectedCategory === category}
								onClick={() => onCategoryChange(category)}
							>
								{formatCategoryName(category)}
							</button>
						))}
					</div>
				)}
			</div>

			{/* Additional Filter Groups from Figma */}
			{FILTER_GROUPS.map((group) => {
				const isOpen = !!openSections[group.id];
				const optionKeys = group.options.map((opt) => opt.value);

				return (
					<div key={group.id} className={styles["filter-sidebar__section"]}>
						<button
							type="button"
							className={styles["filter-sidebar__section-header"]}
							aria-expanded={isOpen}
							onClick={() => toggleSection(group.id)}
						>
							<div className={styles["filter-sidebar__section-titles"]}>
								<span className={styles["filter-sidebar__section-label"]}>
									{group.title}
								</span>
								<p className={styles["filter-sidebar__current-value"]}>
									{group.subtitle || "All"}
								</p>
							</div>
							<svg
								className={`${styles["filter-sidebar__chevron"]} ${
									isOpen ? styles["filter-sidebar__chevron--open"] : ""
								}`}
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.2"
								aria-hidden="true"
							>
								<polyline points="6 9 12 15 18 9" />
							</svg>
						</button>

						{isOpen && (
							<div className={styles["filter-sidebar__options"]}>
								<button
									type="button"
									className={styles["filter-sidebar__unselect"]}
									onClick={() => unselectAllForGroup(group.id, optionKeys)}
								>
									{SITE_TEXT.filter.unselectAll}
								</button>
								{group.options.map((opt) => {
									const itemKey = `${group.id}-${opt.value}`;
									const isChecked = !!checkedOptions[itemKey];

									return (
										<label
											key={opt.value}
											className={styles["filter-sidebar__option-label"]}
										>
											<input
												type="checkbox"
												className={styles["filter-sidebar__checkbox"]}
												checked={isChecked}
												onChange={() => handleOptionToggle(itemKey)}
											/>
											<span>{opt.label}</span>
										</label>
									);
								})}
							</div>
						)}
					</div>
				);
			})}
		</aside>
	);
}
