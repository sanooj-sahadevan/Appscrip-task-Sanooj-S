"use client";

import { useState } from "react";
import styles from "./Footer.module.css";

export interface FooterAccordionProps {
	title: string;
	children: React.ReactNode;
}

export default function FooterAccordion({
	title,
	children,
}: FooterAccordionProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className={styles["footer-accordion"]}>
			<button
				type="button"
				className={styles["footer-accordion__header"]}
				onClick={() => setIsOpen((prev) => !prev)}
				aria-expanded={isOpen}
			>
				<span className={styles["footer-accordion__title"]}>{title}</span>
				<svg
					className={`${styles["footer-accordion__chevron"]} ${
						isOpen ? styles["footer-accordion__chevron--open"] : ""
					}`}
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					aria-hidden="true"
				>
					<polyline points="6 9 12 15 18 9" />
				</svg>
			</button>
			{isOpen && (
				<div className={styles["footer-accordion__content"]}>{children}</div>
			)}
		</div>
	);
}
