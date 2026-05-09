import React, { CSSProperties } from "react";

const products = [
  {
    title: "GLP-1 Support",
    label: "Appetite & metabolism",
    copy: "Supports healthy appetite signalling, cravings and metabolic balance.",
    image: "/GLP1.PNG",
    bg: "#eaf3ff",
    accent: "#1463ff"
  },
  {
    title: "Digestive Health",
    label: "Fiber & gut health",
    copy: "Daily fiber support for regularity, gut comfort and lasting fullness.",
    image: "/FIBER.PNG",
    bg: "#fff1dc",
    accent: "#f28a00"
  },
  {
    title: "Energy & Longevity",
    label: "NAD+ & vitality",
    copy: "Cellular energy support for healthy ageing and everyday vitality.",
    image: "/NAD.PNG",
    bg: "#f3e7ff",
    accent: "#7c3aed"
  },
  {
    title: "Hormone Balance",
    label: "DIM+ support",
    copy: "Targeted support for healthy hormone metabolism and balance.",
    image: "/DIM.PNG",
    bg: "#e8f8ec",
    accent: "#159447"
  }
];

export default function Home() {
  return (
    <main style={page}>
      <TopBar />
      <Header />
      <Hero />
      <TrustBar />
      <ShopYourWay />
      <HowItWorks />
      <ProductShowcase />
      <Benefits />
      <Journal />
      <Newsletter />
      <Footer />
    </main>
  );
}

function TopBar() {
  return (
    <div style={topBar}>
      <span>SUBSCRIBE & SAVE 15%</span>
      <span>FREE DELIVERY OVER €50</span>
      <span>SCIENCE-BACKED. PLANT-POWERED.</span>
      <span>30-DAY MONEY BACK GUARANTEE</span>
    </div>
  );
}

function Header() {
  return (
    <header style={header}>
      <div style={logo}>ForteMatic</div>
      <nav style={nav}>
        <span>Shop all</span>
        <span>Science</span>
        <span>GLP-1 Support</span>
        <span>Health Goals</span>
        <span>About</span>
        <span>Learn</span>
      </nav>
      <button style={blackBtn}>Shop Now</button>
    </header>
  );
}

function Hero() {
  return (
    <section style={hero}>
      <div style={heroShade} />
      <div style={heroText}>
        <div style={stars}>
          <span style={{ color: "#4c9b5f", fontSize: 24 }}>★★★★★</span>
          <span>60,000+ happy customers</span>
        </div>

        <h1 style={heroTitle}>
          Elevate your everyday <span style={italic}>health.</span>
        </h1>

        <p style={heroCopy}>
          Premium supplements designed to support GLP-1 function, metabolism,
          energy, digestion and long-term wellbeing.
        </p>

        <div style={{ display: "flex", gap: 18, marginTop: 34 }}>
          <button style={blackBtn}>Shop GLP-1 Support →</button>
          <button style={whiteBtn}>Take the Quiz →</button>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section style={trustBar}>
      {[
        ["Clean Formulas", "No fillers. No junk."],
        ["Third-party Tested", "Purity & potency verified."],
        ["Made in USA", "GMP certified facility."],
        ["Fast Shipping", "Tracked delivery."]
      ].map(([title, copy]) => (
        <div key={title} style={trustItem}>
          <strong>{title}</strong>
          <span>{copy}</span>
        </div>
      ))}
    </section>
  );
}

