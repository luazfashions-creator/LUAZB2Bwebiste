import { useState, useEffect, type ReactNode } from "react"

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

const CALENDLY_URL = "https://calendly.com/luazfashions/30min"

function openCalendly() {
  window.Calendly?.initPopupWidget({ url: CALENDLY_URL })
}

// ─── Shared icon primitives ────────────────────────────────────────────────

function IconCheck({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none">
      <path d="M2 7l3.2 3.2L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconDocument({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <rect x="4" y="2" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function IconInvoice({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M6.5 6.5h7M6.5 9.5h7M6.5 12.5h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6.5 15.5l1.5-1.5 1.5 1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconShield({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path d="M10 2L4 5v5c0 4 2.5 6.5 6 8 3.5-1.5 6-4 6-8V5l-6-3z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconCalendar({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <rect x="2.5" y="3.5" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M6.5 2v3M13.5 2v3M2.5 8h15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function IconBuilding({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <rect x="3" y="4" width="14" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M7 4V2.5A1.5 1.5 0 018.5 1h3A1.5 1.5 0 0113 2.5V4" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <circle cx="10" cy="11" r="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  )
}

function IconGlobe({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M10 2.5c-2.5 2-3.5 4.5-3.5 7.5s1 5.5 3.5 7.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M10 2.5c2.5 2 3.5 4.5 3.5 7.5S12.5 15.5 10 17.5" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5" />
      <path d="M2.5 10h15" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
    </svg>
  )
}

function IconPen({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none">
      <path d="M9.5 2.5l2 2-7 7H2.5v-2l7-7z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
      <path d="M8 4l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

// ─── Logo ──────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 flex-shrink-0 group">
      <div className="w-8 h-8 rounded-xl bg-[#5B8C6A] flex items-center justify-center group-hover:bg-[#4D7A5A] transition-colors">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M9 2.5C6 2.5 3.5 5 3.5 8C3.5 11.5 6.5 14 9 15.5C11.5 14 14.5 11.5 14.5 8C14.5 5 12 2.5 9 2.5Z" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
          <line x1="9" y1="2.5" x2="9" y2="15.5" stroke="white" strokeWidth="1" opacity="0.45" />
          <line x1="3.5" y1="9" x2="14.5" y2="9" stroke="white" strokeWidth="1" opacity="0.45" />
        </svg>
      </div>
      <span className="font-serif text-[22px] text-[#1C1C1A] tracking-tight">LUAZ</span>
    </a>
  )
}

// ─── Hero Illustration ─────────────────────────────────────────────────────

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[460px] h-[500px] mx-auto">
      <svg viewBox="0 0 460 460" className="absolute inset-0 w-full h-[460px]" aria-hidden="true">
        {/* Background organic blob */}
        <path
          d="M230 28C312 18 402 94 412 182C422 270 358 368 268 388C178 408 80 354 50 262C20 170 62 76 154 46C178 38 208 30 230 28Z"
          fill="#EDF4EF"
        />
        {/* Inner blob, subtler */}
        <path
          d="M230 80C285 72 345 120 350 178C355 236 315 298 258 312C201 326 138 292 118 240C98 188 128 122 180 102C200 94 215 84 230 80Z"
          fill="#D8EDD8"
          opacity="0.45"
        />

        {/* Concentric zen circles */}
        <circle cx="230" cy="192" r="85" stroke="#5B8C6A" strokeWidth="0.8" fill="none" opacity="0.18" />
        <circle cx="230" cy="192" r="60" stroke="#5B8C6A" strokeWidth="0.9" fill="none" opacity="0.25" />
        <circle cx="230" cy="192" r="36" stroke="#5B8C6A" strokeWidth="1.2" fill="none" opacity="0.4" />
        <circle cx="230" cy="192" r="8" fill="#5B8C6A" opacity="0.3" />
        <circle cx="230" cy="192" r="3.5" fill="#5B8C6A" opacity="0.65" />

        {/* Tree pose figure */}
        {/* Ground shadow */}
        <ellipse cx="230" cy="388" rx="28" ry="5" fill="#5B8C6A" opacity="0.12" />
        {/* Standing leg */}
        <line x1="230" y1="340" x2="230" y2="385" stroke="#5B8C6A" strokeWidth="2.2" strokeLinecap="round" />
        {/* Torso */}
        <line x1="230" y1="295" x2="230" y2="340" stroke="#5B8C6A" strokeWidth="2.4" strokeLinecap="round" />
        {/* Bent knee (tree pose) */}
        <path d="M230 355 C218 358 208 368 212 382" stroke="#5B8C6A" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Arms raised */}
        <path d="M230 310 C220 300 208 286 214 274" stroke="#5B8C6A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M230 310 C240 300 252 286 246 274" stroke="#5B8C6A" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Head */}
        <circle cx="230" cy="281" r="14" stroke="#5B8C6A" strokeWidth="2" fill="#EDF4EF" />

        {/* Decorative scatter dots */}
        <circle cx="128" cy="148" r="4.5" fill="#5B8C6A" opacity="0.18" />
        <circle cx="338" cy="130" r="6.5" fill="#5B8C6A" opacity="0.13" />
        <circle cx="345" cy="338" r="4.5" fill="#5B8C6A" opacity="0.13" />
        <circle cx="112" cy="312" r="3.5" fill="#5B8C6A" opacity="0.18" />
        <circle cx="358" cy="228" r="3" fill="#5B8C6A" opacity="0.22" />

        {/* Leaf/petal accents */}
        <path d="M362 195 C358 188 353 185 351 190 C354 194 360 198 362 195Z" fill="#5B8C6A" opacity="0.32" />
        <path d="M98 215 C102 208 107 205 109 210 C106 214 100 218 98 215Z" fill="#5B8C6A" opacity="0.28" />
        <path d="M160 88 C157 82 153 80 151 84 C154 88 158 92 160 88Z" fill="#5B8C6A" opacity="0.28" />
        <path d="M305 72 C308 66 313 64 315 68 C312 72 307 76 305 72Z" fill="#5B8C6A" opacity="0.22" />
      </svg>

      {/* Floating card: Compliance */}
      <div className="absolute top-6 right-0 bg-white rounded-2xl shadow-[0_6px_24px_rgba(0,0,0,0.08)] px-4 py-3 border border-[#E5E5E0] flex items-center gap-3 min-w-[168px]">
        <div className="w-8 h-8 rounded-xl bg-[#EDF4EF] flex items-center justify-center flex-shrink-0">
          <IconCheck className="w-3.5 h-3.5 text-[#5B8C6A]" />
        </div>
        <div>
          <div className="text-[11px] font-semibold text-[#1C1C1A] leading-tight">Compliance file</div>
          <div className="text-[10px] text-[#6B6B63] mt-0.5">ready for payroll</div>
        </div>
      </div>

      {/* Floating card: Session */}
      <div className="absolute bottom-20 left-0 bg-white rounded-2xl shadow-[0_6px_24px_rgba(0,0,0,0.08)] px-4 py-3 border border-[#E5E5E0] flex items-center gap-3 min-w-[160px]">
        <div className="w-8 h-8 rounded-xl bg-[#EDF4EF] flex items-center justify-center flex-shrink-0">
          <IconCalendar className="w-3.5 h-3.5 text-[#5B8C6A]" />
        </div>
        <div>
          <div className="text-[11px] font-semibold text-[#1C1C1A] leading-tight">Session booked</div>
          <div className="text-[10px] text-[#6B6B63] mt-0.5">Thu 14:00 · Onsite</div>
        </div>
      </div>

      {/* Budget pill */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-8px] bg-[#3D6B4F] rounded-2xl px-4 py-3 text-center min-w-[82px]">
        <div className="font-serif text-[22px] text-white leading-none mb-1">€600</div>
        <div className="text-[9px] text-[#A8D0B8] leading-snug">tax-free<br />per year</div>
      </div>
    </div>
  )
}

// ─── Pill badge ─────────────────────────────────────────────────────────────

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[11px] font-semibold text-[#5B8C6A] uppercase tracking-[0.12em] mb-4">{children}</div>
  )
}

