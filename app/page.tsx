export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f8f7f3",
        minHeight: "100vh",
        color: "#111",
      }}
    >
      {/* HERO */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 60px",
          background:
            "linear-gradient(135deg,#f7f4ef 0%,#eef6ff 50%,#f5f0ff 100%)",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "1px",
              marginBottom: "20px",
            }}
          >
            SCIENCE-BACKED • PLANT-POWERED
          </p>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "0.95",
              marginBottom: "30px",
              fontWeight: 900,
            }}
          >
            Elevate your everyday{" "}
            <span style={{ fontStyle: "italic", color: "#7c3aed" }}>
              health.
            </span>
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.6",
              color: "#444",
              marginBottom: "40px",
            }}
          >
            Premium supplements designed to support metabolism, digestion,
            energy and long-term wellness.
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            <button
              style={{
                background: "#111",
                color: "#fff",
                padding: "16px 30px",
                borderRadius: "999px",
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Shop GLP-1 Support
            </button>

            <button
              style={{
                background: "transparent",
                color: "#111",
                padding: "16px 30px",
                borderRadius: "999px",
                border: "1px solid #111",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Take the Quiz
            </button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "20px",
          }}
        >
          <img
            src="https://placehold.co/260x360/e8f0ff/245bff?text=GLP-1"
            style={{ borderRadius: "24px" }}
          />

          <img
            src="https://placehold.co/260x360/fff0d9/f08b00?text=FIBER"
            style={{ borderRadius: "24px", marginTop: "40px" }}
          />

          <img
            src="https://placehold.co/260x360/f1e7ff/8a3ffc?text=NAD%2B"
            style={{ borderRadius: "24px" }}
          />

          <img
            src="https://placehold.co/260x360/e8ffe8/1c9d53?text=DIM%2B"
            style={{ borderRadius: "24px", marginTop: "40px" }}
          />
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section style={{ padding: "100px 60px" }}>
        <h2
          style={{
            fontSize: "56px",
            marginBottom: "60px",
            fontWeight: 900,
          }}
        >
          Find what your body needs.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "24px",
          }}
        >
          {[
            ["GLP-1 Support", "#dbeafe"],
            ["Digestive Health", "#ffedd5"],
            ["Energy & Longevity", "#f3e8ff"],
            ["Hormone Balance", "#dcfce7"],
          ].map(([title, color]) => (
            <div
              key={title}
              style={{
                background: color,
                padding: "30px",
                borderRadius: "28px",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  marginBottom: "20px",
                }}
              >
                {title}
              </h3>

              <div
                style={{
                  height: "260px",
                  borderRadius: "20px",
                  background: "#fff",
                }}
              />

              <button
                style={{
                  marginTop: "25px",
                  border: "none",
                  background: "#111",
                  color: "#fff",
                  padding: "14px 24px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SCIENCE */}
      <section
        style={{
          padding: "100px 60px",
          background: "#fff",
        }}
      >
        <h2
          style={{
            fontSize: "56px",
            fontWeight: 900,
            marginBottom: "30px",
          }}
        >
          Understanding GLP-1
        </h2>

        <p
          style={{
            maxWidth: "800px",
            fontSize: "22px",
            lineHeight: "1.7",
            color: "#444",
          }}
        >
          GLP-1 is a natural hormone produced in the gut that helps regulate
          appetite, fullness and metabolism. Fortematic GLP-1 Support is
          designed to support healthy metabolic function and appetite control.
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#0b0b0b",
          color: "#fff",
          padding: "80px 60px",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            fontWeight: 900,
            marginBottom: "20px",
          }}
        >
          Fortematic®
        </h2>

        <p
          style={{
            maxWidth: "500px",
            color: "#aaa",
            lineHeight: "1.7",
            marginBottom: "40px",
          }}
        >
          Science-backed supplements for modern wellness, metabolism and
          long-term health.
        </p>

        <div style={{ color: "#777" }}>
          © 2024 Fortematic®. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
