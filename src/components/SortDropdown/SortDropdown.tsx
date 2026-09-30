"use client";

import { useState } from "react";
import { SORT_OPTIONS } from "@/constants/sort";
import type { SortOption, SortValue } from "@/types/sort";
import styles from "./SortDropdown.module.css";

export interface SortDropdownProps {
	selectedSort: SortValue;
	onSortChange: (sortValue: SortValue) => void;
}

export default function SortDropdown({
	selectedSort,
	onSortChange,
}: SortDropdownProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const currentOption =
		SORT_OPTIONS.find((opt) => opt.value === selectedSort) || SORT_OPTIONS[0];

	const handleSelect = (option: SortOption) => {
		onSortChange(option.value);
		setIsOpen(false);
	};

	return (
		<div className={styles["sort-dropdown"]}>
			<button
				type="button"
				className={styles["sort-dropdown__trigger"]}
				onClick={() => setIsOpen((prev) => !prev)}
				aria-expanded={isOpen}
				aria-haspopup="listbox"
			>
				<span>{currentOption.label}</span>
				<svg
					className={`${styles["sort-dropdown__chevron"]} ${
						isOpen ? styles["sort-dropdown__chevron--open"] : ""
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
				<ul className={styles["sort-dropdown__menu"]} role="listbox">
					{SORT_OPTIONS.map((option) => {
						const isSelected = currentOption.value === option.value;

						return (
							<li
								key={option.value}
								role="option"
								aria-selected={isSelected}
							>
								<button
									type="button"
									className={`${styles["sort-dropdown__option"]} ${
										isSelected ? styles["sort-dropdown__option--active"] : ""
									}`}
									onClick={() => handleSelect(option)}
								>
									{isSelected && (
										<svg
											className={styles["sort-dropdown__check"]}
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2.5"
											aria-hidden="true"
										>
											<polyline points="20 6 9 17 4 12" />
										</svg>
									)}
									<span>{option.label}</span>
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
