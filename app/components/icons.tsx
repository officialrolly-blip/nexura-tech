type IconProps = {
  className?: string;
};

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function HeadsetIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2Z" />
      <path d="M20 14a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z" />
      <path d="M18 18v1a3 3 0 0 1-3 3h-3" />
    </svg>
  );
}

export function CodeIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <path d="m8 6-6 6 6 6" />
      <path d="m16 6 6 6-6 6" />
      <path d="M13.5 4 10.5 20" />
    </svg>
  );
}

export function MegaphoneIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M3 11v3a1 1 0 0 0 1 1h2l4 3V7L6 10H4a1 1 0 0 0-1 1Z" />
      <path d="M14 8a5 5 0 0 1 0 8" />
      <path d="M17 5.5a8.5 8.5 0 0 1 0 13" />
    </svg>
  );
}

export function PaletteIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M12 3a9 9 0 0 0 0 18c1.1 0 1.8-.9 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.4-.5-.8-.5-1.2 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5c0-3.9-4-7.2-9-7.2Z" />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M12 3 5 6v5c0 4.4 3 8.3 7 9.7 4-1.4 7-5.3 7-9.7V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.4-3.6" />
    </svg>
  );
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

export const serviceIcons = {
  "Virtual Assistant": HeadsetIcon,
  "Web & Software": CodeIcon,
  "Digital Marketing": MegaphoneIcon,
  "Creative & Content": PaletteIcon,
  "IT & Support": ShieldIcon,
  "Business Solutions": BriefcaseIcon,
} as const;

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M14 9h3V6h-3a4 4 0 0 0-4 4v2H8v3h2v7h3v-7h2.5l.5-3H13v-2a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M7 9v10" />
      <path d="M7 6.5v.01" />
      <path d="M11 19v-6a3 3 0 0 1 6 0v6" />
      <rect x="3" y="4" width="18" height="16" rx="2" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5v.01" />
    </svg>
  );
}

export function TwitterIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M4 4l7.5 9.5L4.5 20h2.7l5.4-5.3L17 20h3l-7.7-9.8L19.5 4h-2.7l-5 5L8 4H4Z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="M11 9.5l4 2.5-4 2.5v-5Z" />
    </svg>
  );
}

export const socialIcons = {
  Facebook: FacebookIcon,
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
  YouTube: YoutubeIcon,
} as const;
