import { serviceIcons } from "./components/icons";
import { brands, BrandLogo } from "./components/brandLogos";
import Contact from "./components/Contact";

const serviceCategories = [
  {
    title: "Virtual Assistant",
    items: [
      "Administrative support",
      "Calendar & email management",
      "Customer service",
      "Data entry & research",
      "Appointment setting",
      "Bookkeeping assistance",
    ],
  },
  {
    title: "Web & Software",
    items: [
      "Website development",
      "Web app development",
      "Mobile app development",
      "E-commerce solutions",
      "UI/UX design",
      "API integrations",
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      "Social media management",
      "Search engine optimization",
      "Content marketing",
      "Pay-per-click advertising",
      "Email campaigns",
      "Analytics & reporting",
    ],
  },
  {
    title: "Creative & Content",
    items: [
      "Graphic design",
      "Brand identity",
      "Video editing",
      "Copywriting",
      "Presentation design",
      "Photo editing",
    ],
  },
  {
    title: "IT & Support",
    items: [
      "Technical support",
      "Cloud & hosting setup",
      "Cybersecurity basics",
      "Database management",
      "System administration",
      "IT consulting",
    ],
  },
  {
    title: "Business Solutions",
    items: [
      "CRM setup & management",
      "Project management",
      "Sales support",
      "Lead generation",
      "Transcription",
      "Process automation",
    ],
  },
];

const products = [
  {
    title: "NexDesk",
    category: "Productivity Platform",
    description:
      "An all-in-one workspace that unifies tasks, docs, and team chat so your business stays organized and on track.",
  },
  {
    title: "NexVA Hub",
    category: "Virtual Assistant Tools",
    description:
      "Client-ready toolkit for virtual assistants — scheduling, inbox triage, and reporting in a single dashboard.",
  },
  {
    title: "NexShop Kit",
    category: "E-commerce Suite",
    description:
      "A ready-to-launch storefront with payments, inventory, and analytics built in for small online sellers.",
  },
  {
    title: "NexBrand Studio",
    category: "Creative Toolkit",
    description:
      "Templates and brand tools that help teams produce consistent logos, social graphics, and marketing assets.",
  },
  {
    title: "NexGuard",
    category: "Security & Monitoring",
    description:
      "Lightweight monitoring and alerts that keep your websites and cloud services safe and always online.",
  },
  {
    title: "NexCRM Lite",
    category: "Sales & Leads",
    description:
      "A simple CRM to capture leads, track follow-ups, and nurture customer relationships without the clutter.",
  },
];

const strengths = [
  "Technology and business support under one roof",
  "Dedicated specialists matched to your goals",
  "Flexible services that scale with your stage",
  "Clear, proactive communication from day one",
];

const stats = [
  { label: "Services offered", value: "30+" },
  { label: "Service areas", value: "6" },
  { label: "Support coverage", value: "24/7" },
  { label: "Client-focused", value: "100%" },
];

export default function Home() {
  return (
    <div className="site-shell" id="home">
      <section className="hero">
        <p className="hero-eyebrow">Nexura Technologies</p>
        <h1 className="hero-title">
          Technology and talent that move your <span>business forward</span>
        </h1>
        <p className="hero-text">
          From virtual assistants to custom software, we bring the right people
          and technology together so you can focus on growing your business.
        </p>
      </section>

      <section className="about" id="about-us">
        <div className="section-head">
          <p className="section-eyebrow">About Us</p>
          <h2 className="section-title">
            A new kind of partner for <span>modern business</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p className="section-lead">
              Nexura Technologies is a newly established company built to help
              businesses thrive — combining expert technology with dependable
              day-to-day support.
            </p>
            <p className="section-text">
              From virtual assistants and customer service to web development
              and digital marketing, we bring versatile specialists together
              under one roof. Whether you&rsquo;re launching a startup or scaling
              an established team, we tailor our services to fit your goals.
            </p>
            <ul className="about-list">
              {strengths.map((item) => (
                <li key={item}>
                  <span className="about-check" aria-hidden="true">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-panel">
            <div className="about-panel-inner">
              <p className="about-overline">Our mission</p>
              <p className="about-quote">
                To give every business access to expert technology and dedicated
                support — all in one place.
              </p>
            </div>

            <dl className="stat-grid">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <dt className="stat-label">{stat.label}</dt>
                  <dd className="stat-value">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="services" id="our-services">
        <div className="section-head">
          <p className="section-eyebrow">Our Services</p>
          <h2 className="section-title">
            Solutions across technology and <span>business support</span>
          </h2>
        </div>

        <div className="card-grid">
          {serviceCategories.map((category) => {
            const Icon = serviceIcons[category.title as keyof typeof serviceIcons];
            return (
              <article className="card service-card" key={category.title}>
                <div className="service-icon" aria-hidden="true">
                  <Icon className="service-icon-svg" />
                </div>
                <h2>{category.title}</h2>
                <ul className="service-items">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="products" id="our-products">
        <div className="section-head">
          <p className="section-eyebrow">Our Products</p>
          <h2 className="section-title">
            Built in-house, ready to <span>power your business</span>
          </h2>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <div className="product-badge" aria-hidden="true">
                {product.title.charAt(0)}
              </div>
              <p className="product-category">{product.category}</p>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="partners" id="our-partners">
        <div className="section-head">
          <p className="section-eyebrow">Our Partnered Company</p>
          <h2 className="section-title">
            Trusted by teams that <span>build with us</span>
          </h2>
        </div>

        <div className="marquee" aria-label="Our partnered companies">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
                {brands.map((brand) => (
                  <div className="partner-logo" key={brand.label}>
                    <BrandLogo brand={brand} className="partner-svg" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}

