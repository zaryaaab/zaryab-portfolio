"use client";

import { useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, Bike, BookOpen, Check, ChefHat, CircleDot, FileText, GraduationCap, Image as ImageIcon,
  ListChecks, MapPin, Paperclip, Pause, Play, Search, Send, ShoppingBag, Sparkles, Square, Target, Users, Wallet,
} from "lucide-react";
import type { MockKind } from "@/content/projects";

/** Illustrated product UI used as a stand-in until a real screenshot is provided. Always dark, like a screenshot. */
export default function ProjectMock({ kind, hue }: { kind: MockKind; hue: number }) {
  const c = (l: number, a = 1, s = 80) => `hsl(${hue} ${s}% ${l}% / ${a})`;
  const Body = { tutor: Tutor, quiz: Quiz, classroom: Classroom, delivery: Delivery, portfolio: Portfolio, market: Market }[kind];
  return (
    <div
      className="relative h-full w-full overflow-hidden text-[10px] text-white/80 sm:text-[11px]"
      style={{ background: `radial-gradient(120% 90% at 100% 0%, ${c(30, 0.55)}, transparent 60%), linear-gradient(180deg, #0d0c0b, #090807)` }}
    >
      <Body c={c} />
    </div>
  );
}

type C = { c: (l: number, a?: number, s?: number) => string };

const Panel = ({ className = "", children, style }: { className?: string; children?: React.ReactNode; style?: React.CSSProperties }) => (
  <div className={`rounded-lg border border-white/10 bg-white/[0.04] ${className}`} style={style}>
    {children}
  </div>
);

