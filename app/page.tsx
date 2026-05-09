import React, { CSSProperties } from "react";

const products = [
  {
    title: "GLP-1 Support",
    short: "Appetite, cravings & metabolism",
    copy: "Support healthy appetite signalling, fullness and metabolic balance.",
    image: "/GLP1.PNG",
    bg: "linear-gradient(135deg,#dbeafe 0%,#eef6ff 45%,#bcd7ff 100%)",
    accent: "#1463ff"
  },
  {
    title: "Digestive Health",
    short: "Fiber, fullness & gut health",
    copy: "Daily fiber support for regularity, satiety and digestive wellness.",
    image: "/FIBER.PNG",
    bg: "linear-gradient(135deg,#fff1dc 0%,#ffdca8 45%,#ffbd63 100%)",
    accent: "#f28a00"
  },
  {
    title: "Energy & Longevity",
    short: "NAD+, vitality & ageing",
    copy: "Cellular energy support for healthy ageing and everyday vitality.",
    image: "/NAD.PNG",
    bg: "linear-gradient(135deg,#f4e7ff 0%,#e2c5ff 45%,#b887ff 100%)",
    accent: "#7c3aed"
  },
  {
    title: "Hormone Balance",
    short: "DIM+, balance & performance",
    copy: "Targeted support for healthy hormone metabolism and balance.",
    image: "/DIM.PNG",
    bg: "linear-gradient(135deg,#e7fbea 0%,#c8f2d0 45%,#8ee5a1 100%)",
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
      <ShopByGoal />
      <HowItWorks />
      <FeaturedProducts />
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
      <div style={logo}>FORTE<span style={{ color: "#7c3aed" }}>MATIC</span></div>
      <nav style={nav}>
        <span>Shop All</span>
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
        <div style={pill}>✶ SCIENCE-BACKED. PLANT-POWERED.</div>
        <h1 style={heroTitle}>
          Elevate your everyday <span style={serifPurple}>health.</span>
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
        ["Third-Party Tested", "Purity & potency verified."],
        ["Made in USA", "GMP certified facility."],
        ["Fast Shipping", "Tracked worldwide delivery."]
      ].map(([title, copy]) => (
        <div key={title} style={trustItem}>
          <strong>{title}</strong>
          <span>{copy}</span>
        </div>
      ))}
    </section>
  );
}

