export type Category = "AI / LLM" | "EdTech" | "Full-Stack" | "Marketplace" | "Web3" | "FinTech";

/** Which illustrated UI mock to render while a real screenshot is missing. */
export type MockKind = "tutor" | "quiz" | "classroom" | "delivery" | "portfolio" | "market";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  categories: Category[];
  role: string;
  period?: string;
  link?: { href: string; label: string };
  /** Address shown in the browser frame when there is no public link. */
  host?: string;
  confidential?: boolean;
  stack: string[];
  metrics: { value: string; label: string }[];
  problem: string;
  solution: string;
  architecture: string[];
  features: { title: string; body: string; image?: string }[];
  /**
   * Screenshots live in /public/projects/<slug>/.
   * cover: 1920×1080 desktop shot. full: optional long full-page capture (1440px wide) — auto-scrolls on hover.
   * mobile: optional 390×844. gallery: extra shots for the case-study page.
   */
  images: { cover?: string; full?: string; mobile?: string; gallery?: string[] };
  mock: MockKind;
  /** Hue (0–360) used to tint placeholders and accents for this project. */
  hue: number;
};

export const projects: Project[] = [
  {
    slug: "tutorly-ai",
    title: "Tutorly AI",
    tagline: "A homework tutor that answers as fast as students think.",
    summary:
      "An AI learning platform that gives students instant tutoring — step-by-step explanations, essay help and follow-up questions — through a streaming conversational interface built for long study sessions.",
    categories: ["AI / LLM", "EdTech"],
    role: "Full-stack engineer · front-end lead",
    link: { href: "https://tutorly.ai/", label: "tutorly.ai" },
    stack: ["Next.js", "React", "TypeScript", "PrimeReact", "NestJS", "Prisma", "LangChain", "PostgreSQL", "AWS", "Streaming LLMs"],
    metrics: [
      { value: "Streaming", label: "Token-by-token answers" },
      { value: "Step-by-step", label: "Guided explanations" },
      { value: "Persistent", label: "Study sessions & history" },
    ],
    problem:
      "Students stuck on homework at midnight had two options: wait for a human tutor or paste the question into a generic chatbot that dumped an answer without teaching anything.",
    solution:
      "A Next.js app with a purpose-built chat experience: answers stream in as they're generated, math and code render inline, and every conversation is saved so students can pick up where they left off. NestJS + Prisma services orchestrate LangChain pipelines behind a clean API contract.",
    architecture: ["Next.js chat UI", "Streaming API (SSE)", "NestJS services", "LangChain pipelines", "LLM providers", "PostgreSQL via Prisma"],
    features: [
      { title: "Streaming conversational tutor", body: "Responses render token by token with markdown, math and code blocks, plus stop/regenerate controls that never lose state." },
      { title: "Interactive student workflows", body: "Subject pickers, file and image uploads, and follow-up suggestions turn a single answer into a learning session." },
      { title: "Async state that stays predictable", body: "Optimistic messages, retries and persisted history keep the UI responsive even when the model is slow." },
    ],
    images: {},
    mock: "tutor",
    hue: 262,
  },
  {
    slug: "puzzicle",
    title: "Puzzicle",
    tagline: "Videos that stop and ask you a question.",
    summary:
      "A collaborative learning platform that turns educational videos — including Khan Academy lessons — into guided lessons with interactive quizzes, so students prove understanding as they watch and teachers see where a class gets stuck.",
    categories: ["EdTech", "Full-Stack"],
    role: "Full-stack engineer",
    link: { href: "https://puzzicle.org/", label: "puzzicle.org" },
    stack: ["Next.js", "React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "WebSockets", "AWS"],
    metrics: [
      { value: "Guided", label: "Video lessons" },
      { value: "In-video", label: "Interactive quizzes" },
      { value: "Live", label: "Class collaboration" },
    ],
    problem:
      "Students watch lesson videos passively and teachers only find out what didn't land at the next test — long after it could have been fixed.",
    solution:
      "A player that pauses at checkpoints for quiz questions, tracks each student's answers against the timeline and streams class progress to a teacher dashboard in real time.",
    architecture: ["Video player + checkpoints", "Quiz engine", "Node / NestJS API", "Real-time class channel", "PostgreSQL", "Teacher dashboard"],
    features: [
      { title: "Checkpoint quizzes", body: "Questions are pinned to timestamps; the video waits until the student answers, then explains the right answer." },
      { title: "Collaborative classrooms", body: "Teachers assign lessons, students work through them together and see class-wide progress." },
      { title: "Teacher insights", body: "Per-question results show exactly which moment of a lesson lost the room." },
    ],
    images: {},
    mock: "quiz",
    hue: 188,
  },
  {
    slug: "edvisor-ai",
    title: "Edvisor AI",
    tagline: "AI teaching tools, tailored to your course.",
    summary:
      "A suite of AI-powered classroom tools for universities: instructors generate custom assignments and quizzes from their own course material, and students get AI help that stays inside the course's context.",
    categories: ["AI / LLM", "EdTech"],
    role: "Full-stack engineer",
    link: { href: "https://edvisor.ai/", label: "edvisor.ai" },
    stack: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "LangChain", "RAG", "PostgreSQL", "AWS"],
    metrics: [
      { value: "Course-aware", label: "Grounded on your material" },
      { value: "Minutes", label: "To a custom quiz" },
      { value: "Instructor + student", label: "Two tailored workspaces" },
    ],
    problem:
      "Instructors spend hours writing assignments and quizzes, and generic AI tools don't know their syllabus — so the output needs heavy rewriting before it's usable.",
    solution:
      "Course material is ingested and indexed per class, then retrieval-augmented generation produces assignments, quizzes and study help grounded in that course. A Next.js workspace lets instructors review, edit and publish everything before students see it.",
    architecture: ["Course uploads", "FastAPI ingest", "LangChain RAG", "Generation tools", "Review & publish UI", "Student workspace"],
    features: [
      { title: "Custom assignments & quizzes", body: "Pick a topic, difficulty and format; get a draft grounded in your own lectures and readings." },
      { title: "Human in the loop", body: "Everything generated lands in an editable review step — instructors stay in control of what ships." },
      { title: "Course-scoped study help", body: "Students ask questions and get answers that cite the course, not the whole internet." },
    ],
    images: {},
    mock: "classroom",
    hue: 150,
  },
  {
    slug: "menuclick",
    title: "MenuClick",
    tagline: "From craving to doorstep, tracked in real time.",
    summary:
      "A DoorDash-style food ordering and delivery platform: restaurant discovery, menu browsing, cart and checkout, order management for restaurants and live order-status updates for customers.",
    categories: ["Marketplace", "Full-Stack"],
    role: "Full-stack engineer",
    stack: ["Next.js", "React", "TypeScript", "PrimeReact", "NestJS", "Prisma", "PostgreSQL", "AWS", "WebSockets"],
    metrics: [
      { value: "End-to-end", label: "Discovery → checkout" },
      { value: "Real-time", label: "Order status" },
      { value: "Two-sided", label: "Customers & restaurants" },
    ],
    problem:
      "Local restaurants needed their own ordering channel without marketplace fees, and customers expected the same polished experience — search, rich menus, saved carts and live tracking — as the big apps.",
    solution:
      "A Next.js customer app and a PrimeReact-powered restaurant console share a NestJS + Prisma API. Orders move through a state machine and every transition is pushed to customers and kitchens in real time.",
    architecture: ["Customer app", "Restaurant console", "NestJS API", "Order state machine", "Real-time updates", "PostgreSQL via Prisma"],
    features: [
      { title: "Discovery & menus", body: "Search, filters and rich menus with modifiers, built from reusable, responsive components." },
      { title: "Cart & checkout", body: "A predictable cart model with optimistic updates, item customisation and a fast checkout flow." },
      { title: "Order management", body: "Data-dense tables for restaurants to accept, prepare and dispatch orders, with live status for customers." },
    ],
    images: {},
    host: "menuclick",
    mock: "delivery",
    hue: 14,
  },
  {
    slug: "dash-crypto",
    title: "DASH",
    tagline: "Track, optimise and grow a crypto portfolio.",
    summary:
      "A sleek crypto dashboard with real-time market prices, portfolio performance and allocation charts, goal tracking with scenario simulation and category-based rebalancing suggestions.",
    categories: ["FinTech", "Web3"],
    role: "Front-end engineer",
    link: { href: "https://crypto-tracker-theta-one.vercel.app/", label: "crypto-tracker-theta-one.vercel.app" },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "D3.js", "Charts", "Real-time Data"],
    metrics: [
      { value: "Live", label: "Market prices & trends" },
      { value: "Goals", label: "Targets & simulations" },
      { value: "Smart", label: "Rebalancing insights" },
    ],
    problem:
      "Crypto holders bounce between exchanges, spreadsheets and price apps — there's no single, clear view of performance, risk and what to do next.",
    solution:
      "One fast, dark-first dashboard that streams live prices, visualises allocation and growth, lets users set goals and simulate scenarios, and surfaces category insights to guide rebalancing.",
    architecture: ["Market data feed", "Next.js app", "Portfolio engine", "Chart layer (D3)", "Goals & simulations", "Strategy insights"],
    features: [
      { title: "Live market", body: "Real-time prices and trends for top cryptocurrencies, with alerts to stay ahead of moves." },
      { title: "Portfolio charts", body: "Performance, allocation, profit and risk visualised so the picture is clear at a glance." },
      { title: "Goals & smart strategy", body: "Set targets, simulate scenarios and get structured rebalancing suggestions by category." },
    ],
    images: {},
    mock: "portfolio",
    hue: 212,
  },
  {
    slug: "dopewarz",
    title: "Dopewarz",
    tagline: "Real-world assets, traded as tokens.",
    summary:
      "A Web3 marketplace for buying and selling tradable digital assets and tokens backed by real-world value — wallet login, live listings, an order book and portfolio views in one trading interface.",
    categories: ["Web3", "Marketplace"],
    role: "Front-end engineer",
    stack: ["Next.js", "React", "TypeScript", "Web3", "Wallet Connect", "Node.js", "MongoDB", "Real-time Data"],
    metrics: [
      { value: "Wallet", label: "Sign-in & checkout" },
      { value: "Live", label: "Listings & order book" },
      { value: "On-chain", label: "Asset ownership" },
    ],
    problem:
      "Trading tokenised assets usually means clunky dApps that hide prices, confuse first-time users and leave them guessing whether a transaction went through.",
    solution:
      "A marketplace UI that treats wallets as first-class: connect once, browse live listings, place buy or sell orders against a real-time order book and watch transaction state update from pending to confirmed.",
    architecture: ["Wallet connect", "Marketplace UI", "Node API", "Order book", "Smart contracts", "MongoDB"],
    features: [
      { title: "Wallet-native flows", body: "Connect, sign and pay with a wallet; every transaction shows clear pending, confirmed and failed states." },
      { title: "Live trading view", body: "Price charts, an order book and recent trades update in real time." },
      { title: "Portfolio & history", body: "Holdings, open orders and trade history in data-dense, sortable tables." },
    ],
    images: {},
    host: "dopewarz.io",
    mock: "market",
    hue: 300,
  },
];

export const categories: ("All" | Category)[] = ["All", "AI / LLM", "EdTech", "Full-Stack", "Marketplace", "Web3", "FinTech"];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
