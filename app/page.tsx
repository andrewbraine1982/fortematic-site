import React from "react";

const products = [
  {
    title: "GLP-1 Support",
    subtitle: "Support fullness, cravings & healthy metabolism.",
    image: "/GLP1.PNG",
    bg: "linear-gradient(135deg,#eaf3ff,#cfe2ff)",
    accent: "#1463ff"
  },
  {
    title: "Digestive Health",
    subtitle: "Daily fiber for regularity, gut health & lasting fullness.",
    image: "/FIBER.PNG",
    bg: "linear-gradient(135deg,#fff2df,#ffd39b)",
    accent: "#f28a00"
  },
  {
    title: "Energy & Longevity",
    subtitle: "Cellular energy, healthy ageing & daily vitality.",
    image: "/NAD.PNG",
    bg: "linear-gradient(135deg,#f5eaff,#d9b9ff)",
    accent: "#7c3aed"
  },
  {
    title: "Hormone Balance",
    subtitle: "Supports healthy hormone metabolism & balance.",
    image: "/DIM.PNG",
    bg: "linear-gradient(135deg,#eaffef,#c7f0cf)",
    accent: "#159447"
  }
];

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#fff", color: "#080808" }}>
      <Header />
      <Hero />
      <TrustBar />
      <Products />
      <Science />
      <Benefits />
      <Journal />
      <Newsletter />
      <Footer />
    </main>
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
      <button style={smallButton}>Shop Now</button>
    </header>
  );
}

function Hero() {
  return (
    <section style={hero}>
      <div style={heroFade} />
      <div style={heroContent}>
        <div style={pill}>✶ SCIENCE-BACKED. PLANT-POWERED.</div>
        <h1 style={h1}>
          Elevate your everyday <span style={italic}>health.</span>
        </h1>
        <p style={lead}>
          Premium supplements designed to support GLP-1 function, metabolism,
          energy, digestion and long-term wellbeing.
        </p>
        <div style={{ display: "flex", gap: 18, marginTop: 34 }}>
          <button style={blackButton}>Shop GLP-1 Support →</button>
          <button style={whiteButton}>Take the Quiz →</button>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section style={trustGrid}>
      {[
        ["Clean Formulas", "No fillers or junk"],
        ["Third-Party Tested", "Purity & potency verified"],
        ["Made in USA", "GMP certified facility"],
        ["Fast Shipping", "Tracked worldwide delivery"]
      ].map(([a, b]) => (
        <div key={a} style={trustItem}>
          <strong style={{ fontSize: 20 }}>{a}</strong>
          <p style={{ color: "#666", marginTop: 10 }}>{b}</p>
        </div>
      ))}
    </section>
  );
}

