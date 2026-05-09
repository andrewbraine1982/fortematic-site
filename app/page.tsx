import React from "react";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#fff",
        color: "#080808"
      }}
    >
      {/* HEADER */}

      <header style={header}>
        <div style={logo}>
          FORTE<span style={{ color: "#7c3aed" }}>MATIC</span>
        </div>

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

      {/* HERO */}

      <section style={hero}>
        <div style={heroFade} />

        <div style={heroContent}>
          <div style={pill}>
            ✶ SCIENCE-BACKED. PLANT-POWERED.
          </div>

          <h1 style={h1}>
            Elevate your everyday{" "}
            <span style={italic}>health.</span>
          </h1>

          <p style={lead}>
            Premium supplements designed to support GLP-1 function,
            metabolism, energy, digestion and long-term wellbeing.
          </p>

          <div
            style={{
              display: "flex",
              gap: 18,
              marginTop: 34
            }}
          >
            <button style={blackButton}>
              Shop GLP-1 Support →
            </button>

            <button style={whiteButton}>
              Take the Quiz →
            </button>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}

      <section style={trustGrid}>
        {[
          ["Clean Formulas", "No fillers or junk"],
          ["Third-Party Tested", "Purity & potency verified"],
          ["Made in USA", "GMP certified facility"],
          ["Fast Shipping", "Tracked worldwide delivery"]
        ].map(([a, b]) => (
          <div key={a} style={trustItem}>
            <strong style={{ fontSize: 20 }}>{a}</strong>

            <p
              style={{
                color: "#666",
                marginTop: 10
              }}
            >
              {b}
            </p>
          </div>
        ))}
      </section>

      {/* PRODUCTS */}

      <section style={section}>
        <p style={eyebrow}>BESTSELLERS</p>

        <h2 style={h2}>
          Daily support for modern wellness.
        </h2>

        <div style={cards}>
          <ProductCard
            title="NAD+ Resveratrol"
            image="/2 NAD+ Resveratrol Bottle_.jpg"
            bg="#f3ebff"
          />

          <ProductCard
            title="DIM+ Hormone Support"
            image="/DIM b .jpg"
            bg="#ebfff0"
          />

          <ProductCard
            title="Fiber Supplement"
            image="/FIBER b .jpg"
            bg="#fff2e5"
          />

          <ProductCard
            title="GLP-1 Probiotic"
            image="/GLP1 b_(1).jpg"
            bg="#eaf2ff"
          />
        </div>
      </section>

      {/* SCIENCE */}

      <section style={science}>
        <div>
          <p style={eyebrowLight}>
            SCIENCE-BACKED INGREDIENTS
          </p>

          <h2 style={h2Light}>
            Designed to work with your body.
          </h2>

          <p
            style={{
              color: "#aaa",
              lineHeight: 1.8,
              fontSize: 20,
              maxWidth: 650
            }}
          >
            Fortematic formulations are built using
            clinically researched ingredients selected
            to support metabolism, digestion, hormone
            balance and healthy ageing.
          </p>
        </div>

        <div style={scienceGrid}>
          <ScienceCard
            title="Metabolism"
            text="Support healthy appetite signalling and metabolic wellness."
          />

          <ScienceCard
            title="Digestion"
            text="Daily gut support and digestive comfort."
          />

          <ScienceCard
            title="Longevity"
            text="Cellular support for energy and healthy ageing."
          />

          <ScienceCard
            title="Hormones"
            text="Targeted support for hormone metabolism."
          />
        </div>
      </section>

      {/* JOURNAL */}

      <section style={section}>
        <p style={eyebrow}>THE FORTEMATIC JOURNAL</p>

        <h2 style={h2}>
          Educational content designed to inform.
        </h2>

        <div style={cards}>
          <Article title="What is GLP-1?" />
          <Article title="Natural metabolic support" />
          <Article title="Why fiber matters" />
          <Article title="Healthy ageing explained" />
        </div>
      </section>

      {/* NEWSLETTER */}

      <section style={newsletter}>
        <div style={{ maxWidth: 760 }}>
          <p style={eyebrow}>JOIN THE COMMUNITY</p>

          <h2 style={h2}>
            Wellness insights delivered weekly.
          </h2>

          <p
            style={{
              color: "#555",
              fontSize: 22,
              lineHeight: 1.7
            }}
          >
            Exclusive offers, product launches and
            science-backed health education.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 34
            }}
          >
            <input
              placeholder="Enter your email"
              style={input}
            />

            <button style={blackButton}>
              Subscribe →
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer style={footer}>
        <div style={logo}>
          FORTE<span style={{ color: "#b88cff" }}>MATIC</span>
        </div>

        <p
          style={{
            color: "#aaa",
            marginTop: 20,
            maxWidth: 460,
            lineHeight: 1.8
          }}
        >
          Science-backed supplements for modern
          health and everyday wellness.
        </p>

        <div style={footerLinks}>
          <span>Shop</span>
          <span>Science</span>
          <span>Ingredients</span>
          <span>FAQ</span>
          <span>Contact</span>
        </div>

        <div
          style={{
            borderTop: "1px solid #333",
            marginTop: 60,
            paddingTop: 30,
            color: "#666"
          }}
        >
          © 2026 Fortematic. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

