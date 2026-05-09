import React from "react";

const products = [
  {
    name: "GLP-1 Support",
    desc: "Support healthy appetite signalling and metabolic function.",
    bg: "#e9f1ff",
    color: "#1463ff"
  },
  {
    name: "Digestive Health",
    desc: "Daily fiber for gut health, regularity and lasting fullness.",
    bg: "#fff0dc",
    color: "#f28a00"
  },
  {
    name: "Energy & Longevity",
    desc: "Cellular energy, vitality and healthy ageing support.",
    bg: "#f1e6ff",
    color: "#7c3aed"
  },
  {
    name: "Hormone Balance",
    desc: "Targeted support for healthy hormone metabolism.",
    bg: "#e6f6e9",
    color: "#159447"
  }
];

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#111",
        background: "#fff"
      }}
    >
      <TopBar />
      <Header />
      <Hero />
      <TrustBar />
      <Products />
      <Science />
      <Newsletter />
      <Footer />
    </main>
  );
}

function TopBar() {
  return (
    <div
      style={{
        background: "#080808",
        color: "#fff",
        padding: "14px 40px",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 13,
        letterSpacing: 1,
        fontWeight: 700
      }}
    >
      <span>SUBSCRIBE & SAVE 15%</span>
      <span>FREE SHIPPING ON ORDERS OVER €50</span>
      <span>SCIENCE-BACKED. PLANT-POWERED.</span>
      <span>30-DAY MONEY BACK GUARANTEE</span>
    </div>
  );
}

function Header() {
  return (
    <header
      style={{
        padding: "28px 7vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        zIndex: 10,
        color: "#111"
      }}
    >
      <div style={{ fontSize: 34, fontWeight: 900 }}>FORTE<span style={{ color: "#7c3aed" }}>MATIC</span></div>

      <nav style={{ display: "flex", gap: 34, fontWeight: 700 }}>
        <span>Shop</span>
        <span>Science</span>
        <span>About</span>
        <span>Reviews</span>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: 850,
        backgroundImage: "url('/hero-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        padding: "90px 7vw"
      }}
    >
      <div
        style={{
          maxWidth: 700,
          background: "rgba(255,255,255,0.84)",
          backdropFilter: "blur(10px)",
          borderRadius: 38,
          padding: "58px 60px",
          boxShadow: "0 30px 80px rgba(0,0,0,.15)"
        }}
      >
        <div style={pill}>✶ SCIENCE-BACKED. PLANT-POWERED.</div>

        <h1
          style={{
            fontSize: 88,
            lineHeight: 0.92,
            letterSpacing: -5,
            margin: "24px 0 0",
            fontWeight: 900
          }}
        >
          Elevate your everyday{" "}
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              color: "#7c3aed",
              fontWeight: 400
            }}
          >
            health.
          </span>
        </h1>

        <p
          style={{
            fontSize: 26,
            lineHeight: 1.5,
            color: "#333",
            marginTop: 32,
            maxWidth: 600
          }}
        >
          Premium supplements designed to support GLP-1 function,
          metabolism, energy, digestion and long-term wellbeing.
        </p>

        <div style={{ display: "flex", gap: 18, marginTop: 36 }}>
          <button style={btnBlack}>Shop GLP-1 Support →</button>
          <button style={btnWhite}>Take the Quiz →</button>
        </div>

        <div
          style={{
            marginTop: 30,
            fontWeight: 800,
            textDecoration: "underline",
            fontSize: 18
          }}
        >
          Explore the Science →
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        borderTop: "1px solid #eee",
        borderBottom: "1px solid #eee",
        background: "#fff"
      }}
    >
      {[
        ["Clean & Safe", "No fillers. No junk."],
        ["Third-party Tested", "For purity & potency."],
        ["Made in USA", "GMP Certified Facility"],
        ["Fast Shipping", "Tracked global delivery"]
      ].map(([a, b]) => (
        <div
          key={a}
          style={{
            padding: 34,
            borderRight: "1px solid #eee"
          }}
        >
          <strong style={{ fontSize: 18 }}>{a}</strong>
          <div style={{ marginTop: 8, color: "#666" }}>{b}</div>
        </div>
      ))}
    </section>
  );
}

