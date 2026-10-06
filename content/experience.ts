export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
};

// Wrap numbers in [[...]] to render them as highlighted metrics.
export const experience: Role[] = [
  {
    company: "Toptal",
    title: "Senior Software Engineer",
    period: "2025 — Present",
    location: "Remote",
    current: true,
    summary: "Front-end owner for an AI-native web application.",
    highlights: [
      "Own front-end development for an AI-native web application in Next.js, React and TypeScript — architecture, implementation, testing, performance and production delivery.",
      "Build conversational AI experiences with streaming LLM responses, tool-call rendering, optimistic UI, persistent state and responsive real-time interactions.",
      "Develop reusable, accessible components and data-dense interfaces, partnering with designers in Figma to turn product designs into production experiences.",
      "Work across the stack with NestJS and Prisma on API contracts, streaming behaviour, schema evolution, code reviews, CI and technical documentation.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Streaming LLMs", "NestJS", "Prisma", "Figma"],
  },
  {
    company: "Arbisoft",
    title: "Senior Software Engineer · Insurify",
    period: "2022 — 2025",
    location: "Lahore, Pakistan",
    summary: "Full-stack lead on enterprise insurance applications.",
    highlights: [
      "Led full-stack development of enterprise applications with React, TypeScript, Node.js, PostgreSQL and MongoDB, owning features from technical planning to production release.",
      "Built reusable front-end components and API-driven workflows on systems serving [[50K+]] daily API requests.",
      "Reduced API latency by [[30%]] through caching and database optimisation, and cut front-end/backend integration issues by [[30%]] with stronger API contract planning.",
      "Shaped architecture, security, code review and CI/CD practices, taking deployment cycles from days to under [[1 hour]].",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "CI/CD"],
  },
  {
    company: "Devsinc",
    title: "Software Engineer",
    period: "2020 — 2022",
    location: "Lahore, Pakistan",
    summary: "Full-stack web applications for enterprise workflows.",
    highlights: [
      "Built full-stack web applications with React, JavaScript/TypeScript, Node.js, REST APIs and database-backed services for enterprise workflows.",
      "Shipped backend modules and API-driven features for applications with [[10K+]] monthly users, improving internal workflow processing time by [[18%]].",
      "Optimised database access to cut report generation from [[8s → 5s]], and implemented authentication and RBAC for secure workflows.",
      "Delivered features across [[15+]] production releases — API design, testing, debugging and production support.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Express.js", "REST APIs", "RBAC"],
  },
];
