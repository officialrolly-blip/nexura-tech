import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Nexura Technologies team and grow your career with us.",
};

const openings = [
  {
    title: "Virtual Assistant",
    type: "Full-time",
    location: "Remote",
    department: "Business Support",
    description:
      "Provide top-notch administrative, scheduling, and inbox support to our clients with professionalism and care.",
  },
  {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Hybrid",
    department: "Web & Software",
    description:
      "Build responsive, accessible interfaces using modern tools like React and Next.js.",
  },
  {
    title: "Digital Marketing Specialist",
    type: "Full-time",
    location: "Remote",
    department: "Digital Marketing",
    description:
      "Plan and run SEO, social, and paid campaigns that help our clients grow their audience.",
  },
  {
    title: "Graphic Designer",
    type: "Part-time",
    location: "Remote",
    department: "Creative & Content",
    description:
      "Create on-brand visuals for social media, web, and marketing collateral.",
  },
  {
    title: "IT Support Technician",
    type: "Full-time",
    location: "On-site",
    department: "IT & Support",
    description:
      "Deliver dependable technical support, troubleshooting, and system maintenance.",
  },
];

export default function CareerPage() {
  return (
    <div className="site-shell career-page">
      <section className="career-hero">
        <p className="section-eyebrow">Careers</p>
        <h1 className="hero-title">
          Grow your career with <span>Nexura Technologies</span>
        </h1>
        <p className="hero-text">
          We&rsquo;re a newly established team built on curiosity, collaboration,
          and a passion for helping businesses succeed. Explore our open roles
          and find where you fit.
        </p>
      </section>

      <section className="career-openings">
        <div className="section-head">
          <p className="section-eyebrow">Open Positions</p>
          <h2 className="section-title">
            Find your next <span>opportunity</span>
          </h2>
        </div>

        <div className="job-grid">
          {openings.map((job) => (
            <article className="job-card" key={job.title}>
              <div className="job-tags">
                <span className="job-tag">{job.department}</span>
                <span className="job-tag job-tag-muted">{job.type}</span>
                <span className="job-tag job-tag-muted">{job.location}</span>
              </div>
              <h3 className="job-title">{job.title}</h3>
              <p className="job-description">{job.description}</p>
              <Link className="job-apply" href="/#contact-us">
                Apply Now
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
