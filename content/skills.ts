export type SkillGroup = {
  id: string;
  title: string;
  blurb: string;
  skills: string[];
  span?: "wide" | "tall";
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    blurb: "Fast, accessible, data-rich interfaces — my home turf.",
    skills: [
      "TypeScript", "JavaScript", "React", "Next.js", "PrimeReact", "DataTable", "TreeTable", "D3.js", "SVG",
      "HTML5", "CSS3", "Tailwind CSS", "Accessibility", "Figma",
    ],
    span: "wide",
  },
  {
    id: "ai",
    title: "AI & UI",
    blurb: "Interfaces where the model is part of the product.",
    skills: ["Streaming LLMs", "Chat UI", "Tool-Call Rendering", "Optimistic UI", "Voice / TTS", "LangChain", "LangGraph", "RAG", "OpenAI", "State Management"],
    span: "tall",
  },
  {
    id: "backend",
    title: "Backend",
    blurb: "APIs and services with clear contracts.",
    skills: ["Node.js", "NestJS", "Express.js", "Prisma", "Python", "FastAPI", "REST APIs", "Streaming APIs", "WebSockets"],
  },
  {
    id: "data",
    title: "Data",
    blurb: "Relational and document stores, tuned.",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    id: "web3",
    title: "Web3 & Markets",
    blurb: "Wallets, tokens and live market data.",
    skills: ["Web3", "Wallet Connect", "Charts", "Real-time Data"],
  },
  {
    id: "engineering",
    title: "Engineering",
    blurb: "How the work gets shipped — and stays shipped.",
    skills: ["AWS", "Docker", "CI/CD", "Git", "Front-End Testing", "Code Review", "Performance Optimization", "Design Systems", "Documentation"],
    span: "wide",
  },
];
