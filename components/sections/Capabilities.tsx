"use client";

import { motion } from "motion/react";
import { Component, LayoutGrid, MessagesSquare, Server } from "lucide-react";
import clsx from "clsx";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const capabilities = [
  {
    icon: MessagesSquare,
    title: "AI-native Interfaces",
    body: "Conversational products that feel instant — answers stream in token by token, tool calls render as real UI, and state survives refreshes, retries and slow models.",
    points: ["Streaming LLM responses", "Tool-call rendering & optimistic UI", "Persistent, resumable conversations"],
    tools: ["Next.js", "React", "Streaming LLMs", "LangChain", "LangGraph", "SSE"],
    visual: "chat",
    span: "md:col-span-2",
  },
  {
    icon: LayoutGrid,
    title: "Data-dense UIs",
    body: "Tables, trees and charts that stay fast and readable with thousands of rows.",
    points: ["DataTable & TreeTable views", "D3 / SVG visualisations", "Virtualised, filterable grids"],
    tools: ["PrimeReact", "D3.js", "SVG"],
    visual: "table",
    span: "",
  },
  {
    icon: Component,
    title: "Design Systems",
    body: "Reusable, accessible components that turn Figma files into consistent product.",
    points: ["Tokens & theming", "Keyboard & screen-reader support", "Documented components"],
    tools: ["Figma", "TypeScript", "Accessibility"],
    visual: "tokens",
    span: "",
  },
  {
    icon: Server,
    title: "Full-stack Delivery",
    body: "I own features end to end: API contracts, NestJS services, Prisma schemas and the CI that ships them — so the front-end never waits on a guess.",
    points: ["NestJS + Prisma APIs & streaming endpoints", "Contract-first integration", "CI/CD, caching & performance"],
    tools: ["NestJS", "Prisma", "PostgreSQL", "Node.js", "AWS", "Docker"],
    visual: "flow",
    span: "md:col-span-2",
  },
] as const;

function ChatVisual() {
  return (
    <div className="space-y-2">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-accent px-3 py-2 text-xs text-accent-ink"
      >
        Compare my last three invoices
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm border border-line bg-bg px-3 py-2 text-xs text-muted"
      >
        <span className="mb-1.5 flex items-center gap-1.5 font-mono text-[10px] text-faint">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> get_invoices(limit: 3) ✓
        </span>
        <span className="flex gap-1.5">
          {["$1,240", "$980", "$1,615"].map((v, i) => (
            <span key={v} className={clsx("rounded-md border px-2 py-1 font-mono text-[10px]", i === 2 ? "border-accent text-fg" : "border-line")}>
              {v}
            </span>
          ))}
        </span>
        <span className="mt-1.5 block">
          March is up 65%
          <span className="caret ml-0.5 inline-block h-3 w-1 translate-y-0.5 bg-accent" />
        </span>
      </motion.div>
    </div>
  );
}

function TableVisual() {
  const rows = [
    { n: "Policies", v: 82, d: 0 },
    { n: "Quotes", v: 64, d: 1 },
    { n: "Renewals", v: 47, d: 1 },
    { n: "Claims", v: 29, d: 0 },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-bg font-mono text-[10px]">
      <div className="flex justify-between border-b border-line px-2.5 py-1.5 text-faint">
        <span>▾ name</span>
        <span>volume ↓</span>
      </div>
      {rows.map((r, i) => (
        <div key={r.n} className="flex items-center gap-2 border-b border-line px-2.5 py-1.5 last:border-0">
          <span className={clsx("w-16 truncate text-muted", r.d && "pl-2")}>{r.d ? "└ " : ""}{r.n}</span>
          <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
            <motion.span
              className="block h-full rounded-full bg-accent"
              initial={{ width: 0 }}
              whileInView={{ width: `${r.v}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.8 }}
            />
          </span>
        </div>
      ))}
    </div>
  );
}

function TokensVisual() {
  const swatches = ["var(--accent)", "var(--fg)", "var(--muted)", "var(--line-strong)"];
  return (
    <div className="space-y-2.5">
      <div className="flex gap-1.5">
        {swatches.map((s, i) => (
          <motion.span
            key={s}
            className="h-7 flex-1 rounded-lg border border-line"
            style={{ background: s }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="rounded-lg bg-accent px-3 py-1.5 text-[11px] font-semibold text-accent-ink">Primary</span>
        <span className="rounded-lg border border-line-strong px-3 py-1.5 text-[11px]">Secondary</span>
        <span className="ml-auto rounded-md border border-dashed border-accent px-1.5 py-0.5 font-mono text-[10px] text-accent">focus</span>
      </div>
    </div>
  );
}

function FlowVisual() {
  const steps = ["React", "API contract", "NestJS", "Prisma", "Postgres"];
  return (
    <div className="relative flex items-center justify-between py-3">
      <span className="absolute inset-x-4 top-1/2 h-px bg-line-strong" />
      <motion.span
        className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]"
        animate={{ left: ["6%", "92%"] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
      />
      {steps.map((s) => (
        <span key={s} className="relative rounded-lg border border-line bg-bg px-2 py-1.5 font-mono text-[10px] text-muted">
          {s}
        </span>
      ))}
    </div>
  );
}

const visuals = { chat: ChatVisual, table: TableVisual, tokens: TokensVisual, flow: FlowVisual };

export default function Capabilities() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 md:px-6 md:py-32">
      <SectionHeading index="01" eyebrow="What I do" title="Interfaces that" accent="think fast.">
        Front-end architecture for AI-native products, data-heavy apps and design systems — with the full-stack depth to ship them end to end.
      </SectionHeading>

      <div className="grid gap-3 md:grid-cols-3">
        {capabilities.map((cap, i) => {
          const Icon = cap.icon;
          const Visual = visuals[cap.visual];
          return (
            <Reveal key={cap.title} delay={i * 0.06} className={cap.span}>
              <div
                onPointerMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-bg-elev p-6 transition-colors hover:border-accent/50 md:p-8 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(450px_circle_at_var(--x)_var(--y),var(--accent-soft),transparent_60%)] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100"
              >
                <div className="relative flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent-soft text-accent transition group-hover:bg-accent group-hover:text-accent-ink">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{cap.title}</h3>
                </div>
                <p className="relative mt-4 text-muted">{cap.body}</p>

                <div className={clsx("relative mt-6 grid gap-6", cap.span && "md:grid-cols-2 md:items-center")}>
                  <ul className="space-y-2 text-sm">
                    {cap.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Visual />
                </div>

                <ul className="relative mt-auto flex flex-wrap gap-1.5 pt-6">
                  {cap.tools.map((t) => (
                    <li key={t} className="rounded-full border border-line bg-bg px-2.5 py-1 font-mono text-[11px] text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
