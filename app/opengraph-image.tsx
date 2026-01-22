import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.16), rgba(16,185,129,0.14)), radial-gradient(900px 420px at 20% 20%, rgba(99,102,241,0.22), transparent 60%), radial-gradient(900px 420px at 80% 70%, rgba(16,185,129,0.18), transparent 60%), #0b0b0f",
          color: "#ffffff",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: -1.5,
          }}
        >
          HomeDecorCalc
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 30,
            lineHeight: 1.25,
            maxWidth: 900,
            color: "rgba(255,255,255,0.88)",
          }}
        >
          Home improvement calculators and guides with clear assumptions and practical estimates.
        </div>
        <div
          style={{
            marginTop: 36,
            display: "flex",
            gap: 14,
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          <div
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            Calculators
          </div>
          <div
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            Guides
          </div>
          <div
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            Fast estimates
          </div>
        </div>
      </div>
    ),
    size,
  );
}

