import { useState, useEffect } from "react";

export default function App() {
  const [timeLeft, setTimeLeft] = useState({});
  const [notified, setNotified] = useState(false);
  const [email, setEmail] = useState("");

  const targetDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const tick = () => {
      const diff = targetDate - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days:  String(Math.floor(diff / 86400000)).padStart(2, "0"),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0"),
        mins:  String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"),
        secs:  String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = ["days", "hours", "mins", "secs"];

  return (
    <div style={styles.wrapper}>
      <div style={styles.blob1} />
      <div style={styles.blob2} />
      <div style={styles.radial} />

      <div style={styles.spinner} />

      <h1 style={{ ...styles.heading, animation: "fadeInUp 0.8s ease both 0.2s, flicker 6s ease-in-out infinite 2s" }}>
        Coming Soon
      </h1>

      <p style={{ ...styles.sub, animation: "fadeInUp 0.8s ease both 0.4s" }}>
        Something powerful is on its way. Stay tuned.
      </p>

      {/* <div style={{ ...styles.countdown, animation: "fadeInUp 0.8s ease both 0.6s" }}>
        {units.map((unit) => (
          <div key={unit} style={styles.tile}>
            <span style={styles.number}>{timeLeft[unit] ?? "00"}</span>
            <span style={styles.label}>{unit}</span>
          </div>
        ))}
      </div>

      <div style={{ ...styles.emailRow, animation: "fadeInUp 0.8s ease both 0.8s" }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button
          style={notified ? { ...styles.button, background: "#501313" } : styles.button}
          onClick={() => { if (email) setNotified(true); }}
        >
          {notified ? "✓ Noted!" : "Notify me"}
        </button>
      </div> */}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.08); opacity: 0.7; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(226,75,74,0.5); }
          50%       { box-shadow: 0 0 0 14px rgba(226,75,74,0); }
        }
        @keyframes flicker {
          0%,100%{opacity:1} 92%{opacity:1} 93%{opacity:0.7}
          95%{opacity:1} 97%{opacity:0.8} 98%{opacity:1}
        }
      `}</style>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0a0a0a 0%, #1a0505 50%, #2d0808 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem 2rem",
    position: "relative",
    overflow: "hidden",
    fontFamily: "sans-serif",
  },
  blob1: {
    position: "absolute", top: -80, right: -80,
    width: 300, height: 300, borderRadius: "50%",
    background: "rgba(226,75,74,0.08)",
    animation: "pulse 4s ease-in-out infinite",
  },
  blob2: {
    position: "absolute", bottom: -100, left: -60,
    width: 360, height: 360, borderRadius: "50%",
    background: "rgba(163,45,45,0.06)",
    animation: "pulse 5.5s ease-in-out infinite 1.2s",
  },
  radial: {
    position: "absolute", top: "50%", left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500, height: 500, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(163,45,45,0.07) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  spinner: {
    width: 152, height: 152, borderRadius: "50%",
    border: "2.5px solid rgba(240,149,149,0.2)",
    borderTopColor: "#E24B4A",
    animation: "spin 1.6s linear infinite",
    marginBottom: "2rem",
  },
  heading: {
    fontSize: 150, fontWeight: 700, color: "#FCEBEB",
    margin: "0 0 0.5rem", letterSpacing: -1,
    textAlign: "center", opacity: 0,
  },
  sub: {
    fontSize: 50, color: "#F09595", margin: "0 0 2.5rem",
    textAlign: "center", maxWidth: 800, lineHeight: 1.75, opacity: 0,
  },
  countdown: {
    display: "flex", gap: 10, marginBottom: "2.5rem", opacity: 0,
  },
  tile: {
    display: "flex", flexDirection: "column", alignItems: "center",
    background: "rgba(255,255,255,0.04)",
    border: "0.5px solid rgba(226,75,74,0.35)",
    borderRadius: 8, padding: "14px 18px", minWidth: 62,
  },
  number: { fontSize: 28, fontWeight: 500, color: "#FCEBEB" },
  label:  { fontSize: 11, color: "#A32D2D", marginTop: 4, letterSpacing: 1, textTransform: "uppercase" },
  emailRow: {
    display: "flex", gap: 8, alignItems: "center", opacity: 0,
  },
  input: {
    background: "rgba(255,255,255,0.06)",
    border: "0.5px solid rgba(226,75,74,0.4)",
    color: "#FCEBEB", borderRadius: 8, padding: "10px 16px",
    fontSize: 14, width: 196, outline: "none",
  },
  button: {
    background: "#A32D2D", border: "none", color: "#FCEBEB",
    borderRadius: 8, padding: "10px 20px", fontSize: 14,
    cursor: "pointer", fontWeight: 500,
    animation: "glow 2.5s ease-in-out infinite",
  },
};