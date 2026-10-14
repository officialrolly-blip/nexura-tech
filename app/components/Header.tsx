"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about-us" },
  { label: "Our Services", href: "#our-services" },
  { label: "Our Products", href: "#our-products" },
  { label: "Contact Us", href: "#contact-us" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="Nexura Technologies home">
          <Image
            src="/logo.png"
            alt="Nexura Technologies"
            width={160}
            height={80}
            priority
          />
        </a>

        <nav
          id="primary-navigation"
          className={`primary-navigation${isMenuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  className="navigation-link"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="nav-cta"
            href="#contact-us"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span
            className={`hamburger${isMenuOpen ? " is-active" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
  );
}