/** Streaming AI tutor: subjects, a step-by-step answer mid-stream, stop control. */
function Tutor({ c }: C) {
  const subjects = ["Algebra", "Chemistry", "Essay help", "History"];
  return (
    <div className="flex h-full">
      <aside className="hidden w-[26%] flex-col gap-1.5 border-r border-white/10 p-3 sm:flex">
        <div className="mb-2 flex items-center gap-1.5 font-semibold text-white">
          <GraduationCap className="h-3.5 w-3.5" style={{ color: c(68) }} /> Tutorly
        </div>
        {subjects.map((s, i) => (
          <div key={s} className="flex items-center gap-2 rounded-md px-2 py-1.5" style={{ background: i === 0 ? c(50, 0.2) : "transparent" }}>
            <BookOpen className="h-3 w-3" style={{ color: c(55 + i * 8) }} /> {s}
          </div>
        ))}
        <div className="mt-auto rounded-md border border-dashed border-white/15 p-2 text-white/50">
          <Sparkles className="mb-1 h-3.5 w-3.5" /> 14-day streak
        </div>
      </aside>
      <main className="flex min-w-0 flex-1 flex-col gap-2.5 p-3 sm:p-4">
        <div className="ml-auto max-w-[72%] rounded-xl rounded-br-sm px-3 py-2 text-white" style={{ background: c(45, 0.9) }}>
          How do I solve 2x² − 8x + 6 = 0?
        </div>
        <div className="flex max-w-[86%] gap-2">
          <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full" style={{ background: c(60) }}>
            <Sparkles className="h-2.5 w-2.5 text-black" />
          </span>
          <Panel className="space-y-1.5 p-2.5">
            {[
              ["1", "Divide by 2 → x² − 4x + 3 = 0"],
              ["2", "Factor → (x − 1)(x − 3) = 0"],
            ].map(([n, t]) => (
              <div key={n} className="flex items-center gap-2">
                <span className="grid h-4 w-4 place-items-center rounded font-mono text-[9px]" style={{ background: c(50, 0.25), color: c(80) }}>
                  {n}
                </span>
                <span className="font-mono text-white/85">{t}</span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <span className="grid h-4 w-4 place-items-center rounded font-mono text-[9px]" style={{ background: c(50, 0.25), color: c(80) }}>
                3
              </span>
              <span className="font-mono text-white/85">So x = 1 or x</span>
              <span className="caret -ml-1.5 inline-block h-3 w-1.5" style={{ background: c(70) }} />
            </div>
          </Panel>
        </div>
        <div className="hidden flex-wrap gap-1.5 pl-6 sm:flex">
          {["Why can we divide by 2?", "Try a similar problem", "Use the quadratic formula"].map((s) => (
            <span key={s} className="rounded-full border border-white/10 px-2 py-1 text-white/60">
              {s}
            </span>
          ))}
        </div>
        <div className="mx-auto flex items-center gap-1.5 rounded-full border border-white/15 px-2.5 py-1 text-white/60">
          <Square className="h-2.5 w-2.5" style={{ fill: c(65), color: c(65) }} /> Stop generating
        </div>
        <Panel className="mt-auto flex items-center gap-2 px-3 py-2 text-white/40">
          <Paperclip className="h-3.5 w-3.5" /> <ImageIcon className="h-3.5 w-3.5" /> Ask a homework question…
          <span className="ml-auto grid h-5 w-5 place-items-center rounded-md" style={{ background: c(60) }}>
            <Send className="h-3 w-3 text-black" />
          </span>
        </Panel>
      </main>
    </div>
  );
}

/** Video lesson paused on a checkpoint quiz; pick an answer to see it graded. */
function Quiz({ c }: C) {
  const [pick, setPick] = useState<number | null>(null);
  const answers = ["Mitochondria", "Ribosome", "Nucleus", "Golgi body"];
  const right = 0;
  return (
    <div className="flex h-full">
      <div className="flex min-w-0 flex-1 flex-col p-3">
        <div className="relative flex-1 overflow-hidden rounded-lg" style={{ background: `linear-gradient(135deg, ${c(22, 1, 40)}, #0b0c0e)` }}>
          <span className="absolute left-2 top-2 rounded bg-black/50 px-1.5 py-0.5 text-white/70">Cell Biology · Lesson 4</span>
          <div className="absolute inset-0 grid place-items-center bg-black/35 p-3">
            <Panel className="w-full max-w-[300px] space-y-1.5 bg-[#121315]/95 p-2.5 backdrop-blur">
              <div className="flex items-center gap-1.5 font-semibold text-white">
                <ListChecks className="h-3.5 w-3.5" style={{ color: c(65) }} /> Checkpoint
              </div>
              <div className="text-white/80">Which organelle produces most of the cell&apos;s energy?</div>
              <div className="grid grid-cols-2 gap-1">
                {answers.map((a, i) => {
                  const chosen = pick === i;
                  const good = pick !== null && i === right;
                  return (
                    <button
                      key={a}
                      type="button"
                      onClick={() => setPick(i)}
                      onMouseEnter={() => setPick(i)}
                      className="flex items-center gap-1 rounded-md border px-1.5 py-1 text-left transition"
                      style={{
                        borderColor: good ? c(60) : chosen ? "rgb(248 113 113 / .7)" : "rgb(255 255 255 / .12)",
                        background: good ? c(45, 0.25) : chosen ? "rgb(248 113 113 / .12)" : "transparent",
                      }}
                    >
                      {good ? <Check className="h-2.5 w-2.5 shrink-0" style={{ color: c(70) }} /> : <CircleDot className="h-2.5 w-2.5 shrink-0 text-white/40" />}
                      <span className="truncate">{a}</span>
                    </button>
                  );
                })}
              </div>
            </Panel>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Pause className="h-3.5 w-3.5 text-white/60" />
          <div className="relative h-1 flex-1 rounded-full bg-white/10">
            <span className="absolute inset-y-0 left-0 w-[46%] rounded-full" style={{ background: c(60) }} />
            {[18, 46, 72, 90].map((x, i) => (
              <span key={x} className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black" style={{ left: `${x}%`, background: i < 2 ? c(65) : "rgb(255 255 255 / .35)" }} />
            ))}
          </div>
          <span className="font-mono text-white/50">4:12 / 9:03</span>
        </div>
      </div>
      <aside className="hidden w-[32%] flex-col gap-1.5 border-l border-white/10 p-2.5 sm:flex">
        <div className="flex items-center gap-1.5 font-semibold text-white">
          <Users className="h-3.5 w-3.5" style={{ color: c(65) }} /> Class 9B · live
        </div>
        {[["Ayesha", 100], ["Bilal", 75], ["Sara", 75], ["Omar", 50], ["Hina", 25]].map(([n, p]) => (
          <div key={n} className="space-y-0.5">
            <div className="flex justify-between text-white/60">
              <span>{n}</span>
              <span className="font-mono">{p}%</span>
            </div>
            <div className="h-1 rounded-full bg-white/10">
              <div className="h-full rounded-full" style={{ width: `${p}%`, background: c(45 + Number(p) / 5) }} />
            </div>
          </div>
        ))}
        <div className="mt-auto text-white/40">Checkpoint 2 · 18 / 24 answered</div>
      </aside>
    </div>
  );
}

/** Instructor workspace generating a course-grounded quiz from uploaded material. */
function Classroom({ c }: C) {
  const tools = [
    { t: "Quiz", on: true },
    { t: "Assignment" },
    { t: "Rubric" },
    { t: "Study guide" },
  ];
  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <span className="font-semibold text-white">CS 201 · Data Structures</span>
        <span className="ml-auto flex items-center gap-1 rounded px-1.5 py-0.5" style={{ background: c(45, 0.2), color: c(75) }}>
          <FileText className="h-3 w-3" /> 9 sources
        </span>
      </header>
      <div className="flex flex-1 gap-2 p-2">
        <div className="flex w-[34%] shrink-0 flex-col gap-1.5">
          {tools.map(({ t, on }) => (
            <Panel key={t} className="flex items-center gap-1.5 px-2 py-1.5" style={on ? { borderColor: c(55, 0.7), background: c(40, 0.2) } : undefined}>
              <Sparkles className="h-3 w-3" style={{ color: on ? c(65) : "rgb(255 255 255 / .35)" }} /> {t}
            </Panel>
          ))}
          <Panel className="mt-auto hidden space-y-1 p-2 text-white/60 sm:block">
            <div>Topic: Binary search trees</div>
            <div>Difficulty: ●●●○</div>
            <div>Format: 5 MCQ + 1 short</div>
          </Panel>
        </div>
        <Panel className="flex min-w-0 flex-1 flex-col gap-1.5 p-2.5">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-white">Draft · Quiz 3</span>
            <span className="hidden text-white/40 sm:inline">review before publishing</span>
          </div>
          {["What is the worst-case lookup time in an unbalanced BST?", "Which traversal visits nodes in sorted order?", "Insert 8, 3, 10, 1 — what is the root's left child?"].map((q, i) => (
            <div key={q} className="rounded-md border border-white/10 bg-black/20 p-1.5">
              <div className="truncate text-white/85">
                <span className="mr-1 font-mono" style={{ color: c(70) }}>
                  Q{i + 1}
                </span>
                {q}
              </div>
              <div className="mt-1 truncate text-[9px] text-white/40">Source: Lecture 7 · slide {12 + i * 3}</div>
            </div>
          ))}
          <div className="mt-auto flex justify-end gap-1.5">
            <span className="rounded-md border border-white/15 px-2 py-1">Edit</span>
            <span className="rounded-md px-2 py-1 font-semibold text-black" style={{ background: c(60) }}>
              Publish to class
            </span>
          </div>
        </Panel>
      </div>
    </div>
  );
}

/** Restaurant menu + cart with a live order tracker. */
function Delivery({ c }: C) {
  const items = [
    { n: "Smash Burger", p: "$11.50", q: 2 },
    { n: "Truffle Fries", p: "$5.00", q: 1 },
    { n: "Mango Lassi", p: "$4.25", q: 0 },
  ];
  const steps = [
    { I: Check, t: "Placed" },
    { I: ChefHat, t: "Preparing" },
    { I: Bike, t: "On the way" },
    { I: MapPin, t: "Delivered" },
  ];
  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center gap-3 border-b border-white/10 px-3 py-2">
        <span className="font-semibold text-white">MenuClick</span>
        <Panel className="flex flex-1 items-center gap-1.5 px-2 py-1 text-white/40">
          <Search className="h-3 w-3" /> Burgers near you…
        </Panel>
        <span className="relative">
          <ShoppingBag className="h-4 w-4" />
          <span className="absolute -right-1.5 -top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full text-[8px] font-bold text-black" style={{ background: c(60) }}>
            3
          </span>
        </span>
      </header>
      <div className="flex flex-1 gap-2 p-2">
        <div className="flex min-w-0 flex-1 flex-col gap-1.5">
          <div className="h-12 rounded-lg sm:h-16" style={{ background: `linear-gradient(120deg, ${c(40, 0.6, 70)}, ${c(20, 0.4, 50)})` }}>
            <div className="p-2 font-semibold text-white">Grill House · 4.8 ★ · 20–30 min</div>
          </div>
          {items.map(({ n, p, q }) => (
            <Panel key={n} className="flex items-center gap-2 p-1.5">
              <span className="h-7 w-7 shrink-0 rounded-md" style={{ background: `linear-gradient(160deg, ${c(45, 0.7, 70)}, ${c(25, 0.5)})` }} />
              <span className="flex-1 truncate text-white">{n}</span>
              <span style={{ color: c(72) }}>{p}</span>
              <span className="w-8 rounded-md border border-white/15 text-center">{q ? `× ${q}` : "+"}</span>
            </Panel>
          ))}
        </div>
        <Panel className="hidden w-[36%] flex-col gap-2 p-2.5 sm:flex">
          <span className="font-semibold text-white">Order #4821</span>
          {steps.map(({ I, t }, i) => (
            <div key={t} className="flex items-center gap-2">
              <span className="grid h-5 w-5 place-items-center rounded-full" style={{ background: i < 3 ? c(55) : "rgb(255 255 255 / .1)" }}>
                <I className="h-3 w-3" style={{ color: i < 3 ? "#000" : "rgb(255 255 255 / .5)" }} />
              </span>
              <span className={i === 2 ? "text-white" : "text-white/55"}>{t}</span>
              {i === 2 && <span className="pulse-dot ml-auto h-1.5 w-1.5 rounded-full" style={{ background: c(65) }} />}
            </div>
          ))}
          <div className="mt-auto rounded-md bg-black/30 p-1.5 text-white/60">Rider is 4 min away</div>
        </Panel>
      </div>
    </div>
  );
}

/** Crypto portfolio dashboard: balance, performance line, allocation donut, goal. */
function Portfolio({ c }: C) {
  const line = "M0,70 C8,62 14,66 22,55 S36,40 44,46 S58,30 66,28 S80,34 88,18 S96,12 100,10";
  const alloc = [
    { t: "BTC", v: 46 },
    { t: "ETH", v: 28 },
    { t: "SOL", v: 16 },
    { t: "Other", v: 10 },
  ].map((a, i, all) => ({ ...a, start: all.slice(0, i).reduce((sum, b) => sum + b.v, 0) }));
  return (
    <div className="flex h-full flex-col gap-2 p-3">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-white/50">Portfolio value</div>
          <div className="text-xl font-semibold text-white sm:text-2xl">$48,219.40</div>
        </div>
        <span className="flex items-center gap-0.5 rounded px-1.5 py-0.5" style={{ background: c(45, 0.2), color: c(75) }}>
          <ArrowUpRight className="h-3 w-3" /> 12.4% · 30d
        </span>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-2">
        <Panel className="relative col-span-3 min-h-0 sm:col-span-2">
          <div className="absolute left-2 top-1.5 flex gap-1.5 text-white/40">
            {["1D", "1W", "1M", "1Y"].map((t) => (
              <span key={t} className="rounded px-1" style={t === "1M" ? { background: c(50, 0.25), color: c(80) } : undefined}>
                {t}
              </span>
            ))}
          </div>
          <svg viewBox="0 0 100 80" preserveAspectRatio="none" className="absolute inset-x-2 bottom-2 top-6 h-[calc(100%-2rem)] w-[calc(100%-1rem)]">
            <defs>
              <linearGradient id="pf-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor={c(60, 0.35)} />
                <stop offset="1" stopColor={c(60, 0)} />
              </linearGradient>
            </defs>
            <path d={`${line} L100,80 L0,80 Z`} fill="url(#pf-fill)" />
            <path d={line} fill="none" stroke={c(65)} strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
        </Panel>
        <Panel className="hidden flex-col items-center justify-center gap-1.5 p-2 sm:flex">
          <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
            {alloc.map((a, i) => (
              <circle key={a.t} cx="18" cy="18" r="14" fill="none" strokeWidth="5" stroke={c(70 - i * 12, 1 - i * 0.15)} strokeDasharray={`${a.v * 0.88} 88`} strokeDashoffset={-a.start * 0.88} pathLength={88} />
            ))}
          </svg>
          <div className="grid w-full grid-cols-2 gap-x-1.5 text-[9px] text-white/60">
            {alloc.map((a, i) => (
              <span key={a.t} className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: c(70 - i * 12) }} />
                {a.t} {a.v}%
              </span>
            ))}
          </div>
        </Panel>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { t: "BTC", p: "$67,410", d: "+2.1%", up: true },
          { t: "ETH", p: "$3,522", d: "−0.8%", up: false },
        ].map((r) => (
          <Panel key={r.t} className="p-1.5">
            <div className="flex justify-between text-white/50">
              <span>{r.t}</span>
              <span className={r.up ? "" : "text-red-400"} style={r.up ? { color: c(72) } : undefined}>
                {r.d}
              </span>
            </div>
            <div className="font-semibold text-white">{r.p}</div>
          </Panel>
        ))}
        <Panel className="p-1.5">
          <div className="flex items-center gap-1 text-white/50">
            <Target className="h-3 w-3" style={{ color: c(65) }} /> Goal $60K
          </div>
          <div className="mt-1 h-1 rounded-full bg-white/10">
            <div className="h-full w-[80%] rounded-full" style={{ background: c(60) }} />
          </div>
        </Panel>
      </div>
    </div>
  );
}