function Products() {
  return (
    <section style={section}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}>
        <div>
          <p style={eyebrow}>SHOP BY GOAL</p>
          <h2 style={h2}>Find what your body needs.</h2>
        </div>
        <strong>View all products →</strong>
      </div>

      <div style={productGrid}>
        {products.map((p) => (
          <div key={p.title} style={{ ...productCard, background: p.bg }}>
            <div>
              <h3 style={{ fontSize: 24, margin: 0 }}>{p.title}</h3>
              <p style={{ color: "#333", lineHeight: 1.5, maxWidth: 230 }}>{p.subtitle}</p>
              <strong>Shop Now →</strong>
            </div>

            <div style={productImageWrap}>
              <div style={{ ...glow, background: p.accent }} />
              <img src={p.image} alt={p.title} style={productImage} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Science() {
  return (
    <section style={science}>
      <div>
        <p style={eyebrowLight}>HOW IT WORKS</p>
        <h2 style={h2Light}>Understanding GLP-1, beautifully simplified.</h2>
        <p style={{ color: "#aaa", fontSize: 20, lineHeight: 1.7 }}>
          GLP-1 is a natural hormone your body produces to help regulate appetite,
          food intake and metabolism.
        </p>
      </div>

      <div style={steps}>
        {[
          ["1", "You eat"],
          ["2", "GLP-1 is released"],
          ["3", "Signals are sent"],
          ["4", "You feel full"]
        ].map(([n, t]) => (
          <div key={n} style={step}>
            <div style={circle}>{n}</div>
            <strong>{t}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section style={section}>
      <p style={eyebrow}>WHY FORTEMATIC</p>
      <h2 style={h2}>Premium formulas. Everyday simplicity.</h2>

      <div style={benefitGrid}>
        {[
          ["Metabolic Support", "Designed to support appetite signalling and metabolic wellness."],
          ["Gut Health", "Daily digestive support with clean, targeted ingredients."],
          ["Energy & Ageing", "Support cellular vitality and long-term wellbeing."],
          ["Hormone Balance", "Formulas designed for modern hormonal health needs."]
        ].map(([title, text]) => (
          <div key={title} style={benefitCard}>
            <h3>{title}</h3>
            <p style={{ color: "#666", lineHeight: 1.7 }}>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section style={{ ...section, background: "#faf9f6" }}>
      <p style={eyebrow}>THE FORTEMATIC JOURNAL</p>
      <h2 style={h2}>Health content built to rank and educate.</h2>

      <div style={productGrid}>
        {[
          "What is GLP-1?",
          "Natural ways to support GLP-1",
          "Fiber supplements and fullness",
          "NAD+ and healthy ageing"
        ].map((title) => (
          <article key={title} style={article}>
            <div style={{ height: 170, background: "linear-gradient(135deg,#efe4ff,#fff2df)" }} />
            <div style={{ padding: 24 }}>
              <h3>{title}</h3>
              <p style={{ color: "#777" }}>7 min read</p>
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
      <h2 style={h2}>Join the Fortematic family.</h2>
      <p style={{ fontSize: 20, color: "#555" }}>
        Exclusive offers, product launches and science-backed health education.
      </p>
      <div style={{ display: "flex", gap: 14, marginTop: 28 }}>
        <input placeholder="Your email address" style={input} />
        <button style={blackButton}>Sign up →</button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={footer}>
      <div style={logo}>FORTE<span style={{ color: "#b88cff" }}>MATIC</span></div>
      <p style={{ color: "#aaa", marginTop: 20, maxWidth: 500, lineHeight: 1.8 }}>
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

const header = { height: 96, padding: "0 60px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", position: "sticky" as const, top: 0, zIndex: 50, borderBottom: "1px solid #eee" };
const logo = { fontSize: 42, fontWeight: 900, letterSpacing: -2 };
const nav = { display: "flex", gap: 28, fontWeight: 800, fontSize: 16 };
const hero = { position: "relative" as const, minHeight: 760, backgroundImage: "url('/hero-banner.png')", backgroundSize: "cover", backgroundPosition: "center right", display: "flex", alignItems: "center", overflow: "hidden" };
const heroFade = { position: "absolute" as const, inset: 0, background: "linear-gradient(90deg, rgba(255,255,255,.98) 0%, rgba(255,255,255,.88) 34%, rgba(255,255,255,.2) 62%, rgba(255,255,255,0) 100%)" };
const heroContent = { position: "relative" as const, zIndex: 2, maxWidth: 650, marginLeft: "7vw" };
const h1 = { fontSize: 86, lineHeight: 0.92, letterSpacing: -5, margin: "28px 0 0", fontWeight: 900 };
const italic = { fontFamily: "Georgia, serif", fontStyle: "italic", color: "#7c3aed", fontWeight: 400 };
const lead = { fontSize: 24, lineHeight: 1.55, color: "#333", marginTop: 28 };
const pill = { display: "inline-block", background: "#efe4ff", padding: "12px 20px", borderRadius: 999, fontWeight: 900 };
const blackButton = { background: "#080808", color: "#fff", border: "none", borderRadius: 999, padding: "18px 30px", fontWeight: 900, fontSize: 16 };
const whiteButton = { background: "#fff", color: "#080808", border: "1px solid #111", borderRadius: 999, padding: "18px 30px", fontWeight: 900, fontSize: 16 };
const smallButton = { ...blackButton, padding: "13px 24px" };
const trustGrid = { display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" };
const trustItem = { padding: 34, borderRight: "1px solid #eee" };
const section = { padding: "95px 7vw" };
const eyebrow = { color: "#7c3aed", fontWeight: 900 };
const h2 = { fontSize: 58, lineHeight: 1, letterSpacing: -3, maxWidth: 850 };
const productGrid = { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginTop: 44 };
const productCard = { position: "relative" as const, borderRadius: 18, minHeight: 310, padding: 28, overflow: "hidden", display: "flex", flexDirection: "column" as const, justifyContent: "space-between" };
const productImageWrap = { position: "relative" as const, height: 210, display: "flex", alignItems: "center", justifyContent: "center" };
const productImage = { position: "relative" as const, zIndex: 2, maxHeight: 210, maxWidth: "90%", objectFit: "contain" as const, filter: "drop-shadow(0 18px 22px rgba(0,0,0,.18))" };
const glow = { position: "absolute" as const, width: 120, height: 120, borderRadius: 999, opacity: 0.18, filter: "blur(18px)" };
const science = { padding: "100px 7vw", background: "#080808", color: "#fff", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 };
const eyebrowLight = { color: "#b88cff", fontWeight: 900 };
const h2Light = { fontSize: 56, lineHeight: 1 };
const steps = { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, alignItems: "center" };
const step = { textAlign: "center" as const };
const circle = { width: 66, height: 66, borderRadius: 999, border: "1px solid #555", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", fontWeight: 900 };
const benefitGrid = { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginTop: 40 };
const benefitCard = { border: "1px solid #eee", borderRadius: 24, padding: 28 };
const article = { border: "1px solid #eee", borderRadius: 24, overflow: "hidden", background: "#fff" };
const newsletter = { padding: "80px 7vw", background: "linear-gradient(90deg,#faf5ff,#fff7ed)" };
const input = { padding: "18px 24px", borderRadius: 999, border: "1px solid #ddd", width: 380, fontSize: 16 };
const footer = { background: "#080808", color: "#fff", padding: "80px 7vw" };
const footerLinks = { display: "flex", gap: 30, margin: "35px 0", color: "#ddd" };
