"use client";
import { useEffect, useState } from "react";
import { getDictionary, type Locale } from "../../lib/i18n";
import Badge from "../../components/Badge";
import PhoneFrame from "../../components/PhoneFrame";

export default function Page({ params }: { params: { locale: Locale } }) {
  const [t, setT] = useState<any>(null);
  useEffect(() => {
    getDictionary(params.locale).then(setT);
  }, [params.locale]);
  if (!t) return null;

  return (
    <div className="min-h-screen w-full">
      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-2xl shadow-lg btn-primary" />
          <span className="text-lg font-semibold tracking-wide">
            NeuroFocus
          </span>
        </div>
        <nav className="hidden gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-adaptive-secondary hover:text-adaptive-primary"
          >
            Features
          </a>
          <a
            href="#modes"
            className="text-sm text-adaptive-secondary hover:text-adaptive-primary"
          >
            Modes
          </a>
          <a
            href="#science"
            className="text-sm text-adaptive-secondary hover:text-adaptive-primary"
          >
            Science
          </a>
          <a
            href="#pricing"
            className="text-sm text-adaptive-secondary hover:text-adaptive-primary"
          >
            Pricing
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-xl px-4 py-2 text-sm text-adaptive-secondary hover:text-adaptive-primary md:block">
            Sign in
          </button>
          <button className="rounded-xl px-4 py-2 text-sm font-medium transition hover:scale-[1.02] btn-primary">
            {t.brand.cta}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-8 pb-20 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-adaptive-tertiary">{t.hero.p}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button className="rounded-2xl px-5 py-3 text-sm font-medium backdrop-blur hover-lift transition hover:bg-white/15 btn-secondary">
              {t.hero.try}
            </button>
            <button className="rounded-2xl px-5 py-3 text-sm font-medium text-adaptive-secondary hover-lift transition hover:bg-white/5 btn-outline">
              {t.hero.how}
            </button>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-adaptive-quaternary">
            <Badge color="#34d399">{t.hero.badges[0]}</Badge>
            <Badge color="#38bdf8" delay="200ms">
              {t.hero.badges[1]}
            </Badge>
            <Badge color="#6366f1" delay="400ms">
              {t.hero.badges[2]}
            </Badge>
          </div>
        </div>

        {/* Player mock */}
        <div className="relative card-enter">
          <div className="relative mx-auto w-full max-w-md rounded-3xl p-5 shadow-2xl backdrop-blur card-hover card-bg">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-xl btn-primary" />
                <div>
                  <p className="text-sm font-semibold">
                    Deep Focus • Beta waves
                  </p>
                  <p className="text-xs text-adaptive-quaternary">
                    Adaptive · 45 min
                  </p>
                </div>
              </div>
              <div className="text-xs text-adaptive-quaternary">Hi‑Fi</div>
            </div>
            <div className="mb-5 flex h-24 items-end justify-between gap-[2px] px-2">
              {Array.from({ length: 48 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-full audio-bar"
                  style={{
                    background: "rgba(255,255,255,0.3)",
                    height: `${30 + Math.abs(Math.sin(i / 2)) * 60}px`,
                    animationDelay: `${i * 40}ms`,
                    animationDuration: `${2 + (i % 5) * 0.2}s`,
                  }}
                />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <button className="rounded-xl px-4 py-2 text-sm hover:bg-white/10 hover-lift btn-outline">
                ◄◄
              </button>
              <button className="rounded-full px-6 py-3 text-base font-semibold hover-lift btn-primary">
                ▶
              </button>
              <button className="rounded-xl px-4 py-2 text-sm hover:bg-white/10 hover-lift btn-outline">
                ►►
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-2xl font-semibold md:text-3xl">{t.features.h2}</h2>
        <p className="mt-2 max-w-2xl text-adaptive-tertiary">{t.features.p}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {t.features.items.map((f: any, i: number) => (
            <div
              key={i}
              className="rounded-2xl p-6 shadow-xl card-enter card-stagger card-hover card-bg"
            >
              <div className="mb-3 h-10 w-10 rounded-xl btn-primary" />
              <h3 className="text-lg font-semibold">{f.t}</h3>
              <p className="mt-1 text-sm text-adaptive-tertiary">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modes */}
      <section id="modes" className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">{t.modes.h2}</h2>
            <p className="mt-2 text-adaptive-tertiary">{t.modes.p}</p>
            <div className="mt-6 space-y-4">
              {t.modes.items.map((m: any, i: number) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-2xl p-5 card-hover card-bg"
                >
                  <div className="mt-1 h-8 w-8 flex-shrink-0 rounded-xl btn-primary" />
                  <div>
                    <div className="text-sm text-adaptive-quaternary">
                      {m.tag}
                    </div>
                    <div className="text-base font-semibold">{m.name}</div>
                    <div className="text-sm text-adaptive-tertiary">
                      {m.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl p-6 card-bg">
            <div className="mb-2 text-xs text-adaptive-quaternary">
              Session preview
            </div>
            <div
              className="relative h-48 w-full overflow-hidden rounded-2xl"
              style={{
                background: "linear-gradient(45deg, #0a1024, #131b3a, #0a1024)",
              }}
            >
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 h-full w-px"
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    left: `${(i + 1) * (100 / 8)}%`,
                  }}
                />
              ))}
              {[...Array(28)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bottom-0 w-2 rounded-t"
                  style={{
                    left: `${i * (100 / 28)}%`,
                    height: `${20 + (Math.sin(i / 2) + 1) * 30}%`,
                    background: `#38bdf880`,
                  }}
                />
              ))}
              <div
                className="absolute inset-x-0 bottom-6 h-0.5"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                }}
              />
              <div
                className="absolute inset-x-0 bottom-4 h-0.5"
                style={{
                  background: `linear-gradient(90deg, transparent, #38bdf866, transparent)`,
                }}
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm">
                <div className="font-semibold">Deep Focus</div>
                <div className="text-adaptive-quaternary">45:00 • Adaptive</div>
              </div>
              <button className="rounded-xl px-4 py-2 text-sm hover:bg-white/15 btn-secondary">
                {t.modes.start}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Science */}
      <section id="science" className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              {t.science.h2}
            </h2>
            <p className="mt-2 text-adaptive-tertiary">{t.science.p}</p>
            <ul className="mt-4 space-y-2 text-sm text-adaptive-tertiary">
              {t.science.bullets.map((b: string, i: number) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <button
                className="rounded-xl px-4 py-2 text-sm hover:bg-white/15"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                {t.science.read}
              </button>
              <button
                className="rounded-xl border px-4 py-2 text-sm text-adaptive-secondary hover:bg白/5"
                style={{ borderColor: "rgba(255,255,255,0.15)" }}
              >
                {t.science.see}
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl p-6 card-bg">
            <div className="text-xs text白/60">EEG‑inspired mock</div>
            <div className="mt-3 grid grid-cols-12 gap-1">
              {Array.from({ length: 72 }).map((_, i) => (
                <div
                  key={i}
                  className="h-10 w-full rounded"
                  style={{
                    background: `linear-gradient(180deg, #6366f133, #38bdf81A)`,
                    opacity: 0.4 + Math.sin(i / 4) * 0.15,
                  }}
                />
              ))}
            </div>
            <div
              className="absolute inset-0 -z-10 animate-pulse"
              style={{ background: `#6366f11A`, filter: "blur(32px)" }}
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl p-8 text-center card-bg">
          <h2 className="text-2xl font-semibold md:text-3xl">{t.pricing.h2}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-adaptive-tertiary">
            {t.pricing.p}
          </p>
          <div className="mx-auto mt-6 grid max-w-3xl gap-4 md:grid-cols-3">
            {t.pricing.plans.map((p: any, i: number) => (
              <div
                key={i}
                className="rounded-2xl p-6 text-left card-enter card-hover card-bg"
                style={{
                  border: i === 1 ? "1px solid #38bdf866" : undefined,
                  boxShadow: i === 1 ? "0 20px 60px -20px #38bdf84D" : "none",
                }}
              >
                <div className="text-sm text-adaptive-quaternary">{p.plan}</div>
                <div className="mt-1 text-3xl font-bold">{p.price}</div>
                <ul className="mt-3 space-y-2 text-sm text-adaptive-tertiary">
                  {p.perks.map((perk: string, j: number) => (
                    <li key={j}>• {perk}</li>
                  ))}
                </ul>
                <button
                  className={`mt-5 w-full rounded-xl px-4 py-2 text-sm font-semibold ${
                    i === 1 ? "btn-primary" : "btn-default"
                  }`}
                >
                  {t.pricing.choose} {p.plan}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 pb-10">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl p-6 md:flex-row card-bg">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-2xl btn-primary" />
            <span className="text-sm font-semibold">NeuroFocus</span>
          </div>
          <div className="text-xs text-adaptive-quaternary">
            © {new Date().getFullYear()} NeuroFocus. Functional audio for focus,
            relax & sleep.
          </div>
          <div className="flex gap-4 text-sm text-adaptive-tertiary">
            <a href="#" className="hover:text-adaptive-primary">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-adaptive-primary">
              {t.footer.terms}
            </a>
            <a href="#" className="hover:text-adaptive-primary">
              {t.footer.support}
            </a>
          </div>
        </div>
        <div className="pt-6 text-center text-xs text-adaptive-quaternary">
          {t.footer.note}
        </div>
      </footer>
    </div>
  );
}