/** Tokenised-asset marketplace: listing chart, order book, wallet-backed buy. */
function Market({ c }: C) {
  // [open, close, low, high] in % of chart height.
  const candles = [[30, 38, 26, 42], [38, 44, 34, 48], [44, 40, 36, 47], [40, 52, 38, 56], [52, 48, 44, 55], [48, 58, 46, 62], [58, 54, 50, 60], [54, 62, 52, 66], [62, 60, 56, 65], [60, 70, 58, 74], [70, 66, 62, 72], [66, 76, 64, 80]];
  const asks = [["12.84", "420"], ["12.80", "1,150"], ["12.77", "860"]];
  const bids = [["12.74", "940"], ["12.70", "1,620"], ["12.66", "380"]];
  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <span className="font-semibold text-white">Dopewarz</span>
        <span className="text-white/40">/ Gold-backed · DWG</span>
        <span className="ml-auto flex items-center gap-1 rounded-full border border-white/15 px-2 py-0.5">
          <Wallet className="h-3 w-3" style={{ color: c(65) }} /> 0x7a…3f9c
        </span>
      </header>
      <div className="flex flex-1 gap-2 p-2">
        <Panel className="flex min-w-0 flex-1 flex-col p-2">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold text-white">12.76</span>
            <span style={{ color: c(72) }}>+4.2%</span>
          </div>
          <div className="relative flex flex-1 gap-1.5 pt-2">
            {candles.map(([o, cl, lo, hi], i) => {
              const col = cl >= o ? c(60) : "rgb(248 113 113 / .85)";
              return (
                <span key={i} className="relative flex-1">
                  <span className="absolute left-1/2 w-px -translate-x-1/2" style={{ bottom: `${lo}%`, height: `${hi - lo}%`, background: col }} />
                  <span className="absolute inset-x-0 rounded-[1px]" style={{ bottom: `${Math.min(o, cl)}%`, height: `${Math.max(2, Math.abs(cl - o))}%`, background: col }} />
                </span>
              );
            })}
          </div>
        </Panel>
        <div className="flex w-[38%] flex-col gap-1.5">
          <Panel className="space-y-0.5 p-1.5 font-mono text-[9px]">
            {asks.map(([p, s]) => (
              <div key={p} className="flex justify-between text-red-400/90">
                <span>{p}</span>
                <span className="text-white/45">{s}</span>
              </div>
            ))}
            <div className="my-0.5 h-px bg-white/10" />
            {bids.map(([p, s]) => (
              <div key={p} className="flex justify-between" style={{ color: c(72) }}>
                <span>{p}</span>
                <span className="text-white/45">{s}</span>
              </div>
            ))}
          </Panel>
          <Panel className="flex flex-1 flex-col gap-1.5 p-1.5">
            <div className="grid grid-cols-2 gap-1 text-center">
              <span className="rounded py-0.5 font-semibold text-black" style={{ background: c(60) }}>
                Buy
              </span>
              <span className="rounded border border-white/10 py-0.5">Sell</span>
            </div>
            <div className="flex justify-between text-white/60">
              <span>Amount</span>
              <span className="text-white">250 DWG</span>
            </div>
            <div className="mt-auto flex items-center gap-1 text-white/55">
              <ArrowDownRight className="h-3 w-3" style={{ color: c(65) }} /> Tx pending · 1 / 3 confirmations
            </div>
          </Panel>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-3 pb-2 text-white/40">
        <Play className="h-2.5 w-2.5" style={{ color: c(65) }} /> Live · 1,204 trades today
      </div>
    </div>
  );
}
