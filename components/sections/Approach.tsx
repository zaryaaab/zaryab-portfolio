"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { Database, FileCode2, PenTool, Radio, Rocket, Wrench, Zap } from "lucide-react";
import clsx from "clsx";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const stages = [
  {
    id: "design",
    icon: PenTool,
    title: "Design",
    tools: ["Figma", "Design tokens", "A11y"],
    body: "Start with designers in Figma: map every state — empty, loading, streaming, error, retry — before a line of code, and lift shared pieces into accessible, token-driven components.",
  },
  {
    id: "contract",
    icon: FileCode2,
    title: "Contract",
    tools: ["TypeScript", "REST", "Shared types"],
    body: "Agree the API contract first — request shapes, stream events, error codes — and share the types. Planning contracts up front is how integration issues dropped by 30% at Insurify.",
  },
  {
    id: "services",
    icon: Database,
    title: "Services",
    tools: ["NestJS", "Prisma", "PostgreSQL"],
    body: "NestJS modules own the business logic, Prisma owns the schema and its evolution, and caching plus query tuning keep things fast — 30% lower latency at 50K+ daily requests.",
  },
  {
    id: "stream",
    icon: Radio,
    title: "Stream",
    tools: ["SSE", "Streaming APIs", "LangChain"],
    body: "Model output streams to the browser token by token. The client parses events incrementally, renders markdown as it arrives and lets users stop or regenerate without losing their place.",
  },
  {
    id: "tools",
    icon: Wrench,
    title: "Tool calls",
    tools: ["Tool-Call Rendering", "React"],
    body: "When the model calls a tool, the UI shows it — a running state, then a real component (a table, a chart, a form) instead of a wall of JSON.",
  },
  {
    id: "state",
    icon: Zap,
    title: "Optimistic state",
    tools: ["Optimistic UI", "Persistence"],
    body: "Messages appear instantly, reconcile with the server when it answers, and persist so a refresh, a flaky network or a slow model never costs the user their conversation.",
  },
  {
    id: "ship",
    icon: Rocket,
    title: "Ship",
    tools: ["Testing", "CI/CD", "Performance"],
    body: "Front-end tests, code review and CI gate every change; performance budgets keep it fast. Strong pipelines took deploys from days to under an hour.",
  },
];

export default function Approach() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20%" });
  const playing = inView && !paused;

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setActive((a) => (a + 1) % stages.length), 3200);
    return () => clearInterval(t);
  }, [playing]);

  const stage = stages[active];

  return (
    <section id="approach" className="relative scroll-mt-24 border-y border-line bg-bg-elev/50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading index="03" eyebrow="Approach" title="How I ship" accent="AI features.">
          The lifecycle of a streaming AI feature, from Figma to production. Hover or tap a stage to explore it.
        </SectionHeading>

        <Reveal>
          <div ref={ref} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="relative">
            <ol className="relative grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {stages.map((s, i) => {
                const Icon = s.icon;
                const on = i === active;
                const passed = i < active;
                return (
                  <li key={s.id} className="relative">
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => {
                        setActive(i);
                        setPaused(true);
                      }}
                      aria-pressed={on}
                      className={clsx(
                        "relative flex w-full flex-col items-start gap-3 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300",
                        on ? "border-accent bg-accent-soft" : "border-line bg-bg hover:border-line-strong",
                      )}
                    >
                      <span className="font-mono text-[10px] text-faint">0{i + 1}</span>
                      <Icon className={clsx("h-6 w-6 transition-colors", on || passed ? "text-accent" : "text-muted")} />
                      <span className="text-sm font-medium">{s.title}</span>
                      {on && playing && (
                        <motion.span
                          key={`bar-${active}`}
                          className="absolute bottom-0 left-0 h-0.5 bg-accent"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 3.2, ease: "linear" }}
                        />
                      )}
                    </button>
                    {i < stages.length - 1 && (
                      <span aria-hidden className="absolute -right-3 top-1/2 z-10 hidden h-px w-3 overflow-hidden lg:block">
                        <span className={clsx("block h-full w-full transition-colors", passed ? "bg-accent" : "bg-line-strong")} />
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>

            <div className="mt-6 grid gap-6 rounded-3xl border border-line bg-bg p-6 md:grid-cols-[1fr_auto] md:p-8">
              <AnimatePresence mode="wait">
                <motion.div key={stage.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                  <p className="font-mono text-xs text-accent">
                    stage_{String(active + 1).padStart(2, "0")} / {stage.id}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{stage.title}</h3>
                  <p className="mt-3 max-w-2xl text-muted">{stage.body}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {stage.tools.map((t) => (
                      <span key={t} className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="hidden items-center md:flex">
                <div className="grid grid-cols-7 gap-1">
                  {stages.map((s, i) => (
                    <span key={s.id} className={clsx("h-8 w-1.5 rounded-full transition-colors duration-300", i <= active ? "bg-accent" : "bg-line-strong")} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
