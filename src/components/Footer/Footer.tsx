import Image from "next/image";
import Link from "next/link";
import {
	FOOTER_COMPANY_LINKS,
	FOOTER_QUICK_LINKS,
	SITE_TEXT,
} from "@/constants/text";
import FooterAccordion from "./FooterAccordion";
import styles from "./Footer.module.css";

const PAYMENT_IMAGES = [
	{ name: "Google Pay", src: "/images/gpay.png" },
	{ name: "Mastercard", src: "/images/mastercard.png" },
	{ name: "PayPal", src: "/images/paypal.png" },
	{ name: "Amex", src: "/images/amex.png" },
	{ name: "Apple Pay", src: "/images/applepay.png" },
	{ name: "OPay", src: "/images/opay.png" },
];

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__inner}>
				{/* Top Section */}
				<div className={styles.footer__top}>
					<div className={styles.footer__newsletter}>
						<h2 className={styles.footer__heading}>
							{SITE_TEXT.footer.newsletterHeading}
						</h2>
						<p className={styles.footer__subtext}>
							{SITE_TEXT.footer.newsletterSubtext}
						</p>
						<div className={styles.footer__subscribe}>
							<input
								type="email"
								placeholder={SITE_TEXT.footer.emailPlaceholder}
								className={styles["footer__email-input"]}
								aria-label="Email address for newsletter"
							/>
							<button
								type="button"
								className={styles["footer__subscribe-btn"]}
							>
								{SITE_TEXT.footer.subscribeButton}
							</button>
						</div>
					</div>

					{/* Desktop Contact */}
					<div className={styles.footer__contact}>
						<h2 className={styles.footer__heading}>
							{SITE_TEXT.footer.contactHeading}
						</h2>
						<p className={styles["footer__contact-item"]}>
							{SITE_TEXT.footer.phone}
						</p>
						<p className={styles["footer__contact-item"]}>
							{SITE_TEXT.footer.email}
						</p>
						<h2
							className={`${styles.footer__heading} ${styles["footer__heading--currency"]}`}
						>
							{SITE_TEXT.footer.currencyHeading}
						</h2>
						<div className={styles.footer__currency}>
							<Image
								src="/images/united-states-flag.png"
								alt="United States Flag"
								width={24}
								height={24}
								className={styles["footer__currency-flag-img"]}
							/>
							<span className={styles["footer__currency-symbol"]} aria-hidden="true">
								{SITE_TEXT.footer.currencySymbol}
							</span>
							<span>{SITE_TEXT.footer.currencyCode}</span>
						</div>
						<p className={styles["footer__currency-note"]}>
							{SITE_TEXT.footer.currencyNote}
						</p>
					</div>

					{/* Mobile only Call Us & Currency */}
					<div className={styles["footer__contact-mobile"]}>
						<div className={styles.footer__divider} />
						<h2 className={styles.footer__heading}>{SITE_TEXT.footer.callUs}</h2>
						<p className={styles["footer__contact-mobile-row"]}>
							{SITE_TEXT.footer.contactRow}
						</p>
						<div className={styles.footer__divider} />
						<h2 className={styles.footer__heading}>
							{SITE_TEXT.footer.currencyHeading}
						</h2>
						<div className={styles.footer__currency}>
							<Image
								src="/images/united-states-flag.png"
								alt="United States Flag"
								width={24}
								height={24}
								className={styles["footer__currency-flag-img"]}
							/>
							<span className={styles["footer__currency-symbol"]} aria-hidden="true">
								{SITE_TEXT.footer.currencySymbol}
							</span>
							<span>{SITE_TEXT.footer.currencyCode}</span>
						</div>
						<div className={styles.footer__divider} />
					</div>
				</div>

				<div
					className={`${styles.footer__divider} ${styles["footer__divider--desktop"]}`}
				/>

				{/* Middle Section - Desktop */}
				<div className={styles.footer__middle}>
					<div className={styles["footer__links-col"]}>
						<h3 className={styles["footer__col-heading"]}>
							{SITE_TEXT.footer.mettaMuseHeading}
						</h3>
						<ul className={styles["footer__links-list"]}>
							{FOOTER_COMPANY_LINKS.map((link) => (
								<li key={link.label}>
									<Link href={link.href} className={styles.footer__link}>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className={styles["footer__links-col"]}>
						<h3 className={styles["footer__col-heading"]}>
							{SITE_TEXT.footer.quickLinksHeading}
						</h3>
						<ul className={styles["footer__links-list"]}>
							{FOOTER_QUICK_LINKS.map((link) => (
								<li key={link.label}>
									<Link href={link.href} className={styles.footer__link}>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className={styles["footer__links-col"]}>
						<h3 className={styles["footer__col-heading"]}>
							{SITE_TEXT.footer.followUsHeading}
						</h3>
						<div className={styles.footer__social}>
							<Link
								href="https://instagram.com"
								className={styles["footer__social-link"]}
								aria-label="Follow us on Instagram"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
									<circle cx="12" cy="12" r="4" />
									<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
								</svg>
							</Link>
							<Link
								href="https://linkedin.com"
								className={styles["footer__social-link"]}
								aria-label="Follow us on LinkedIn"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
									<rect x="2" y="9" width="4" height="12" />
									<circle cx="4" cy="4" r="2" />
								</svg>
							</Link>
						</div>

						<div className={styles.footer__payments}>
							<h3
								className={`${styles["footer__col-heading"]} ${styles["footer__col-heading--payments"]}`}
							>
								{SITE_TEXT.footer.acceptsHeading}
							</h3>
							<div className={styles["footer__payment-icons"]}>
								{PAYMENT_IMAGES.map((payment) => (
									<Image
										key={payment.name}
										src={payment.src}
										alt={payment.name}
										width={56}
										height={35}
										className={styles["footer__payment-img"]}
									/>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Mobile Accordion Section */}
				<div className={styles["footer__mobile-accordion"]}>
					<FooterAccordion title={SITE_TEXT.footer.mettaMuseHeading}>
						<ul className={styles["footer__links-list"]}>
							{FOOTER_COMPANY_LINKS.map((link) => (
								<li key={link.label}>
									<Link href={link.href} className={styles.footer__link}>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</FooterAccordion>

					<FooterAccordion title={SITE_TEXT.footer.quickLinksHeading}>
						<ul className={styles["footer__links-list"]}>
							{FOOTER_QUICK_LINKS.map((link) => (
								<li key={link.label}>
									<Link href={link.href} className={styles.footer__link}>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</FooterAccordion>

					<FooterAccordion title={SITE_TEXT.footer.followUsHeading}>
						<div className={styles.footer__social}>
							<Link
								href="https://instagram.com"
								className={styles["footer__social-link"]}
								aria-label="Follow us on Instagram"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
									<circle cx="12" cy="12" r="4" />
									<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
								</svg>
							</Link>
							<Link
								href="https://linkedin.com"
								className={styles["footer__social-link"]}
								aria-label="Follow us on LinkedIn"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
									<rect x="2" y="9" width="4" height="12" />
									<circle cx="4" cy="4" r="2" />
								</svg>
							</Link>
						</div>
					</FooterAccordion>

					{/* Mobile payments */}
					<div className={styles["footer__mobile-payments"]}>
						<p className={styles["footer__payments-label"]}>
							{SITE_TEXT.footer.acceptsHeading}
						</p>
						<div className={styles["footer__payment-icons"]}>
							{PAYMENT_IMAGES.map((payment) => (
								<Image
									key={payment.name}
									src={payment.src}
									alt={payment.name}
									width={50}
									height={32}
									className={styles["footer__payment-img"]}
								/>
							))}
						</div>
					</div>
				</div>

				<p className={styles.footer__copyright}>{SITE_TEXT.footer.copyright}</p>
			</div>
		</footer>
	);
}