/* PRODUCT CARD */

function ProductCard({
  title,
  image,
  bg
}: {
  title: string;
  image: string;
  bg: string;
}) {
  return (
    <div
      style={{
        background: bg,
        borderRadius: 30,
        padding: 28,
        overflow: "hidden"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: 300,
          objectFit: "contain"
        }}
      />

      <h3
        style={{
          fontSize: 28,
          marginTop: 12
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#666",
          lineHeight: 1.7
        }}
      >
        Science-backed support for everyday
        wellness and performance.
      </p>

      <strong>Shop Now →</strong>
    </div>
  );
}

/* SCIENCE CARD */

function ScienceCard({
  title,
  text
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        border: "1px solid #2b2b2b",
        borderRadius: 28,
        padding: 30,
        background: "#111"
      }}
    >
      <h3
        style={{
          fontSize: 28,
          marginBottom: 12
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#aaa",
          lineHeight: 1.7
        }}
      >
        {text}
      </p>
    </div>
  );
}

/* ARTICLE */

function Article({
  title
}: {
  title: string;
}) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 26,
        overflow: "hidden"
      }}
    >
      <div
        style={{
          height: 180,
          background:
            "linear-gradient(135deg,#f3ebff,#fff2e5)"
        }}
      />

      <div style={{ padding: 24 }}>
        <h3 style={{ fontSize: 26 }}>
          {title}
        </h3>

        <p style={{ color: "#777" }}>
          7 min read
        </p>
      </div>
    </div>
  );
}

/* STYLES */

const header = {
  height: 96,
  padding: "0 60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "sticky" as const,
  top: 0,
  zIndex: 50,
  background: "#fff",
  borderBottom: "1px solid #eee"
};

const logo = {
  fontSize: 42,
  fontWeight: 900,
  letterSpacing: -2
};

const nav = {
  display: "flex",
  gap: 28,
  fontWeight: 800,
  fontSize: 16
};

const hero = {
  position: "relative" as const,
  minHeight: 760,
  backgroundImage: "url('/hero-banner.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  overflow: "hidden"
};

const heroFade = {
  position: "absolute" as const,
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(255,255,255,.97) 0%, rgba(255,255,255,.88) 34%, rgba(255,255,255,.2) 62%, rgba(255,255,255,0) 100%)"
};

const heroContent = {
  position: "relative" as const,
  zIndex: 2,
  maxWidth: 700,
  marginLeft: "7vw"
};

const pill = {
  display: "inline-block",
  background: "#efe4ff",
  padding: "12px 20px",
  borderRadius: 999,
  fontWeight: 900
};

const h1 = {
  fontSize: 92,
  lineHeight: 0.92,
  letterSpacing: -5,
  marginTop: 24,
  marginBottom: 0,
  fontWeight: 900
};

const italic = {
  color: "#7c3aed",
  fontFamily: "Georgia, serif",
  fontStyle: "italic",
  fontWeight: 400
};

const lead = {
  fontSize: 24,
  lineHeight: 1.6,
  color: "#333",
  marginTop: 30,
  maxWidth: 620
};

const blackButton = {
  background: "#080808",
  color: "#fff",
  border: "none",
  borderRadius: 999,
  padding: "18px 30px",
  fontWeight: 900,
  fontSize: 16
};

const whiteButton = {
  background: "#fff",
  color: "#080808",
  border: "1px solid #111",
  borderRadius: 999,
  padding: "18px 30px",
  fontWeight: 900,
  fontSize: 16
};

const smallButton = {
  ...blackButton,
  padding: "14px 24px"
};

const trustGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)"
};

const trustItem = {
  padding: 34,
  borderRight: "1px solid #eee",
  borderBottom: "1px solid #eee"
};

const section = {
  padding: "110px 7vw"
};

const eyebrow = {
  color: "#7c3aed",
  fontWeight: 900
};

const h2 = {
  fontSize: 60,
  lineHeight: 1,
  letterSpacing: -3,
  maxWidth: 850,
  marginTop: 18
};

const cards = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: 24,
  marginTop: 44
};

const science = {
  padding: "110px 7vw",
  background: "#080808",
  color: "#fff",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 60
};

const eyebrowLight = {
  color: "#b88cff",
  fontWeight: 900
};

const h2Light = {
  fontSize: 58,
  lineHeight: 1,
  marginTop: 20
};

const scienceGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 24
};

const newsletter = {
  padding: "110px 7vw",
  background:
    "linear-gradient(135deg,#faf5ff,#fff2e5)"
};

const input = {
  padding: "18px 24px",
  borderRadius: 999,
  border: "1px solid #ddd",
  width: 360,
  fontSize: 16
};

const footer = {
  background: "#080808",
  color: "#fff",
  padding: "90px 7vw"
};

const footerLinks = {
  display: "flex",
  gap: 30,
  marginTop: 40,
  color: "#ddd"
};
