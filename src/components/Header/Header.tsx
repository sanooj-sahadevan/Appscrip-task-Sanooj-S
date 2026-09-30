import Image from "next/image";
import Link from "next/link";
import { SITE_TEXT } from "@/constants/text";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			{/* Top Announcement Bar */}
			<div className={styles.header__announcement}>
				{SITE_TEXT.announcements.map((text, idx) => (
					<div
						key={idx}
						className={`${styles["header__announcement-item"]} ${idx > 0 ? styles["header__announcement-item--desktop"] : ""
							}`}
					>
						<span className={styles["header__announcement-icon"]}>
							<Image
								src="/images/announcement.png"
								alt="Announcement Icon"
								width={14}
								height={14}
							/>
						</span>
						<span className={styles["header__announcement-text"]}>{text}</span>
					</div>
				))}
			</div>

			{/* Main Header Bar */}
			<div className={styles.header__main}>
				<div className={styles.header__left}>
					{/* Mobile Hamburger */}
					<button
						type="button"
						className={styles["header__hamburger-btn"]}
						aria-label="Open menu"
					>
						<span className={styles["header__hamburger-line"]} />
						<span className={styles["header__hamburger-line"]} />
						<span className={styles["header__hamburger-line"]} />
					</button>

					{/* Brand Logo */}
					<div className={styles["header__brand-icon"]} aria-hidden="true">
						<Image
							src="/images/logo.png"
							alt="Brand Logo"
							width={55}
							height={55}
							priority
						/>
					</div>
				</div>

				<div className={styles.header__center}>
					<Link
						href="/"
						className={styles.header__logo}
						aria-label="Home"
					>
						{SITE_TEXT.brandName}
					</Link>
				</div>

				<div className={styles.header__right}>
					{/* Search */}
					<button
						type="button"
						className={styles["header__icon-btn"]}
						aria-label="Search"
					>
						<svg
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.8"
						>
							<circle cx="11" cy="11" r="7.5" />
							<line x1="21" y1="21" x2="16.5" y2="16.5" />
						</svg>
					</button>

					{/* Wishlist */}
					<button
						type="button"
						className={styles["header__icon-btn"]}
						aria-label="Wishlist"
					>
						<svg
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.8"
						>
							<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
						</svg>
					</button>

					{/* Shopping Bag */}
					<button
						type="button"
						className={styles["header__icon-btn"]}
						aria-label="Shopping Bag"
					>
						<svg
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.8"
						>
							<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
							<line x1="3" y1="6" x2="21" y2="6" />
							<path d="M16 10a4 4 0 0 1-8 0" />
						</svg>
					</button>

					{/* User Profile */}
					<button
						type="button"
						className={`${styles["header__icon-btn"]} ${styles["header__icon-btn--desktop"]}`}
						aria-label="Profile"
					>
						<svg
							width="22"
							height="22"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.8"
						>
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
							<circle cx="12" cy="7" r="4" />
						</svg>
					</button>

					{/* Language Selector */}
					<button
						type="button"
						className={`${styles["header__lang-btn"]} ${styles["header__lang-btn--desktop"]}`}
						aria-label="Select language"
					>
						<span>ENG</span>
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.2"
						>
							<polyline points="6 9 12 15 18 9" />
						</svg>
					</button>
				</div>
			</div>

			{/* Main Navigation Links */}
			<nav className={styles.header__nav} aria-label="Main navigation">
				<ul className={styles["header__nav-list"]}>
					{SITE_TEXT.nav.map((item) => (
						<li key={item.label}>
							<Link href={item.href} className={styles["header__nav-link"]}>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