function ShopByGoal() {
  return (
    <section style={section}>
      <div style={sectionHead}>
        <div>
          <p style={eyebrow}>SHOP BY GOAL</p>
          <h2 style={h2}>Find what your body needs.</h2>
        </div>
        <strong>View all products →</strong>
      </div>

      <div style={productGrid}>
        {products.map((p, i) => (
          <article key={p.title} style={{ ...premiumCard, background: p.bg }}>
            <div style={{ position: "relative", zIndex: 2 }}>
              <p style={{ ...tinyLabel, color: p.accent }}>{p.short}</p>
              <h3 style={cardTitle}>{p.title}</h3>
              <p style={cardCopy}>{p.copy}</p>
              <strong>Shop Now →</strong>
            </div>

            <div style={{ ...orb, background: p.accent, right: i % 2 === 0 ? -40 : 70 }} />
            <div style={stone} />
            <div style={{ ...productGlow, background: p.accent }} />

            <img src={p.image} alt={p.title} style={productImage} />
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section style={howSection}>
      <div>
        <p style={eyebrow}>HOW IT WORKS</p>
        <h2 style={h2}>Understanding GLP-1, beautifully simplified.</h2>
        <p style={bigCopy}>
          GLP-1 is a natural hormone produced in the gut that helps regulate
          appetite, fullness and metabolic signalling.
        </p>
      </div>

      <div style={stepsGrid}>
        {[
          ["1", "You eat", "Food enters the digestive system."],
          ["2", "GLP-1 is released", "Your gut releases GLP-1 in response to nutrients."],
          ["3", "Signals are sent", "Signals help regulate appetite and fullness."],
          ["4", "You feel satisfied", "Supporting healthier eating patterns."]
        ].map(([n, title, copy]) => (
          <div key={n} style={stepCard}>
            <div style={stepCircle}>{n}</div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section style={featureSection}>
      <div style={featureText}>
        <p style={eyebrow}>FORMULATED FOR DAILY USE</p>
        <h2 style={h2}>Premium supplement support without the complicated routine.</h2>
        <p style={bigCopy}>
          From metabolic support to digestion, longevity and hormone balance,
          Fortematic is designed to make modern wellness simple, bold and consistent.
        </p>
        <button style={blackBtn}>Explore Products →</button>
      </div>

      <div style={floatingShelf}>
        {products.map((p, i) => (
          <div key={p.title} style={{ ...miniBottle, transform: `rotate(${[-7, 5, -4, 6][i]}deg)` }}>
            <img src={p.image} alt={p.title} style={miniBottleImg} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section style={darkSection}>
      <p style={purpleEyebrow}>WHY FORTEMATIC</p>
      <h2 style={darkH2}>Clean. Tested. Designed for real life.</h2>

      <div style={benefitGrid}>
        {[
          ["Metabolic Support", "Designed to support appetite signalling and metabolic wellness."],
          ["Digestive Health", "Fiber-led support for gut health, regularity and satiety."],
          ["Cellular Energy", "Support for vitality, ageing and everyday energy."],
          ["Hormone Balance", "Targeted formulas for modern hormone metabolism needs."],
          ["Plant-Powered", "Formulas built around clean, premium ingredients."],
          ["Simple Daily Ritual", "Easy to use, easy to repeat, easy to trust."]
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
  return (
    <section style={{ ...section, background: "#fbfaf8" }}>
      <p style={eyebrow}>THE FORTEMATIC JOURNAL</p>
      <h2 style={h2}>Health content built to rank, educate and convert.</h2>

      <div style={articleGrid}>
        {[
          "What is GLP-1?",
          "Natural ways to support GLP-1",
          "Fiber supplements and fullness",
          "NAD+ and healthy ageing"
        ].map((title, i) => (
          <article key={title} style={article}>
            <div style={{ ...articleVisual, background: products[i].bg }}>
              <img src={products[i].image} alt={title} style={articleBottle} />
            </div>
            <div style={{ padding: 26 }}>
              <h3 style={{ fontSize: 24 }}>{title}</h3>
              <p style={{ color: "#777" }}>7 min read →</p>
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
      <p style={bigCopy}>Exclusive offers, product launches and science-backed health education.</p>
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
      <div style={logo}>FORTE<span style={{ color: "#b88cff" }}>MATIC</span></div>
      <p style={{ color: "#aaa", maxWidth: 520, lineHeight: 1.8 }}>
        Science-backed supplements for modern health and everyday wellness.
      </p>
      <div style={footerLinks}>
        <span>Shop</span><span>Science</span><span>Ingredients</span><span>FAQ</span><span>Contact</span>
      </div>
      <div style={{ borderTop: "1px solid #333", marginTop: 60, paddingTop: 30, color: "#666" }}>
        © 2026 Fortematic. All rights reserved.
      </div>
    </footer>
  );
}

const page: CSSProperties = { overflowX: "hidden" };

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

const logo: CSSProperties = { fontSize: 40, fontWeight: 900, letterSpacing: -2 };
const nav: CSSProperties = { display: "flex", gap: 28, fontWeight: 800, fontSize: 16 };

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
  background: "linear-gradient(90deg, rgba(255,255,255,.98) 0%, rgba(255,255,255,.9) 34%, rgba(255,255,255,.35) 58%, rgba(255,255,255,0) 100%)"
};

const heroText: CSSProperties = {
  position: "relative",
  zIndex: 2,
  marginLeft: "7vw",
  maxWidth: 660
};

const heroTitle: CSSProperties = {
  fontSize: 92,
  lineHeight: 0.92,
  letterSpacing: -5,
  margin: "28px 0 0",
  fontWeight: 900
};

const serifPurple: CSSProperties = {
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

const pill: CSSProperties = {
  display: "inline-block",
  background: "#efe4ff",
  padding: "12px 20px",
  borderRadius: 999,
  fontWeight: 900
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
  gap: 8
};

const section: CSSProperties = { padding: "100px 7vw" };
const sectionHead: CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "end" };
const eyebrow: CSSProperties = { color: "#7c3aed", fontWeight: 900, letterSpacing: 0.5 };
const purpleEyebrow: CSSProperties = { color: "#b88cff", fontWeight: 900, letterSpacing: 0.5 };

const h2: CSSProperties = {
  fontSize: 60,
  lineHeight: 1,
  letterSpacing: -3,
  maxWidth: 900,
  margin: "16px 0 0"
};

const productGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: 28,
  marginTop: 44
};

const premiumCard: CSSProperties = {
  position: "relative",
  minHeight: 500,
  borderRadius: 34,
  padding: 34,
  overflow: "hidden",
  boxShadow: "0 22px 55px rgba(0,0,0,.08)"
};

const tinyLabel: CSSProperties = { fontWeight: 900, fontSize: 13, margin: 0 };
const cardTitle: CSSProperties = { fontSize: 32, lineHeight: 1.05, margin: "12px 0" };
const cardCopy: CSSProperties = { fontSize: 17, lineHeight: 1.55, color: "#333" };

const productImage: CSSProperties = {
  position: "absolute",
  right: -5,
  bottom: -18,
  width: "78%",
  maxHeight: 310,
  objectFit: "contain",
  filter: "drop-shadow(0 24px 28px rgba(0,0,0,.22))",
  mixBlendMode: "multiply"
};

const productGlow: CSSProperties = {
  position: "absolute",
  width: 260,
  height: 260,
  borderRadius: 999,
  right: -40,
  bottom: 10,
  opacity: 0.2,
  filter: "blur(25px)"
};

const orb: CSSProperties = {
  position: "absolute",
  width: 180,
  height: 180,
  borderRadius: 999,
  bottom: 85,
  opacity: 0.12
};

const stone: CSSProperties = {
  position: "absolute",
  width: 120,
  height: 72,
  borderRadius: "50%",
  background: "rgba(255,255,255,.45)",
  left: 28,
  bottom: 32,
  transform: "rotate(-10deg)"
};

const howSection: CSSProperties = {
  padding: "100px 7vw",
  background: "#fbfaf8",
  display: "grid",
  gridTemplateColumns: "1fr 1.2fr",
  gap: 60,
  alignItems: "center"
};

const bigCopy: CSSProperties = { fontSize: 21, lineHeight: 1.7, color: "#555", maxWidth: 700 };
const stepsGrid: CSSProperties = { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 };
const stepCard: CSSProperties = { background: "#fff", border: "1px solid #eee", borderRadius: 24, padding: 24, textAlign: "center" };
const stepCircle: CSSProperties = { width: 64, height: 64, borderRadius: 999, background: "#efe4ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontWeight: 900 };

const featureSection: CSSProperties = {
  padding: "110px 7vw",
  display: "grid",
  gridTemplateColumns: "1fr 1.1fr",
  gap: 70,
  alignItems: "center"
};

const featureText: CSSProperties = { maxWidth: 720 };
const floatingShelf: CSSProperties = { position: "relative", minHeight: 520, background: "linear-gradient(135deg,#f5f0ff,#fff2df)", borderRadius: 42, display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20, padding: 40 };
const miniBottle: CSSProperties = { background: "rgba(255,255,255,.6)", borderRadius: 28, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 20px 50px rgba(0,0,0,.1)" };
const miniBottleImg: CSSProperties = { width: "68%", height: 210, objectFit: "contain", mixBlendMode: "multiply" };

const darkSection: CSSProperties = { padding: "110px 7vw", background: "#080808", color: "#fff" };
const darkH2: CSSProperties = { fontSize: 64, lineHeight: 1, maxWidth: 900, marginTop: 18 };
const benefitGrid: CSSProperties = { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 50 };
const benefitCard: CSSProperties = { background: "#111", border: "1px solid #2b2b2b", borderRadius: 28, padding: 30 };
const articleGrid: CSSProperties = { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginTop: 44 };
const article: CSSProperties = { border: "1px solid #eee", borderRadius: 28, overflow: "hidden", background: "#fff" };
const articleVisual: CSSProperties = { height: 210, display: "flex", alignItems: "center", justifyContent: "center" };
const articleBottle: CSSProperties = { height: 180, objectFit: "contain", mixBlendMode: "multiply" };

const newsletter: CSSProperties = { padding: "90px 7vw", background: "linear-gradient(135deg,#faf5ff,#fff2df)" };
const input: CSSProperties = { padding: "18px 24px", borderRadius: 999, border: "1px solid #ddd", width: 380, fontSize: 16 };
const footer: CSSProperties = { background: "#080808", color: "#fff", padding: "80px 7vw" };
const footerLinks: CSSProperties = { display: "flex", gap: 30, margin: "35px 0", color: "#ddd" };
