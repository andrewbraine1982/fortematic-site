import React from "react";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#fff",
        color: "#111"
      }}
    >
      {/* HEADER */}

      <header
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 20,
          padding: "34px 70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div
          style={{
            fontSize: 58,
            fontWeight: 900,
            letterSpacing: -3
          }}
        >
          FORTE
          <span style={{ color: "#7c3aed" }}>MATIC</span>
        </div>

        <nav
          style={{
            display: "flex",
            gap: 40,
            fontWeight: 700,
            fontSize: 20
          }}
        >
          <span>Shop</span>
          <span>Science</span>
          <span>About</span>
        </nav>
      </header>

      {/* HERO */}

      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 900,
          backgroundImage: "url('/hero-banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden"
        }}
      >
        {/* DARK GRADIENT */}

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(255,255,255,.92) 0%, rgba(255,255,255,.70) 35%, rgba(255,255,255,0) 65%)"
          }}
        />

        {/* CONTENT */}

        <div
          style={{
            position: "relative",
            zIndex: 5,
            maxWidth: 760,
            paddingLeft: "80px",
            paddingTop: "240px"
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#efe4ff",
              padding: "14px 22px",
              borderRadius: 999,
              fontWeight: 800,
              fontSize: 16
            }}
          >
            ✶ SCIENCE-BACKED. PLANT-POWERED.
          </div>

          <h1
            style={{
              fontSize: 120,
              lineHeight: 0.9,
              marginTop: 30,
              marginBottom: 20,
              fontWeight: 900,
              letterSpacing: -6
            }}
          >
            Elevate your everyday{" "}
            <span
              style={{
                color: "#7c3aed",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400
              }}
            >
              health.
            </span>
          </h1>

          <p
            style={{
              fontSize: 34,
              lineHeight: 1.45,
              color: "#333",
              maxWidth: 650
            }}
          >
            Premium supplements designed to support GLP-1 function,
            metabolism, energy, digestion and long-term wellbeing.
          </p>

          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 50
            }}
          >
            <button
              style={{
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: 999,
                padding: "22px 40px",
                fontSize: 20,
                fontWeight: 800,
                cursor: "pointer"
              }}
            >
              Shop GLP-1 Support →
            </button>

            <button
              style={{
                background: "rgba(255,255,255,.8)",
                color: "#111",
                border: "1px solid #111",
                borderRadius: 999,
                padding: "22px 40px",
                fontSize: 20,
                fontWeight: 800,
                cursor: "pointer"
              }}
            >
              Take the Quiz →
            </button>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          borderTop: "1px solid #eee",
          borderBottom: "1px solid #eee"
        }}
      >
        {[
          ["Clean Formulas", "No fillers or junk"],
          ["Third-Party Tested", "Purity & potency verified"],
          ["Made in USA", "GMP certified facility"],
          ["Fast Shipping", "Tracked worldwide delivery"]
        ].map(([title, text]) => (
          <div
            key={title}
            style={{
              padding: "38px",
              borderRight: "1px solid #eee"
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: 22,
                marginBottom: 8
              }}
            >
              {title}
            </div>

            <div
              style={{
                color: "#666",
                fontSize: 17
              }}
            >
              {text}
            </div>
          </div>
        ))}
      </section>

      {/* PRODUCTS */}

      <section
        style={{
          padding: "120px 80px"
        }}
      >
        <div
          style={{
            marginBottom: 70
          }}
        >
          <div
            style={{
              color: "#7c3aed",
              fontWeight: 800,
              marginBottom: 20
            }}
          >
            BESTSELLERS
          </div>

          <h2
            style={{
              fontSize: 72,
              lineHeight: 1,
              maxWidth: 900,
              margin: 0
            }}
          >
            Daily support for modern wellness.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 26
          }}
        >
          {[
            ["GLP-1 Support", "#e9f1ff", "#1463ff"],
            ["Digestive Health", "#fff0dc", "#f28a00"],
            ["Energy & Longevity", "#f1e6ff", "#7c3aed"],
            ["Hormone Balance", "#e6f6e9", "#159447"]
          ].map(([title, bg, color]) => (
            <div
              key={title}
              style={{
                background: bg,
                borderRadius: 34,
                padding: 36,
                minHeight: 320
              }}
            >
              <div
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 24,
                  background: color,
                  marginBottom: 28
                }}
              />

              <h3
                style={{
                  fontSize: 32,
                  marginBottom: 14
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  color: "#555",
                  lineHeight: 1.7,
                  fontSize: 18
                }}
              >
                Science-backed support for everyday health and wellness.
              </p>

              <div
                style={{
                  marginTop: 28,
                  fontWeight: 800
                }}
              >
                Shop Now →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          background: "#0a0a0a",
          color: "#fff",
          padding: "90px 80px"
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 900,
            marginBottom: 30
          }}
        >
          FORTE
          <span style={{ color: "#b88cff" }}>MATIC</span>
        </div>

        <p
          style={{
            color: "#aaa",
            fontSize: 18,
            maxWidth: 500,
            lineHeight: 1.8
          }}
        >
          Science-backed supplements for modern health and everyday wellness.
        </p>

        <div
          style={{
            borderTop: "1px solid #333",
            marginTop: 60,
            paddingTop: 30,
            color: "#777"
          }}
        >
          © 2026 Fortematic. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
