"use client";

import { useState } from "react";
import { socialIcons } from "./icons";

type SocialName = keyof typeof socialIcons;

const socialLinks: { name: SocialName; handle: string; href: string }[] = [
  { name: "Facebook", handle: "/nexuratech", href: "#" },
  { name: "LinkedIn", handle: "/company/nexura", href: "#" },
  { name: "Instagram", handle: "@nexuratech", href: "#" },
  { name: "Twitter", handle: "@nexuratech", href: "#" },
  { name: "YouTube", handle: "/nexuratech", href: "#" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder submit — wire up to your API / form service later.
    setStatus("sent");
  };

  return (
    <section className="contact" id="contact-us">
      <div className="section-head">
        <p className="section-eyebrow">Contact Us</p>
        <h2 className="section-title">
          Let&rsquo;s build something <span>great together</span>
        </h2>
      </div>

      <div className="contact-grid">
        <div className="contact-form-wrap">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field-row">
              <div className="field">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" placeholder="John Doe" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="How can we help?"
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <button className="contact-submit" type="submit">
              Send Message
            </button>

            {status === "sent" && (
              <p className="contact-success" role="status">
                Thanks for reaching out! We&rsquo;ll get back to you shortly.
              </p>
            )}
          </form>
        </div>

        <aside className="contact-social">
          <h3 className="contact-social-title">Connect With Us</h3>
          <p className="contact-social-text">
            Follow us on social media for updates, insights, and the latest from
            Nexura Technologies.
          </p>

          <ul className="social-list">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.name];
              return (
                <li key={link.name}>
                  <a
                    className="social-link"
                    href={link.href}
                    aria-label={`${link.name} ${link.handle}`}
                  >
                    <span className="social-icon" aria-hidden="true">
                      <Icon className="social-icon-svg" />
                    </span>
                    <span className="social-meta">
                      <span className="social-name">{link.name}</span>
                      <span className="social-handle">{link.handle}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </section>
  );
}
