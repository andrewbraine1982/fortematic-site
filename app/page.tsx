import React from "react";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#0b0b0b", background: "#fff" }}>
      <TopBar />
      <Nav />
      <Hero />
      <TrustBar />
      <ShopByGoal />
      <GLPSection />
      <Journal />
      <WhyFortematic />
      <Newsletter />
      <FooterSection />
    </main>
  );
}

function TopBar() {
  return (
    <div style={{ background: "#080808", color: "#fff", padding: "14px 40px", display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 14 }}>
      <span>SUBSCRIBE & SAVE 15%</span>
      <span>FREE SHIPPING ON ORDERS OVER €50</span>
      <span>SCIENCE-BACKED. PLANT-POWERED.</span>
      <span>30-DAY MONEY BACK GUARANTEE</span>
    </div>
  );
}

function Nav() {
  return (
    <nav style={{ height: 86, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 52px", borderBottom: "1px solid #eee", background: "#fff" }}>
      <div style={{ fontSize: 38, fontWeight: 900, letterSpacing: -2 }}>Fortematic®</div>
      <div style={{ display: "flex", gap: 42, fontWeight: 700 }}>
        <span>Shop All⌄</span>
        <span>Science⌄</span>
        <span>GLP-1 Support⌄</span>
        <span>Health Goals⌄</span>
        <span>About⌄</span>
        <span>Learn⌄</span>
      </div>
      <div style={{ display: "flex", gap: 24, fontSize: 24 }}>⌕ ♙ 🛍</div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: 760,
        backgroundImage: "url('/hero-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        padding: "90px 7vw"
      }}
    >
      <div style={{ maxWidth: 690 }}>
        <div style={pill}>✶ SCIENCE-BACKED. PLANT-POWERED.</div>

        <h1 style={{ fontSize: 92, lineHeight: 0.92, letterSpacing: -5, margin: 0, fontWeight: 900 }}>
          Elevate your everyday{" "}
          <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: "#7c3aed", fontWeight: 400 }}>
            health.
          </span>
        </h1>

        <p style={{ fontSize: 24, lineHeight: 1.55, color: "#333", maxWidth: 620, marginTop: 34 }}>
          Premium supplements designed to support GLP-1 function, metabolism, energy, digestion and long-term well-being.
        </p>

        <div style={{ display: "flex", gap: 18, marginTop: 36 }}>
          <button style={btnBlack}>Shop GLP-1 Support →</button>
          <button style={btnWhite}>Take the Quiz →</button>
        </div>

        <div style={{ marginTop: 28, fontWeight: 800, textDecoration: "underline" }}>
          Explore the Science →
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section style={{ padding: "40px 7vw" }}>
      <div style={{ background: "#fff", border: "1px solid #e7e7e7", borderRadius: 18, boxShadow: "0 18px 45px rgba(0,0,0,.08)", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        <Trust title="Clean & Safe" copy="No fillers. No junk." />
        <Trust title="Third-party Tested" copy="For purity & potency." />
        <Trust title="Made in USA" copy="GMP Certified Facility" />
        <Trust title="20,000+" copy="Happy Customers" />
      </div>
    </section>
  );
}

function Trust({ title, copy }: { title: string; copy: string }) {
  return (
    <div style={{ padding: 32, borderRight: "1px solid #eee" }}>
      <strong>{title}</strong>
      <br />
      <span style={{ color: "#666" }}>{copy}</span>
    </div>
  );
}

function ShopByGoal() {
  return (
    <section style={{ padding: "70px 7vw" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 30 }}>
        <div>
          <div style={eyebrow}>✶ SHOP BY GOAL</div>
          <h2 style={h2}>Find what <em>your</em> body needs.</h2>
        </div>
        <strong>View all products →</strong>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
        <ProductCard title="GLP-1 Support" copy="Support healthy appetite signalling and metabolic function." bg="#e9f1ff" color="#1463ff" />
        <ProductCard title="Digestive Health" copy="Daily fiber for gut health, regularity and lasting fullness." bg="#fff0dc" color="#f28a00" />
        <ProductCard title="Energy & Longevity" copy="Cellular energy, vitality and healthy ageing support." bg="#f1e6ff" color="#7c3aed" />
        <ProductCard title="Hormone Balance" copy="Targeted support for healthy hormone metabolism." bg="#e6f6e9" color="#159447" />
      </div>
    </section>
  );
}

function ProductCard({ title, copy, bg, color }: { title: string; copy: string; bg: string; color: string }) {
  return (
    <div style={{ background: bg, borderRadius: 16, padding: 28, minHeight: 330 }}>
      <h3 style={{ fontSize: 24, margin: 0 }}>{title}</h3>
      <p style={{ color: "#333", lineHeight: 1.5 }}>{copy}</p>
      <div style={{ height: 160, borderRadius: 18, background: "#fff", marginTop: 22, display: "flex", alignItems: "center", justifyContent: "center", color, fontSize: 30, fontWeight: 900 }}>
        {title}
      </div>
      <p style={{ fontWeight: 900 }}>Shop Now →</p>
    </div>
  );
}