function ShopYourWay() {
  return (
    <section style={section}>
      <div style={sectionHead}>
        <div>
          <p style={eyebrow}>SHOP YOUR WAY</p>
          <h2 style={h2}>
            Find what <span style={italic}>your</span> body needs.
          </h2>
        </div>
        <strong>View all products →</strong>
      </div>

      <div style={categoryGrid}>
        {products.map((p) => (
          <article key={p.title} style={{ ...categoryCard, background: p.bg }}>
            <div style={categoryText}>
              <p style={{ ...smallLabel, color: p.accent }}>{p.label}</p>
              <h3 style={categoryTitle}>{p.title}</h3>
              <p style={categoryCopy}>{p.copy}</p>
              <strong>Shop Now →</strong>
            </div>

            <div style={{ ...softOrb, background: p.accent }} />
            <div style={fakeStone} />
            <img src={p.image} alt={p.title} style={categoryImage} />
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section style={glpSection}>
      <div>
        <p style={eyebrow}>HOW IT WORKS</p>
        <h2 style={h2}>
          Understanding GLP-1, <span style={italic}>beautifully simplified.</span>
        </h2>
        <p style={bodyLarge}>
          GLP-1 is a natural hormone produced in the gut that helps regulate
          appetite, fullness and metabolic signalling.
        </p>
      </div>

      <div style={stepLine}>
        {[
          ["1", "You eat"],
          ["2", "GLP-1 is released"],
          ["3", "Signals are sent"],
          ["4", "You feel satisfied"]
        ].map(([n, title]) => (
          <div key={n} style={step}>
            <div style={stepCircle}>{n}</div>
            <strong>{title}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <section style={showcase}>
      <div style={{ maxWidth: 620 }}>
        <p style={eyebrow}>FORMULATED FOR DAILY USE</p>
        <h2 style={h2}>Premium supplement support without the complicated routine.</h2>
        <p style={bodyLarge}>
          From metabolic support to digestion, longevity and hormone balance,
          ForteMatic makes modern wellness simple, elevated and consistent.
        </p>
        <button style={blackBtn}>Explore Products →</button>
      </div>

      <div style={showcaseGrid}>
        {products.map((p, i) => (
          <div key={p.title} style={{ ...showcaseTile, transform: `rotate(${[-4, 3, -3, 4][i]}deg)` }}>
            <img src={p.image} alt={p.title} style={showcaseImage} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section style={benefits}>
      <p style={purpleEyebrow}>BENEFITS OF FORTEMATIC</p>
      <h2 style={darkH2}>Clean. Tested. Trusted.</h2>

      <div style={benefitGrid}>
        {[
          ["Metabolic Support", "Support appetite signalling and metabolic wellness."],
          ["Gut Health", "Daily support for digestion, regularity and fullness."],
          ["Cellular Energy", "Help support vitality and healthy ageing."],
          ["Hormone Balance", "Targeted formulas for hormone metabolism."],
          ["Plant-powered", "Premium ingredients selected with purpose."],
          ["Simple", "Easy daily wellness without overcomplication."]
        ].map(([title, copy]) => (
          <div key={title} style={benefitCard}>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Journal() {
  const posts = [
    ["What is GLP-1?", "A simple guide to the hormone behind appetite and fullness.", "/GLP1.PNG", "#eaf3ff"],
    ["Natural ways to support GLP-1", "How daily habits and ingredients may support metabolic health.", "/FIBER.PNG", "#fff1dc"],
    ["Fiber supplements and fullness", "Why fiber is a foundational part of digestive wellness.", "/FIBER.PNG", "#fff1dc"],
    ["NAD+ and healthy ageing", "Understanding cellular energy and long-term vitality.", "/NAD.PNG", "#f3e7ff"]
  ];

  return (
    <section style={{ ...section, background: "#fbfaf8" }}>
      <div style={sectionHead}>
        <div>
          <p style={eyebrow}>THE FORTEMATIC JOURNAL</p>
          <h2 style={h2}>Science-backed insights for everyday wellness.</h2>
        </div>
        <strong>View all articles →</strong>
      </div>

      <div style={articleGrid}>
        {posts.map(([title, copy, image, bg]) => (
          <article key={title} style={article}>
            <div style={{ ...articleVisual, background: bg }}>
              <img src={image} alt={title} style={articleImage} />
            </div>
            <div style={articleBody}>
              <h3 style={articleTitle}>{title}</h3>
              <p style={articleCopy}>{copy}</p>
              <strong>Read article →</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section style={newsletter}>
      <p style={eyebrow}>JOIN THE COMMUNITY</p>
      <h2 style={h2}>Wellness insights delivered weekly.</h2>
      <p style={bodyLarge}>Exclusive offers, product launches and science-backed education.</p>
      <div style={{ display: "flex", gap: 14, marginTop: 28 }}>
        <input placeholder="Your email address" style={input} />
        <button style={blackBtn}>Sign up →</button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={footer}>
      <div style={{ ...logo, color: "#fff" }}>ForteMatic</div>
      <p style={{ color: "#aaa", maxWidth: 520, lineHeight: 1.8 }}>
        Science-backed supplements for modern health and everyday wellness.
      </p>
      <div style={footerLinks}>
        <span>Shop</span><span>Science</span><span>Ingredients</span><span>FAQ</span><span>Contact</span>
      </div>
      <div style={{ borderTop: "1px solid #333", marginTop: 60, paddingTop: 30, color: "#666" }}>
        © 2026 ForteMatic. All rights reserved.
      </div>
    </footer>
  );
}

const page: CSSProperties = {
  fontFamily: "Inter, Arial, sans-serif",
  background: "#fff",
  color: "#080808",
  overflowX: "hidden"
};

const topBar: CSSProperties = {
  background: "#080808",
  color: "#fff",
  padding: "12px 60px",
  display: "flex",
  justifyContent: "space-between",
  fontSize: 13,
  fontWeight: 800,
  letterSpacing: 0.5
};

const header: CSSProperties = {
  height: 92,
  padding: "0 60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#fff",
  position: "sticky",
  top: 0,
  zIndex: 50,
  borderBottom: "1px solid #eee"
};

const logo: CSSProperties = {
  fontSize: 42,
  fontWeight: 900,
  letterSpacing: -2,
  color: "#080808"
};

const nav: CSSProperties = {
  display: "flex",
  gap: 28,
  fontWeight: 750,
  fontSize: 16
};

const hero: CSSProperties = {
  position: "relative",
  minHeight: 760,
  backgroundImage: "url('/hero-banner.png')",
  backgroundSize: "cover",
  backgroundPosition: "center right",
  display: "flex",
  alignItems: "center"
};

const heroShade: CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(255,255,255,.99) 0%, rgba(255,255,255,.94) 35%, rgba(255,255,255,.36) 62%, rgba(255,255,255,0) 100%)"
};

const heroText: CSSProperties = {
  position: "relative",
  zIndex: 2,
  marginLeft: "7vw",
  maxWidth: 660
};

const stars: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 16,
  fontSize: 20,
  fontWeight: 700,
  marginBottom: 22
};

const heroTitle: CSSProperties = {
  fontSize: 88,
  lineHeight: 0.93,
  letterSpacing: -5,
  margin: 0,
  fontWeight: 900
};

const italic: CSSProperties = {
  fontFamily: "Georgia, serif",
  fontStyle: "italic",
  color: "#7c3aed",
  fontWeight: 400
};

const heroCopy: CSSProperties = {
  fontSize: 24,
  lineHeight: 1.55,
  color: "#333",
  marginTop: 28
};

const blackBtn: CSSProperties = {
  background: "#080808",
  color: "#fff",
  border: "none",
  borderRadius: 999,
  padding: "18px 30px",
  fontWeight: 900,
  fontSize: 16,
  cursor: "pointer"
};

const whiteBtn: CSSProperties = {
  background: "#fff",
  color: "#080808",
  border: "1px solid #111",
  borderRadius: 999,
  padding: "18px 30px",
  fontWeight: 900,
  fontSize: 16,
  cursor: "pointer"
};

const trustBar: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  borderTop: "1px solid #eee",
  borderBottom: "1px solid #eee"
};

const trustItem: CSSProperties = {
  padding: 34,
  borderRight: "1px solid #eee",
  display: "flex",
  flexDirection: "column",
  gap: 8,
  fontSize: 17
};

const section: CSSProperties = { padding: "100px 7vw" };

const sectionHead: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
  gap: 40
};

const eyebrow: CSSProperties = {
  color: "#7c3aed",
  fontWeight: 900,
  letterSpacing: 0.5,
  fontSize: 14
};

const h2: CSSProperties = {
  fontSize: 60,
  lineHeight: 1,
  letterSpacing: -3,
  maxWidth: 900,
  margin: "16px 0 0",
  fontWeight: 900
};

const categoryGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: 28,
  marginTop: 44
};

const categoryCard: CSSProperties = {
  position: "relative",
  minHeight: 500,
  borderRadius: 34,
  padding: 34,
  overflow: "hidden",
  boxShadow: "0 22px 55px rgba(0,0,0,.08)"
};

const categoryText: CSSProperties = {
  position: "relative",
  zIndex: 3,
  maxWidth: 260
};

const smallLabel: CSSProperties = {
  fontWeight: 900,
  fontSize: 13,
  margin: 0
};

const categoryTitle: CSSProperties = {
  fontSize: 34,
  lineHeight: 1.05,
  margin: "12px 0",
  fontWeight: 900
};

const categoryCopy: CSSProperties = {
  fontSize: 17,
  lineHeight: 1.55,
  color: "#333"
};

const categoryImage: CSSProperties = {
  position: "absolute",
  right: -10,
  bottom: -16,
  width: "72%",
  maxHeight: 315,
  objectFit: "contain",
  filter: "drop-shadow(0 24px 28px rgba(0,0,0,.22))"
};

const softOrb: CSSProperties = {
  position: "absolute",
  right: -30,
  bottom: 80,
  width: 210,
  height: 210,
  borderRadius: 999,
  opacity: 0.16,
  filter: "blur(6px)"
};

const fakeStone: CSSProperties = {
  position: "absolute",
  left: 28,
  bottom: 28,
  width: 135,
  height: 78,
  borderRadius: "50%",
  background: "rgba(255,255,255,.45)",
  transform: "rotate(-10deg)"
};

const glpSection: CSSProperties = {
  padding: "100px 7vw",
  background: "#fbfaf8",
  display: "grid",
  gridTemplateColumns: "1fr 1.2fr",
  gap: 60,
  alignItems: "center"
};

const bodyLarge: CSSProperties = {
  fontSize: 21,
  lineHeight: 1.7,
  color: "#555",
  maxWidth: 700
};

const stepLine: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: 18
};

const step: CSSProperties = {
  background: "#fff",
  border: "1px solid #eee",
  borderRadius: 24,
  padding: 26,
  textAlign: "center",
  boxShadow: "0 16px 35px rgba(0,0,0,.04)"
};

const stepCircle: CSSProperties = {
  width: 64,
  height: 64,
  borderRadius: 999,
  background: "#efe4ff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 16px",
  fontWeight: 900
};

const showcase: CSSProperties = {
  padding: "110px 7vw",
  display: "grid",
  gridTemplateColumns: "1fr 1.1fr",
  gap: 70,
  alignItems: "center"
};

const showcaseGrid: CSSProperties = {
  minHeight: 520,
  background: "linear-gradient(135deg,#f5f0ff,#fff2df)",
  borderRadius: 42,
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  gap: 24,
  padding: 42,
  boxShadow: "0 24px 70px rgba(0,0,0,.08)"
};

const showcaseTile: CSSProperties = {
  background: "rgba(255,255,255,.72)",
  borderRadius: 28,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 20px 50px rgba(0,0,0,.08)"
};

const showcaseImage: CSSProperties = {
  width: "72%",
  height: 220,
  objectFit: "contain",
  filter: "drop-shadow(0 18px 20px rgba(0,0,0,.16))"
};

const benefits: CSSProperties = {
  padding: "110px 7vw",
  background: "#080808",
  color: "#fff"
};

const purpleEyebrow: CSSProperties = {
  color: "#b88cff",
  fontWeight: 900,
  letterSpacing: 0.5
};

const darkH2: CSSProperties = {
  fontSize: 64,
  lineHeight: 1,
  maxWidth: 900,
  marginTop: 18,
  fontWeight: 900
};

const benefitGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: 24,
  marginTop: 50
};

const benefitCard: CSSProperties = {
  background: "#111",
  border: "1px solid #2b2b2b",
  borderRadius: 28,
  padding: 30
};

const articleGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: 26,
  marginTop: 44
};

const article: CSSProperties = {
  border: "1px solid #eee",
  borderRadius: 28,
  overflow: "hidden",
  background: "#fff",
  boxShadow: "0 18px 45px rgba(0,0,0,.05)"
};

const articleVisual: CSSProperties = {
  height: 210,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const articleImage: CSSProperties = {
  height: 180,
  objectFit: "contain",
  filter: "drop-shadow(0 16px 20px rgba(0,0,0,.14))"
};

const articleBody: CSSProperties = {
  padding: 26
};

const articleTitle: CSSProperties = {
  fontSize: 24,
  lineHeight: 1.15,
  margin: 0,
  fontWeight: 900
};

const articleCopy: CSSProperties = {
  color: "#666",
  lineHeight: 1.6
};

const newsletter: CSSProperties = {
  padding: "90px 7vw",
  background: "linear-gradient(135deg,#faf5ff,#fff2df)"
};

const input: CSSProperties = {
  padding: "18px 24px",
  borderRadius: 999,
  border: "1px solid #ddd",
  width: 380,
  fontSize: 16
};

const footer: CSSProperties = {
  background: "#080808",
  color: "#fff",
  padding: "80px 7vw"
};

const footerLinks: CSSProperties = {
  display: "flex",
  gap: 30,
  margin: "35px 0",
  color: "#ddd"
};