function Products() {
  return (
    <section style={{ padding: "110px 7vw" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          marginBottom: 50
        }}
      >
        <div>
          <div style={pill}>BESTSELLERS</div>

          <h2
            style={{
              fontSize: 64,
              lineHeight: 1,
              marginTop: 24,
              marginBottom: 0
            }}
          >
            Daily support for{" "}
            <span
              style={{
                color: "#7c3aed",
                fontFamily: "Georgia, serif",
                fontStyle: "italic"
              }}
            >
              modern wellness.
            </span>
          </h2>
        </div>

        <button style={btnWhite}>View All →</button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 24
        }}
      >
        {products.map((p) => (
          <div
            key={p.name}
            style={{
              background: p.bg,
              borderRadius: 30,
              padding: 34,
              minHeight: 340
            }}
          >
            <div
              style={{
                width: 82,
                height: 82,
                borderRadius: 24,
                background: p.color,
                marginBottom: 26
              }}
            />

            <h3 style={{ fontSize: 30, marginBottom: 14 }}>{p.name}</h3>

            <p style={{ color: "#555", lineHeight: 1.7 }}>{p.desc}</p>

            <div
              style={{
                marginTop: 30,
                fontWeight: 800
              }}
            >
              Shop Now →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Science() {
  return (
    <section
      style={{
        padding: "120px 7vw",
        background: "#080808",
        color: "#fff"
      }}
    >
      <div style={pillDark}>FORMULATED WITH SCIENCE</div>

      <h2
        style={{
          fontSize: 72,
          lineHeight: 1,
          marginTop: 26,
          maxWidth: 900
        }}
      >
        Ingredients designed to work{" "}
        <span
          style={{
            color: "#b88cff",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400
          }}
        >
          with your body.
        </span>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 30,
          marginTop: 70
        }}
      >
        {[
          "Psyllium Husk",
          "Berberine",
          "Resveratrol"
        ].map((x) => (
          <div
            key={x}
            style={{
              border: "1px solid #333",
              borderRadius: 28,
              padding: 34,
              background: "#111"
            }}
          >
            <h3 style={{ fontSize: 30 }}>{x}</h3>

            <p style={{ color: "#aaa", lineHeight: 1.8 }}>
              Clinically researched ingredients selected to support metabolism,
              digestive health and cellular wellbeing.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section
      style={{
        padding: "120px 7vw",
        textAlign: "center"
      }}
    >
      <div style={pill}>JOIN THE COMMUNITY</div>

      <h2
        style={{
          fontSize: 70,
          lineHeight: 1,
          marginTop: 24
        }}
      >
        Wellness insights delivered{" "}
        <span
          style={{
            color: "#7c3aed",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400
          }}
        >
          weekly.
        </span>
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          marginTop: 40
        }}
      >
        <input
          placeholder="Enter your email"
          style={{
            width: 420,
            padding: "22px 24px",
            borderRadius: 999,
            border: "1px solid #ddd",
            fontSize: 18
          }}
        />

        <button style={btnBlack}>Subscribe →</button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        color: "#fff",
        padding: "90px 7vw"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 40
        }}
      >
        <div>
          <div style={{ fontSize: 38, fontWeight: 900 }}>
            FORTE<span style={{ color: "#b88cff" }}>MATIC</span>
          </div>

          <p
            style={{
              color: "#aaa",
              lineHeight: 1.8,
              marginTop: 20,
              maxWidth: 420
            }}
          >
            Science-backed supplements for modern health and everyday wellness.
          </p>
        </div>

        <FooterCol
          title="SHOP"
          items={["GLP-1 Support", "Digestive Health", "Energy", "Hormone"]}
        />

        <FooterCol
          title="LEARN"
          items={["Science", "Ingredients", "FAQ", "Contact"]}
        />

        <FooterCol
          title="ABOUT"
          items={["Our Story", "Quality", "Sustainability", "Reviews"]}
        />
      </div>

      <div
        style={{
          borderTop: "1px solid #333",
          marginTop: 70,
          paddingTop: 26,
          color: "#777"
        }}
      >
        © 2026 Fortematic. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h4 style={{ color: "#777" }}>{title}</h4>

      {items.map((x) => (
        <p key={x}>{x}</p>
      ))}
    </div>
  );
}

const btnBlack = {
  background: "#080808",
  color: "#fff",
  border: "none",
  borderRadius: 999,
  padding: "20px 34px",
  fontWeight: 800,
  fontSize: 17,
  cursor: "pointer"
};

const btnWhite = {
  background: "#fff",
  color: "#080808",
  border: "1px solid #111",
  borderRadius: 999,
  padding: "20px 34px",
  fontWeight: 800,
  fontSize: 17,
  cursor: "pointer"
};

const pill = {
  display: "inline-block",
  background: "#efe4ff",
  color: "#111",
  padding: "12px 20px",
  borderRadius: 999,
  fontSize: 13,
  fontWeight: 800,
  letterSpacing: 0.5
};

const pillDark = {
  display: "inline-block",
  background: "#1a1a1a",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: 999,
  fontSize: 13,
  fontWeight: 800,
  letterSpacing: 0.5
};
