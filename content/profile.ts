export const profile = {
  name: "Zaryab Ahmad",
  firstName: "Zaryab",
  role: "Senior Software Engineer",
  tagline: "I build AI-native products — streaming chat interfaces, data-dense apps and the Next.js / NestJS stacks behind them.",
  intro:
    "Senior Software Engineer with 6+ years building production full-stack applications with a strong front-end focus in Next.js, React and TypeScript. I own complex front-end architecture and AI-native experiences — streaming LLM responses, conversational interfaces, tool interactions and data-rich apps — and work hands-on across Node.js, NestJS, Prisma and PostgreSQL.",
  location: "Lahore, Pakistan · Remote",
  available: true,
  email: "zaryabahmad454@gmail.com",
  links: {
    github: "https://github.com/zaryaaab",
    linkedin: "https://www.linkedin.com/in/zaryabahmad28/",
    resume: "/Zaryab-Ahmad-Resume.pdf",
  },
  typed: ["streaming LLM interfaces", "tool-call rendering", "data-dense dashboards", "AI tutoring experiences", "accessible design systems", "NestJS + Prisma APIs"],
  stats: [
    { value: 6, suffix: "+", label: "Years shipping production software" },
    { value: 50, suffix: "K+", label: "Daily API requests served" },
    { value: 30, suffix: "%", label: "Lower API latency" },
    { value: 1, suffix: " hr", label: "Deploy cycle, down from days" },
    { value: 15, suffix: "+", label: "Production releases delivered" },
  ] as { value: number; suffix: string; label: string; decimals?: number }[],
} as const;

export const certificates: { title: string; issuer: string; href?: string }[] = [];

export const education = {
  degree: "Bachelor of Computer Science",
  school: "PUCIT",
  period: "2016 — 2020",
  location: "Lahore, Pakistan",
};
