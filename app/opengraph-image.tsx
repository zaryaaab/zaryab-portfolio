import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0b0a09",
          color: "#efebe5",
          backgroundImage: "radial-gradient(circle at 85% 10%, rgba(255,181,71,0.25), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#9a928a" }}>
          <div style={{ width: 48, height: 48, borderRadius: 10, background: "#ffb547", color: "#1a1206", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 22 }}>ZA</div>
          {profile.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 108, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>{profile.name}</div>
          <div style={{ fontSize: 40, color: "#9a928a", marginTop: 24, maxWidth: 950 }}>{profile.tagline}</div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 24, color: "#ffb547" }}>Next.js · React · TypeScript · Streaming AI UIs · NestJS · Prisma</div>
      </div>
    ),
    size,
  );
}
