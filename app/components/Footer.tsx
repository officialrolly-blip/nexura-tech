import Link from "next/link";
import { socialIcons } from "./icons";

const sitemap = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/#about-us" },
      { label: "Contact Us", href: "/#contact-us" },
      { label: "Careers", href: "/career" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Virtual Assistant", href: "/#our-services" },
      { label: "Web & Software", href: "/#our-services" },
      { label: "Digital Marketing", href: "/#our-services" },
      { label: "IT & Support", href: "/#our-services" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "NexDesk", href: "/#our-products" },
      { label: "NexVA Hub", href: "/#our-products" },
      { label: "NexShop Kit", href: "/#our-products" },
      { label: "NexGuard", href: "/#our-products" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "YouTube", href: "#" },
] as const;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-logo">Nexura Technologies</p>
            <p className="footer-tagline">
              Technology and talent that move your business forward. A newly
              established partner for modern business.
            </p>
            <div className="footer-social">
              {socialLinks.map((item) => {
                const Icon = socialIcons[item.name];
                return (
                  <a
                    key={item.name}
                    className="footer-social-link"
                    href={item.href}
                    aria-label={item.name}
                  >
                    <Icon className="footer-social-icon" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-sitemap">
            {sitemap.map((column) => (
              <nav className="footer-column" key={column.title} aria-label={column.title}>
                <h3 className="footer-heading">{column.title}</h3>
                <ul className="footer-list">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link className="footer-link" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; 2026 Nexura Technologies. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link className="footer-link" href="/#contact-us">
              Privacy Policy
            </Link>
            <Link className="footer-link" href="/#contact-us">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
