import { useState, useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, PenLine, Menu, X } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const HERO_SLIDES = [
  { image: "/images/hero.png", href: "#experience", duration: 4500 },
  { image: "/images/gifting-hero.jpg", href: "#gifting", duration: 5000 },
];
const OCCASION_IMAGES = ["birthday", "onboarding", "anniversary", "holidays"];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[11px] font-semibold text-[#A9832E] uppercase tracking-[0.14em] mb-4">{children}</div>
  );
}

function HeroCarousel() {
  const { t } = useTranslation();
  const slides = t("hero.slides", { returnObjects: true }) as { eyebrow: string; title: string; subtitle: string; cta: string }[];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setIndex((i) => (i + 1) % slides.length), HERO_SLIDES[index].duration);
    return () => clearTimeout(id);
  }, [index, slides.length]);

  const slide = slides[index];
  const meta = HERO_SLIDES[index];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img src={meta.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#221E17]/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center bg-white/12 backdrop-blur-sm border border-white/25 text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-full mb-7 tracking-wide uppercase">
              {slide.eyebrow}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[1.08] mb-6">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 text-white/85">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={meta.href} className="bg-white text-[#221E17] px-8 py-4 rounded-full font-medium hover:bg-[#F4EAD0] transition-colors flex items-center justify-center gap-2">
                {slide.cta} <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#inquiry" className="border border-white/40 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center">
                {t("companies.cta")}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${i === index ? "w-8 bg-white" : "w-1.5 bg-white/45 hover:bg-white/70"}`}
          />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const occasions = t("gifting.occasions", { returnObjects: true }) as string[];
  const faqItems = t("faq.items", { returnObjects: true }) as { q: string; a: string }[];
  const companiesSteps = t("companies.steps", { returnObjects: true }) as { num: string; text: string }[];
  const coordinatesList = t("hr.coordinatesList", { returnObjects: true }) as string[];
  const getsList = t("hr.getsList", { returnObjects: true }) as string[];
  const feelings = t("inquiry.feelings", { returnObjects: true }) as string[];
  const traditionItems = t("tradition.traditionCol.items", { returnObjects: true }) as string[];
  const todayItems = t("tradition.todayCol.items", { returnObjects: true }) as string[];

  const navLinks = [
    { label: t("nav.gifting"), href: "#gifting" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.companies"), href: "#companies" },
  ];

  return (
    <div className="bg-[#FAF7F1] text-[#221E17] font-sans antialiased overflow-x-hidden selection:bg-[#F4EAD0] selection:text-[#221E17]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 flex justify-between items-center z-50 bg-[#FAF7F1]/90 backdrop-blur-md border-b border-[#E6DECB]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#A9832E] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full border-2 border-white" />
          </div>
          <span className="font-serif text-xl tracking-tight">LUAZ</span>
        </div>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] text-[#6F6A5D] hover:text-[#221E17] transition-colors">{l.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 text-[12.5px]">
            <button onClick={() => i18n.changeLanguage("en")} className={`px-1.5 transition-colors ${i18n.language === "en" ? "font-bold text-[#221E17]" : "text-[#8C857B] hover:text-[#221E17]"}`}>EN</button>
            <span className="text-[#E3D2A6]">|</span>
            <button onClick={() => i18n.changeLanguage("de")} className={`px-1.5 transition-colors ${i18n.language === "de" ? "font-bold text-[#221E17]" : "text-[#8C857B] hover:text-[#221E17]"}`}>DE</button>
          </div>
          <a href="#inquiry" className="hidden sm:inline-flex bg-[#A9832E] text-white px-5 py-2.5 rounded-full text-[13px] font-medium hover:bg-[#8F6F27] transition-colors">
            {t("nav.inquiry")}
          </a>
          <button className="lg:hidden p-2 rounded-lg hover:bg-[#F4EAD0] transition-colors" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FAF7F1] border-t border-[#E6DECB] px-6 py-5 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium" onClick={() => setMobileOpen(false)}>{l.label}</a>
            ))}
            <a href="#inquiry" className="bg-[#A9832E] text-white text-sm font-medium px-5 py-3 rounded-full text-center" onClick={() => setMobileOpen(false)}>{t("nav.inquiry")}</a>
          </div>
        )}
      </nav>

      {/* 1. Hero — auto-sliding carousel: Wellness ↔ Gifting */}
      <HeroCarousel />

      {/* 2. The Problem */}
      <section className="py-32 md:py-48 px-6 bg-[#FAF7F1]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-4xl mx-auto text-center">
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-6xl tracking-tight mb-16 text-[#6F6A5D]">
            {t("problem.title")}
          </motion.h2>
          <div className="flex flex-col gap-6 text-2xl md:text-4xl font-light text-[#8A6A24] mb-24">
            <motion.span variants={fadeInUp}>{t("problem.meetings")}</motion.span>
            <motion.span variants={fadeInUp}>{t("problem.notifications")}</motion.span>
            <motion.span variants={fadeInUp}>{t("problem.deadlines")}</motion.span>
            <motion.span variants={fadeInUp}>{t("problem.screens")}</motion.span>
            <motion.span variants={fadeInUp} className="font-medium text-[#221E17] pt-8">{t("problem.repeat")}</motion.span>
          </div>
          <motion.h2 variants={fadeInUp} className="font-serif text-5xl md:text-7xl tracking-tight text-[#221E17]">
            {t("problem.solution")}
          </motion.h2>
        </motion.div>
      </section>

      {/* 3. PERSONALIZED GIFTING — priority #1 */}
      <section id="gifting" className="py-24 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-6xl mx-auto bg-[#F2EDE1] rounded-3xl p-10 md:p-14">
          <div className="text-center mb-10 max-w-[620px] mx-auto">
            <Eyebrow>{t("gifting.eyebrow")}</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.12] mb-5">
              {t("gifting.title")} {t("gifting.titleB")}
            </h2>
            <p className="text-[15px] text-[#8F6F27] leading-relaxed">{t("gifting.desc")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {occasions.map((label, i) => (
              <div key={label} className="bg-white rounded-2xl overflow-hidden border border-[#E3D2A6] text-center flex flex-col hover:shadow-md transition-shadow">
                <img src={`/images/gifting/${OCCASION_IMAGES[i]}.jpg`} alt={label} className="w-full h-32 md:h-36 object-cover" />
                <span className="font-semibold text-sm py-4">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-5">
            <span className="text-[12px] text-[#8A6A24] font-medium bg-white rounded-full px-4 py-1.5 border border-[#E3D2A6]">
              {t("gifting.priceNote")}
            </span>
          </div>

          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2 bg-white border border-[#E3D2A6] rounded-full px-4 py-2.5">
              <PenLine className="w-3.5 h-3.5 text-[#A9832E]" />
              <span className="text-[13px] font-medium text-[#8A6A24]">{t("gifting.noteLabel")}</span>
              <span className="text-[12px] text-[#6F6A5D]">— {t("gifting.noteDesc")}</span>
            </div>
          </div>

          <p className="text-center text-[12.5px] text-[#6F6A5D] mb-8">{t("gifting.companyNote")}</p>

          <div className="text-center">
            <a href="#inquiry" className="inline-flex items-center bg-[#A9832E] text-white font-medium px-7 py-3.5 rounded-full hover:bg-[#8F6F27] transition-colors text-[13.5px]">
              {t("gifting.cta")}
            </a>
          </div>
        </motion.div>
      </section>

      {/* 4. THE WELLNESS EXPERIENCE — priority #2 */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 text-center max-w-[620px] mx-auto">
            <Eyebrow>{t("experience.eyebrow")}</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-5">{t("experience.title")}</h2>
            <p className="text-[15px] text-[#6F6A5D]">{t("experience.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-12 relative mb-12">
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-[#E6DECB]" />
            {["arrive", "reset", "experience", "takeHome"].map((id, i) => (
              <motion.div key={id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }} className="relative z-10">
                <div className="w-3 h-3 rounded-full bg-[#A9832E] mx-auto mb-8 hidden md:block" />
                <div className="text-sm font-medium tracking-widest text-[#A9832E] mb-2">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="text-lg font-semibold mb-3">{t(`experience.steps.${id}.title`)}</h3>
                <p className="text-[14px] text-[#6F6A5D] font-light leading-relaxed">{t(`experience.steps.${id}.desc`)}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a href="#inquiry" className="inline-flex items-center bg-[#A9832E] text-white font-medium px-7 py-3.5 rounded-full hover:bg-[#8F6F27] transition-colors text-[13.5px]">
              {t("experience.cta")}
            </a>
          </div>
        </div>
      </section>

      {/* 5. What Makes LUAZ Different */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {["session", "gift", "platform", "companies"].map((item, i) => (
            <motion.div key={item} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: i * 0.1 }} className="border-t border-[#E6DECB] pt-8">
              <h3 className="text-[15px] font-semibold tracking-wide mb-4">{t(`different.${item}.title`)}</h3>
              <p className="text-[#6F6A5D] font-light leading-relaxed text-[14.5px]">{t(`different.${item}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Simple for HR */}
      <section id="companies" className="py-28 px-6">
        <div className="max-w-6xl mx-auto bg-[#F2EDE1] rounded-3xl p-10 md:p-16 grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h3 className="font-serif text-2xl mb-8 text-[#221E17]">{t("hr.coordinates")}</h3>
            <ul className="space-y-4">
              {coordinatesList.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[15px] font-light text-[#6F6A5D]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A9832E]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-10 lg:p-12 rounded-2xl border border-[#E6DECB]">
            <h3 className="font-serif text-2xl mb-8">{t("hr.gets")}</h3>
            <ul className="space-y-5">
              {getsList.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-medium">
                  <Check className="text-[#A9832E] w-5 h-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 7. Practitioners */}
      <section className="py-24 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">{t("practitioners.title")}</h2>
          <p className="text-lg md:text-xl font-light text-[#6F6A5D] leading-relaxed">{t("practitioners.desc")}</p>
        </motion.div>
      </section>

      {/* 8. Why LUAZ / Story */}
      <section className="py-24 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-6xl mx-auto bg-[#F2EDE1] rounded-3xl overflow-hidden grid md:grid-cols-2 items-stretch">
          <div className="order-2 md:order-1 p-10 md:p-14 flex flex-col justify-center">
            <Eyebrow>{t("story.eyebrow")}</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight leading-[1.15] mb-5">{t("story.title")}</h2>
            <p className="text-[15px] text-[#6F6A5D] leading-relaxed">{t("story.desc")}</p>
          </div>
          <div className="order-1 md:order-2 h-56 md:h-auto">
            <img src="/images/products.png" alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </section>

      {/* 9. Tradition x Today */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] gap-8 items-center text-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-right flex flex-col items-end">
              <h3 className="font-serif text-2xl mb-8 text-[#8A6A24]">{t("tradition.traditionCol.title")}</h3>
              <ul className="space-y-6 text-[15px] font-light text-[#6F6A5D]">
                {traditionItems.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </motion.div>

            <div className="hidden md:flex flex-col items-center justify-center col-span-2 md:col-span-1 h-full">
              <div className="w-px h-32 bg-[#E6DECB] mb-8" />
              <div className="font-serif text-2xl tracking-widest text-[#A9832E]">LUAZ</div>
              <div className="w-px h-32 bg-[#E6DECB] mt-8" />
            </div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-left flex flex-col items-start">
              <h3 className="font-serif text-2xl mb-8 text-[#8A6A24]">{t("tradition.todayCol.title")}</h3>
              <ul className="space-y-6 text-[15px] font-light text-[#6F6A5D]">
                {todayItems.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. How It Works */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            {companiesSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="flex items-start gap-8">
                <div className="text-lg font-medium text-[#A9832E] pt-1">{step.num}</div>
                <div className="text-xl md:text-3xl font-medium tracking-tight border-b border-[#E6DECB] pb-8 w-full">{step.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Inquiry */}
      <section id="inquiry" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-[#E6DECB]">
            <h2 className="font-serif text-3xl md:text-4xl mb-12">{t("companies.cta")}</h2>
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xl font-medium mb-4">{t("inquiry.q1")}</label>
                <input type="text" placeholder="e.g. 20-50" className="w-full text-xl font-light border-b border-[#E6DECB] pb-4 focus:outline-none focus:border-[#A9832E] bg-transparent" />
              </div>
              <div>
                <label className="block text-xl font-medium mb-4">{t("inquiry.q2")}</label>
                <input type="text" placeholder="Office location or remote" className="w-full text-xl font-light border-b border-[#E6DECB] pb-4 focus:outline-none focus:border-[#A9832E] bg-transparent" />
              </div>
              <div>
                <label className="block text-xl font-medium mb-6">{t("inquiry.q3")}</label>
                <div className="flex flex-wrap gap-4">
                  {feelings.map((feeling, i) => (
                    <button key={i} type="button" className="px-6 py-3 border border-[#E6DECB] rounded-full text-lg font-light hover:border-[#A9832E] hover:bg-[#FAF7F1] transition-colors focus:bg-[#A9832E] focus:text-white cursor-pointer">
                      {feeling}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-[#E6DECB]">
                <input type="text" placeholder={t("inquiry.form.name")} className="w-full text-lg font-light border-b border-[#E6DECB] pb-4 focus:outline-none focus:border-[#A9832E] bg-transparent" />
                <input type="text" placeholder={t("inquiry.form.company")} className="w-full text-lg font-light border-b border-[#E6DECB] pb-4 focus:outline-none focus:border-[#A9832E] bg-transparent" />
                <input type="email" placeholder={t("inquiry.form.email")} className="w-full text-lg font-light border-b border-[#E6DECB] pb-4 focus:outline-none focus:border-[#A9832E] bg-transparent md:col-span-2" />
              </div>
              <button type="submit" className="w-full bg-[#A9832E] text-white text-xl font-medium py-6 rounded-xl hover:bg-[#8F6F27] transition-colors flex items-center justify-center gap-3 cursor-pointer">
                {t("inquiry.cta")} <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-28 px-6 border-t border-[#E6DECB]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">{t("faq.title")}</h2>
          </motion.div>
          <div className="space-y-8">
            {faqItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="border-b border-[#E6DECB] pb-8">
                <h3 className="text-xl font-semibold mb-3">{item.q}</h3>
                <p className="text-[15px] font-light text-[#6F6A5D] leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Final Section */}
      <section className="py-32 w-full flex flex-col items-center justify-center bg-[#F2EDE1] text-center px-6 relative overflow-hidden">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative z-10">
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight mb-8 text-[#221E17]">{t("final.title")}</h1>
          <p className="text-lg md:text-2xl font-light text-[#6F6A5D] max-w-2xl mx-auto mb-14">{t("final.subtitle")}</p>
          <a href="#inquiry" className="inline-block bg-[#A9832E] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[#8F6F27] transition-colors">
            {t("final.cta")}
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E6DECB] px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#A9832E] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full border-2 border-white" />
            </div>
            <div>
              <div className="font-serif text-lg leading-tight">LUAZ</div>
              <div className="text-[12px] text-[#6F6A5D]">{t("footer.tagline")}</div>
            </div>
          </div>
          <p className="text-[12px] text-[#6F6A5D]">{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
