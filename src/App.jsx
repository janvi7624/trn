import { useRef, useEffect } from "react";

export default function App() {
  const robotRef = useRef(null);
  const rootRef = useRef(null);
  const cur = useRef({ x: 0, y: 0 });
  const tgt = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      tgt.current = {
        x: (((e.clientY - r.top) / r.height) * 2 - 1) * -10,
        y: (((e.clientX - r.left) / r.width) * 2 - 1) * 10,
      };
    };

    const onLeave = () => {
      tgt.current = { x: 0, y: 0 };
    };

    let raf;
    const tick = () => {
      cur.current.x += (tgt.current.x - cur.current.x) * 0.06;
      cur.current.y += (tgt.current.y - cur.current.y) * 0.06;

      if (robotRef.current) {
        robotRef.current.style.transform = `perspective(800px) rotateX(${cur.current.x}deg) rotateY(${cur.current.y}deg)`;
      }

      raf = requestAnimationFrame(tick);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes badgePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cs-badge    { animation: fadeUp 0.6s ease 0.1s both; }
        .cs-heading  { animation: fadeUp 0.6s ease 0.25s both; }
        .cs-divider  { animation: fadeUp 0.6s ease 0.35s both; }
        .cs-sub      { animation: fadeUp 0.6s ease 0.45s both; }
        .cs-dot      { animation: badgePulse 1.8s ease-in-out infinite; }
      `}</style>

      <div ref={rootRef} style={styles.root}>

        {/* Grid background */}
        <div style={styles.gridBg} />

        {/* Purple glow orb */}
        <div style={styles.glowOrb} />

        {/* Robot — parallax layer */}
        <div ref={robotRef} style={styles.robotWrapper}>
          <img src="/robot.png" alt="Robot" style={styles.robotImg} />
        </div>

        {/* Radial vignette */}
        <div style={styles.vignette} />

        {/* Scanlines */}
        <div style={styles.scanlines} />

        {/* Corner brackets */}
        <div style={{ ...styles.corner, ...styles.cornerTL }} />
        <div style={{ ...styles.corner, ...styles.cornerTR }} />
        <div style={{ ...styles.corner, ...styles.cornerBL }} />
        <div style={{ ...styles.corner, ...styles.cornerBR }} />

        {/* Text content */}
        <div style={styles.text}>
          {/* Heading */}
          <h1 className="cs-heading" style={styles.heading}>
            Coming Soon
          </h1>

          {/* Divider */}
          <div className="cs-divider" style={styles.divider} />

          {/* Subtitle */}
          <p className="cs-sub" style={styles.sub}>
            Something powerful is on physical way.
          </p>
        </div>
      </div>
    </>
  );
}

const styles = {
  root: {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
    background: "#080808",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "system-ui, sans-serif",
  },
  gridBg: {
    position: "absolute",
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
  },
  glowOrb: {
    position: "absolute",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255, 60, 60, 0.13) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  robotWrapper: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  robotImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.4,
  },
  vignette: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at center, transparent 25%, #080808 80%)",
  },
  scanlines: {
    position: "absolute",
    inset: 0,
    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)",
    pointerEvents: "none",
    zIndex: 1,
  },
  corner: {
    position: "absolute",
    width: "22px",
    height: "22px",
    borderColor: "rgba(255, 60, 70, 0.4)",
    borderStyle: "solid",
  },
  cornerTL: { top: "20px",  left: "20px",  borderWidth: "1px 0 0 1px" },
  cornerTR: { top: "20px",  right: "20px", borderWidth: "1px 1px 0 0" },
  cornerBL: { bottom: "20px", left: "20px",  borderWidth: "0 0 1px 1px" },
  cornerBR: { bottom: "20px", right: "20px", borderWidth: "0 1px 1px 0" },
  text: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "18px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    background: "rgba(255, 60, 60, 0.15)",
    border: "0.5px solid rgba(255, 60, 60, 0.45)",
    borderRadius: "99px",
    padding: "5px 14px",
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.1em",
    color: "#ff9090",
    textTransform: "uppercase",
  },
  badgeDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#ff5a5d",
    display: "inline-block",
  },
  heading: {
    fontSize: "clamp(3rem, 8vw, 8rem)",
    fontWeight: 900,
    letterSpacing: "-0.02em",
    lineHeight: 1,
    margin: 0,
    background: "linear-gradient(135deg, #ffffff 0%, #a5666f 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  divider: {
    width: "44px",
    height: "1px",
    background: "linear-gradient(90deg, transparent, #b03a2e, transparent)",
  },
  sub: {
    fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
    color: "#a28181",
    margin: 0,
    letterSpacing: "0.08em",
    fontWeight: 400,
  },
};