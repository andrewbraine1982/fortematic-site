import React from "react";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#0b0b0b", background: "#fff" }}>
      <div style={{ background: "#080808", color: "#fff", padding: "14px 40px", display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 14 }}>
        <span>SUBSCRIBE & SAVE 15%</span>
        <span>FREE SHIPPING ON ORDERS OVER €50</span>
        <span>SCIENCE-BACKED. PLANT-POWERED.</span>
        <span>30-DAY MONEY BACK GUARANTEE</span>
      </div>

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

        <div style={{ display: "flex", gap: 24, fontSize: 24 }}>
          ⌕ ♙ 🛍
        </div>
      </nav>

      <section
        style={{
          padding: "90px 7vw",
          background: "linear-gradient(120deg,#fff 0%,#f7fbff 50%,#f7f2ff 100%)"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            alignItems: "center",
            gap: 70
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                background: "#f0e8ff",
                padding: "10px 18px",
                borderRadius: 999,
                fontWeight: 900,
                fontSize: 13,
                marginBottom: 30
              }}
            >
              ✶ SCIENCE-BACKED. PLANT-POWERED.
            </div>

            <h1
              style={{
                fontSize: 92,
                lineHeight: 0.92,
                letterSpacing: -5,
                margin: 0,
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
                fontSize: 24,
                lineHeight: 1.6,
                color: "#444",
                maxWidth: 620,
                marginTop: 34
              }}
            >
              Premium supplements designed to support GLP-1 function,
              metabolism, energy, digestion and long-term well-being.
            </p>

            <div style={{ display: "flex", gap: 18, marginTop: 36 }}>
              <button style={btnBlack}>Shop GLP-1 Support →</button>
              <button style={btnWhite}>Take the Quiz →</button>
            </div>

            <div
              style={{
                marginTop: 28,
                fontWeight: 800,
                textDecoration: "underline"
              }}
            >
              Explore the Science →
            </div>
          </div>

          <div>
            <img
              src="/hero-banner.png"
              alt="Fortematic Supplements"
              style={{
                width: "100%",
                borderRadius: 28,
                objectFit: "cover",
                boxShadow: "0 25px 60px rgba(0,0,0,.12)"
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

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
  background: "transparent",
  color: "#080808",
  border: "1px solid #080808",
  borderRadius: 999,
  padding: "18px 32px",
  fontWeight: 900,
  cursor: "pointer"
};