function GLPSection() {
  return (
    <section style={{ padding: "90px 7vw", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 60, alignItems: "center" }}>
      <div>
        <div style={eyebrow}>✶ HOW IT WORKS</div>
        <h2 style={h2}>Understanding GLP-1<br /><em>the body’s appetite regulator.</em></h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: "#444" }}>
          GLP-1 is a natural hormone your body produces to help regulate appetite, food intake and metabolism. Fortematic GLP-1 Support is designed to support healthy metabolic function.
        </p>
        <strong style={{ textDecoration: "underline" }}>Learn more about GLP-1 →</strong>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22 }}>
        <Step number="1" title="You eat" copy="Food enters your stomach." />
        <Step number="2" title="GLP-1 is released" copy="Your gut releases GLP-1 in response to food." />
        <Step number="3" title="Signals are sent" copy="Signals help regulate appetite." />
        <Step number="4" title="You feel full" copy="Helping you feel satisfied longer." />
      </div>
    </section>
  );
}

function Step({ number, title, copy }: { number: string; title: string; copy: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ width: 64, height: 64, borderRadius: 999, border: "1px solid #ccc", margin: "0 auto 18px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 22 }}>
        {number}
      </div>
      <strong>{title}</strong>
      <p style={{ fontSize: 14, color: "#666", lineHeight: 1.4 }}>{copy}</p>
    </div>
  );
}

function Journal() {
  const posts = [
    "What is GLP-1? The Hormone Behind Appetite & Metabolism",
    "8 Ways to Support Healthy GLP-1 Levels Naturally",
    "Fiber for Fullness: How It Supports Weight Management",
    "NAD+ & Healthy Aging: What Science Says"
  ];

  return (
    <section style={{ padding: "80px 7vw", background: "#faf9f6" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 30 }}>
        <div>
          <div style={eyebrow}>✶ THE FORTEMATIC JOURNAL</div>
          <h2 style={h2}>Science-backed insights. <em>Real results.</em></h2>
        </div>
        <strong>View all articles →</strong>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 28 }}>
        {posts.map((title, i) => (
          <article key={title} style={{ background: "#fff", border: "1px solid #eee", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ height: 150, background: ["#dbeafe", "#ffedd5", "#f3e8ff", "#dcfce7"][i] }} />
            <div style={{ padding: 24 }}>
              <h3 style={{ fontSize: 20, lineHeight: 1.25 }}>{title}</h3>
              <p style={{ color: "#777" }}>May 2024 · 7 min read</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyFortematic() {
  return (
    <section style={{ padding: "70px 7vw" }}>
      <div style={eyebrow}>✶ WHY FORTEMATIC</div>
      <h2 style={h2}>Real support <em>for real life.</em></h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 30, marginTop: 35 }}>
        {["Plant-Powered Formulas", "Clinically Informed", "Targeted Solutions", "Sustainable Wellness"].map((title) => (
          <div key={title}>
            <h3>{title}</h3>
            <p style={{ color: "#666", lineHeight: 1.6 }}>Clean, effective support for modern health challenges.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section style={{ padding: "60px 7vw", background: "linear-gradient(90deg,#faf5ff,#fff7ed)" }}>
      <h2 style={{ fontSize: 42, margin: 0 }}>Join the Fortematic family.</h2>
      <p style={{ color: "#555", fontSize: 18 }}>Get exclusive offers, product launches and wellness tips.</p>
      <div style={{ display: "flex", gap: 16, maxWidth: 700 }}>
        <input placeholder="Your email address" style={{ flex: 1, padding: "18px 24px", borderRadius: 999, border: "1px solid #ddd" }} />
        <button style={btnBlack}>Sign up</button>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer style={{ background: "#080808", color: "#fff", padding: "80px 7vw" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1.5fr", gap: 50 }}>
        <div>
          <h2 style={{ fontSize: 38 }}>Fortematic®</h2>
          <p style={{ color: "#aaa", lineHeight: 1.7 }}>Science-backed supplements for modern health and everyday wellness.</p>
        </div>
        <Footer title="SHOP" items={["All Products", "GLP-1 Support", "Digestive Health", "Energy & Longevity", "Hormone Balance"]} />
        <Footer title="LEARN" items={["Science", "Journal", "Ingredients", "FAQ", "Contact"]} />
        <Footer title="ABOUT" items={["Our Story", "Quality Standards", "Sustainability", "Affiliate Program"]} />
        <Footer title="TRUST" items={["Made in USA", "Third-party Tested", "30-Day Guarantee"]} />
      </div>

      <div style={{ borderTop: "1px solid #333", marginTop: 60, paddingTop: 30, color: "#888" }}>
        🇪🇺 EU · © 2024 Fortematic®. All rights reserved.
      </div>
    </footer>
  );
}

function Footer({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 style={{ color: "#777" }}>{title}</h4>
      {items.map((item) => (
        <p key={item} style={{ color: "#ddd" }}>{item}</p>
      ))}
    </div>
  );
}

const pill = {
  display: "inline-block",
  background: "#f0e8ff",
  padding: "10px 18px",
  borderRadius: 999,
  fontWeight: 900,
  fontSize: 13,
  marginBottom: 30
};

const btnBlack = {
  background: "#080808",
  color: "#fff",
  border: "none",
  borderRadius: 999,
  padding: "18px 32px",
  fontWeight: 900,
  cursor: "pointer"
};

const btnWhite = {
  background: "rgba(255,255,255,.75)",
  color: "#080808",
  border: "1px solid #080808",
  borderRadius: 999,
  padding: "18px 32px",
  fontWeight: 900,
  cursor: "pointer"
};

const eyebrow = {
  fontSize: 13,
  fontWeight: 900,
  letterSpacing: 1,
  marginBottom: 14
};

const h2 = {
  fontSize: 42,
  lineHeight: 1.1,
  letterSpacing: -2,
  margin: 0,
  fontWeight: 900
};