// ─── App ───────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const navLinks = [
    { label: "How it works", href: "#how-it-works" },
    { label: "For HR", href: "#for-hr" },
    { label: "For Instructors", href: "#for-instructors" },
    { label: "Personalized Gifting", href: "#gifting" },
  ]

  return (
    <div className="min-h-screen bg-[#FAFAF8] font-sans text-[#1C1C1A] overflow-x-hidden">

      {/* ══ HEADER ══════════════════════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? "bg-[#FAFAF8]/92 backdrop-blur-md shadow-[0_1px_0_#E5E5E0]"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <Logo />

          <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13.5px] text-[#6B6B63] hover:text-[#1C1C1A] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={openCalendly}
              className="hidden md:inline-flex items-center bg-[#5B8C6A] text-white text-[13.5px] font-medium px-5 py-2.5 rounded-full hover:bg-[#4D7A5A] transition-colors shadow-sm cursor-pointer"
            >
              Book a 15-min call
            </button>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-[#EDF4EF] transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="#1C1C1A" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-[#FAFAF8] border-t border-[#E5E5E0] px-6 py-5 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#1C1C1A] font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { openCalendly(); setMobileOpen(false) }}
              className="bg-[#5B8C6A] text-white text-sm font-medium px-5 py-3 rounded-full text-center mt-1 cursor-pointer"
            >
              Book a 15-min call
            </button>
          </div>
        )}
      </header>

      {/* ══ HERO ════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-[520px]">
          <span className="inline-flex items-center bg-[#EDF4EF] text-[#3D6B4F] text-[11px] font-semibold px-3.5 py-1.5 rounded-full mb-7 tracking-wide">
            For HR & People Teams in Germany
          </span>
          <h1 className="font-serif text-[52px] md:text-[60px] leading-[1.08] text-[#1C1C1A] mb-5">
            Sessions your team loves.{" "}
            <span className="text-[#5B8C6A]">Paperwork your payroll team trusts.</span>
          </h1>
          <p className="text-[17px] text-[#6B6B63] leading-relaxed mb-9 max-w-[460px]">
            LUAZ brings certified yoga, fitness & nutrition sessions to your team — onsite or offsite — fully documented for Germany's tax-free wellness budget.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={openCalendly}
              className="bg-[#5B8C6A] text-white font-medium px-7 py-3.5 rounded-full hover:bg-[#4D7A5A] transition-colors text-[14px] shadow-sm cursor-pointer"
            >
              Book a 15-min call
            </button>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 text-[14px] text-[#5B8C6A] font-medium group hover:gap-3 transition-all"
            >
              See how it works
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <HeroIllustration />
        </div>
      </section>

      {/* ══ TRUST STRIP ════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#E5E5E0] rounded-2xl overflow-hidden">
          {[
            {
              stat: "€600",
              headline: "tax-free wellness budget",
              sub: "per employee, per year — guaranteed by German law",
            },
            {
              stat: "100%",
              headline: "sessions with full compliance documentation",
              sub: "delivered — no exceptions, no chasing",
            },
            {
              stat: "0",
              headline: "hours of admin work",
              sub: "for your HR or payroll team",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`px-8 py-9 ${i < 2 ? "md:border-r border-b md:border-b-0 border-[#E5E5E0]" : ""}`}
            >
              <div className="font-serif text-[52px] leading-none text-[#5B8C6A] mb-3">{item.stat}</div>
              <div className="text-[14px] font-semibold text-[#1C1C1A] mb-1">{item.headline}</div>
              <div className="text-[13px] text-[#6B6B63]">{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ HOW IT WORKS ════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="font-serif text-[42px] text-[#1C1C1A]">Three steps. No surprises.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16 relative">
          {/* Connector lines */}
          <div className="hidden md:block absolute top-6 left-[calc(33%+12px)] right-[calc(33%+12px)] h-px bg-[#E5E5E0]" />

          {[
            {
              n: "1",
              title: "Tell us your team",
              desc: "Share your size, goals, and location — 5 minutes, no commitment.",
            },
            {
              n: "2",
              title: "We match & schedule",
              desc: "Vetted certified instructors, onsite or offsite, on a rhythm your team sets.",
            },
            {
              n: "3",
              title: "You get the paperwork",
              desc: "A full compliance file per session, structured for payroll and tax.",
            },
          ].map((step) => (
            <div key={step.n}>
              <div className="w-12 h-12 rounded-full border-2 border-[#5B8C6A] flex items-center justify-center mb-6 bg-[#FAFAF8]">
                <span className="font-serif text-xl text-[#5B8C6A]">{step.n}</span>
              </div>
              <h3 className="font-semibold text-[16px] text-[#1C1C1A] mb-2">{step.title}</h3>
              <p className="text-[14px] text-[#6B6B63] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ WHY LUAZ — TWO PILLARS ══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="font-serif text-[42px] text-[#1C1C1A]">Two things in one.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card A — Experience */}
          <div className="bg-[#EDF4EF] rounded-3xl p-10 md:p-12 flex flex-col gap-6">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M11 2C7.5 2 4.5 5 4.5 8.5C4.5 12.5 7.5 15.5 11 17.5C14.5 15.5 17.5 12.5 17.5 8.5C17.5 5 14.5 2 11 2Z" stroke="#5B8C6A" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                <line x1="11" y1="2" x2="11" y2="17.5" stroke="#5B8C6A" strokeWidth="1" opacity="0.35" />
                <line x1="4.5" y1="9" x2="17.5" y2="9" stroke="#5B8C6A" strokeWidth="1" opacity="0.35" />
              </svg>
            </div>
            <Eyebrow>The Experience</Eyebrow>
            <h3 className="font-serif text-[32px] text-[#1C1C1A] leading-[1.15]">
              Real sessions, on a rhythm your team looks forward to.
            </h3>
            <p className="text-[14px] text-[#4D7A5A] leading-relaxed">
              Certified yoga, fitness, and nutrition instructors who show up consistently — building the habit that actually sticks.
            </p>
          </div>

          {/* Card B — Compliance — deep sage pop */}
          <div className="bg-[#3D6B4F] rounded-3xl p-10 md:p-12 flex flex-col gap-6">
            <div className="w-12 h-12 rounded-2xl bg-[#4D7A5A] flex items-center justify-center">
              <IconShield className="w-[22px] h-[22px] text-white" />
            </div>
            <div className="text-[11px] font-semibold text-[#86C09B] uppercase tracking-[0.12em]">The Compliance</div>
            <h3 className="font-serif text-[32px] text-white leading-[1.15]">
              Every session ships with the documentation German tax law asks for.
            </h3>
            <p className="text-[14px] text-[#A8D0B8] leading-relaxed">
              So the spend is genuinely tax-free — not just claimed to be. Every time, without anyone chasing anyone.
            </p>
          </div>
        </div>
      </section>

      {/* ══ FOR HR & PEOPLE TEAMS ═══════════════════════════════════════════ */}
      <section id="for-hr" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-[#F5F5F2] rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <Eyebrow>For HR & People Teams</Eyebrow>
            <h2 className="font-serif text-[38px] md:text-[42px] text-[#1C1C1A] leading-[1.15] mb-5">
              One point of contact.<br />One compliant process.
            </h2>
            <p className="text-[15px] text-[#6B6B63] leading-relaxed mb-8">
              A single company-level agreement covers your whole team — no per-session paperwork, no chasing invoices.
            </p>
            <button
              onClick={openCalendly}
              className="inline-flex items-center bg-[#5B8C6A] text-white font-medium px-6 py-3 rounded-full hover:bg-[#4D7A5A] transition-colors text-[13.5px] cursor-pointer"
            >
              Book a 15-min call
            </button>
          </div>

          <div className="space-y-3">
            {[
              {
                icon: <IconDocument className="w-5 h-5 text-[#5B8C6A]" />,
                title: "One contract for the whole team",
                desc: "Covers every session, every employee — no re-signing.",
              },
              {
                icon: <IconInvoice className="w-5 h-5 text-[#5B8C6A]" />,
                title: "One monthly invoice",
                desc: "A single, clean invoice each month — not per session.",
              },
              {
                icon: <IconShield className="w-5 h-5 text-[#5B8C6A]" />,
                title: "Compliance report for payroll",
                desc: "Ready every time, structured for German tax documentation.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#E5E5E0] hover:border-[#C8DEC8] transition-colors">
                <div className="w-9 h-9 rounded-xl bg-[#EDF4EF] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-semibold text-[14px] text-[#1C1C1A] mb-1">{item.title}</div>
                  <div className="text-[12.5px] text-[#6B6B63]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ONSITE / OFFSITE ═════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-[42px] text-[#1C1C1A]">Wherever works for your team.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#EDF4EF] rounded-3xl p-10 md:p-12">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
              <IconBuilding className="w-[22px] h-[22px] text-[#5B8C6A]" />
            </div>
            <h3 className="font-serif text-[28px] text-[#1C1C1A] mb-3">Onsite — we come to you.</h3>
            <p className="text-[14px] text-[#4D7A5A] leading-relaxed">
              Office, meeting room, rooftop — no commute, no coordination overhead for your team.
            </p>
          </div>

          <div className="bg-[#F5F5F2] rounded-3xl p-10 md:p-12 border border-[#E5E5E0]">
            <div className="w-12 h-12 rounded-2xl bg-[#EDF4EF] flex items-center justify-center mb-6">
              <IconGlobe className="w-[22px] h-[22px] text-[#5B8C6A]" />
            </div>
            <h3 className="font-serif text-[28px] text-[#1C1C1A] mb-3">Offsite — we host you.</h3>
            <p className="text-[14px] text-[#6B6B63] leading-relaxed">
              Partner studios or outdoors — a proper reset, away from the desk and the screen.
            </p>
          </div>
        </div>
      </section>

      {/* ══ CERTIFIED INSTRUCTORS BADGE STRIP ═══════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col items-center gap-5">
          <p className="text-[11px] text-[#6B6B63] uppercase tracking-[0.14em] font-medium">
            Certified instructors already on LUAZ
          </p>
          <div className="flex items-center flex-wrap justify-center gap-3">
            {[
              { label: "Yoga", icon: "🧘" },
              { label: "Personal Training", icon: "🏋️" },
              { label: "Nutrition", icon: "🥗" },
            ].map(({ label, icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2.5 bg-[#EDF4EF] text-[#3D6B4F] text-[13px] font-medium px-5 py-2.5 rounded-full border border-[#C8DEC8]"
              >
                <span>{icon}</span>
                {label}
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B8C6A] opacity-60" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOR INSTRUCTORS ════════════════════════════════════════════════ */}
      <section id="for-instructors" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-[#F5F5F2] rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <Eyebrow>For Instructors</Eyebrow>
            <h2 className="font-serif text-[38px] md:text-[42px] text-[#1C1C1A] leading-[1.15] mb-5">
              Steady corporate work.<br />No chasing clients.
            </h2>
            <p className="text-[15px] text-[#6B6B63] leading-relaxed mb-8">
              Join LUAZ for consistent, well-paid corporate bookings — we handle the scheduling, contracts, and invoicing.
            </p>
            <button
              onClick={openCalendly}
              className="inline-flex items-center bg-[#5B8C6A] text-white font-medium px-6 py-3 rounded-full hover:bg-[#4D7A5A] transition-colors text-[13.5px] cursor-pointer"
            >
              Apply as an instructor
            </button>
          </div>

          <div className="space-y-3">
            {[
              {
                title: "Recurring bookings",
                desc: "Corporate clients book weekly or monthly — not once-off.",
              },
              {
                title: "We handle the admin",
                desc: "Contracts, invoicing, and compliance paperwork — not you.",
              },
              {
                title: "Onsite & offsite options",
                desc: "Teach from offices or our partner studio network.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#E5E5E0] hover:border-[#C8DEC8] transition-colors">
                <div className="w-7 h-7 rounded-full bg-[#EDF4EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <IconCheck className="w-3 h-3 text-[#5B8C6A]" />
                </div>
                <div>
                  <div className="font-semibold text-[14px] text-[#1C1C1A] mb-1">{item.title}</div>
                  <div className="text-[12.5px] text-[#6B6B63]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PERSONALIZED GIFTING ════════════════════════════════════════════ */}
      <section id="gifting" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-[#EDF4EF] rounded-3xl p-10 md:p-14">
          <div className="text-center mb-10 max-w-[560px] mx-auto">
            <Eyebrow>For Employees & Teams</Eyebrow>
            <h2 className="font-serif text-[38px] md:text-[42px] text-[#1C1C1A] leading-[1.15] mb-4">
              Personalized gifting, sorted by the occasion.
            </h2>
            <p className="text-[15px] text-[#4D7A5A] leading-relaxed">
              A gift curated to the person — up to €50, tax-free under German rules — with the compliance paperwork already done.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Birthday", image: "/images/gifting/birthday.jpg" },
              { label: "Onboarding", image: "/images/gifting/onboarding.jpg" },
              { label: "Work Anniversary", image: "/images/gifting/anniversary.jpg" },
              { label: "Holidays", image: "/images/gifting/holidays.jpg" },
            ].map(({ label, image }) => (
              <div
                key={label}
                className="bg-white rounded-2xl overflow-hidden border border-[#C8DEC8] text-center flex flex-col hover:shadow-md transition-shadow cursor-default"
              >
                <img
                  src={image}
                  alt={label}
                  className="w-full h-28 md:h-32 object-cover"
                />
                <span className="font-semibold text-[13px] text-[#1C1C1A] py-4">{label}</span>
              </div>
            ))}
          </div>

          {/* Single price line, stated once for all four occasions */}
          <div className="flex justify-center mb-5">
            <span className="text-[12px] text-[#3D6B4F] font-medium bg-white rounded-full px-4 py-1.5 border border-[#C8DEC8]">
              Every occasion above — up to €50, tax-free
            </span>
          </div>

          {/* Optional handwritten note tag */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white border border-[#C8DEC8] rounded-full px-4 py-2.5">
              <IconPen className="w-3.5 h-3.5 text-[#5B8C6A]" />
              <span className="text-[13px] font-medium text-[#3D6B4F]">Optional: add a handwritten note</span>
              <span className="text-[12px] text-[#6B6B63]">— a personal line, included with delivery</span>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={openCalendly}
              className="inline-flex items-center bg-[#5B8C6A] text-white font-medium px-7 py-3.5 rounded-full hover:bg-[#4D7A5A] transition-colors text-[13.5px] cursor-pointer"
            >
              Ask about gifting
            </button>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA BAND ══════════════════════════════════════════════════ */}
      <section id="cta" className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-[#3D6B4F] rounded-3xl px-10 py-16 md:py-22 text-center relative overflow-hidden">
          {/* Subtle background texture */}
          <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
            <svg width="100%" height="100%" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
              <circle cx="100" cy="80" r="120" fill="#EDF4EF" />
              <circle cx="500" cy="320" r="160" fill="#EDF4EF" />
              <circle cx="300" cy="200" r="80" fill="#EDF4EF" />
            </svg>
          </div>

          <div className="relative">
            <h2 className="font-serif text-[40px] md:text-[50px] text-white leading-[1.1] mb-4 max-w-[600px] mx-auto">
              Onboarding a small number of founding partner companies this quarter.
            </h2>
            <p className="text-[#A8D0B8] text-[15px] mb-9 max-w-[400px] mx-auto">
              15 minutes to see if it's a fit — no pressure, no obligation.
            </p>
            <button
              onClick={openCalendly}
              className="inline-flex items-center bg-white text-[#3D6B4F] font-semibold px-8 py-4 rounded-full hover:bg-[#EDF4EF] transition-colors text-[14px] shadow-md cursor-pointer"
            >
              Book a 15-min call
            </button>
            <div className="mt-6 text-[#86C09B] text-[13px]">info@luazwellness.de</div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════════════════════ */}
      <footer className="border-t border-[#E5E5E0]">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <Logo />
            <p className="text-[12px] text-[#6B6B63] pl-[42px]">
              Onsite & offsite wellness for German teams — compliant by design.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[12.5px] text-[#6B6B63] hover:text-[#1C1C1A] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <p className="text-[12px] text-[#6B6B63]">© 2026 LUAZ Wellness</p>
        </div>
      </footer>
    </div>
  )
}
