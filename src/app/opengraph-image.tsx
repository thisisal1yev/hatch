import { ImageResponse } from "next/og";
import { siteConfig } from "@/shared/config";

// Daybreak palette as sRGB hex — Satori can't read the OKLCH CSS vars in
// globals.css, so these mirror --band-ink / --brand / --accent / --on-band.
const INK = "#1E1812";
const INK_2 = "#150F0A";
const CORAL = "#E8743F";
const CREAM = "#F8F4ED";
const MUTED = "#CBC2B5";
const GREEN = "#3F9E6B";

export const alt = `${siteConfig.name} — Oʻzbekiston startup ekotizimi uchun isteʼdod platformasi`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The icon mark, inlined so Satori renders it as an <img> (gradient + sun).
const MARK = `<svg width="112" height="112" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="c" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#F18A52"/><stop offset="1" stop-color="#C8533A"/></linearGradient></defs><rect width="64" height="64" rx="15" fill="url(#c)"/><g stroke="#F8F4ED" stroke-width="3" stroke-linecap="round"><path d="M32 13V19"/><path d="M20 18 23.5 23"/><path d="M44 18 40.5 23"/></g><path d="M21 41A11 11 0 0 1 43 41Z" fill="#F8F4ED"/><path d="M12 45H52" stroke="#F8F4ED" stroke-width="3.2" stroke-linecap="round"/></svg>`;
const MARK_SRC = `data:image/svg+xml;base64,${Buffer.from(MARK).toString("base64")}`;

async function loadFont(url: string): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(url);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function Image() {
  // Brand display face for the wordmark; falls back to Satori's default if the
  // CDN is unreachable at build time, so the route never fails to render.
  const [display, body] = await Promise.all([
    loadFont(
      "https://cdn.jsdelivr.net/npm/@fontsource/bricolage-grotesque@5/files/bricolage-grotesque-latin-ext-800-normal.woff",
    ),
    loadFont(
      "https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5/files/geist-sans-latin-ext-400-normal.woff",
    ),
  ]);

  const fonts = [
    display && { name: "Display", data: display, weight: 800 as const, style: "normal" as const },
    body && { name: "Body", data: body, weight: 400 as const, style: "normal" as const },
  ].filter((f): f is NonNullable<typeof f> => Boolean(f));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 84,
          color: CREAM,
          fontFamily: fonts.length ? "Body" : undefined,
          background: `linear-gradient(165deg, ${INK}, ${INK_2})`,
          position: "relative",
        }}
      >
        {/* sunrise glow from lower-left — the hero's bg-daybreak, flattened */}
        <div
          style={{
            position: "absolute",
            left: -180,
            bottom: -260,
            width: 900,
            height: 900,
            borderRadius: 9999,
            background: `radial-gradient(closest-side, ${CORAL}, transparent)`,
            opacity: 0.5,
            display: "flex",
          }}
        />
        {/* cool counter-glow, top-right */}
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -240,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: `radial-gradient(closest-side, ${GREEN}, transparent)`,
            opacity: 0.18,
            display: "flex",
          }}
        />

        {/* top row: mark + eyebrow pill */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <img src={MARK_SRC} width={112} height={112} alt="" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: 9999,
              border: `1px solid ${CORAL}`,
              color: CORAL,
              padding: "10px 22px",
              fontSize: 28,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Startup × isteʼdod
          </div>
        </div>

        {/* wordmark + tagline */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div
            style={{
              fontFamily: fonts.length ? "Display" : undefined,
              fontSize: 150,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            {siteConfig.name}
          </div>
          <div style={{ marginTop: 28, fontSize: 42, lineHeight: 1.3, color: MUTED }}>
            {siteConfig.description}
          </div>
        </div>

        {/* footer: open comp + domain */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30 }}>
            <div style={{ width: 16, height: 16, borderRadius: 9999, background: GREEN, display: "flex" }} />
            <span>Maosh va equity — ochiq</span>
          </div>
          <div style={{ fontSize: 30, color: CORAL }}>hatch.uz</div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
