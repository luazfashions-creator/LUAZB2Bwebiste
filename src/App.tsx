import { useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Globe, ArrowRight, Check } from "lucide-react";

// Fade-in animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-[var(--color-offwhite)] text-[var(--color-charcoal)] font-sans antialiased overflow-x-hidden selection:bg-[var(--color-stone)] selection:text-[var(--color-charcoal)]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-6 py-4 flex justify-between items-center z-50 bg-[var(--color-offwhite)]/90 backdrop-blur-md text-[var(--color-charcoal)] border-b border-[var(--color-stone)]">
        <div className="text-xl font-medium tracking-tight">LUAZ</div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2">
            <button onClick={() => i18n.changeLanguage('en')} className={`transition-colors ${i18n.language === 'en' ? 'font-bold' : 'text-[#8C857B] hover:text-[#2A2A28]'}`}>EN</button>
            <span className="text-[#E5E3DF]">|</span>
            <button onClick={() => i18n.changeLanguage('de')} className={`transition-colors ${i18n.language === 'de' ? 'font-bold' : 'text-[#8C857B] hover:text-[#2A2A28]'}`}>DE</button>
          </div>
          <a href="#inquiry" className="bg-[var(--color-charcoal)] text-[var(--color-offwhite)] px-4 py-2 rounded-full hover:bg-[var(--color-charcoal-muted)] transition-colors">
            {t("nav.inquiry")}
          </a>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero.png" alt="LUAZ Wellness Experience" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-[#FAFAF8] flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-6"
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 text-white/90"
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#inquiry" className="bg-[#FAFAF8] text-[#2A2A28] px-8 py-4 rounded-full font-medium hover:bg-[#E5E3DF] transition-colors flex items-center justify-center gap-2">
              {t("hero.ctaMain")} <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#companies" className="border border-[#FAFAF8]/40 text-[#FAFAF8] px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center">
              {t("hero.ctaSecondary")}
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. The Problem */}
      <section className="py-32 md:py-48 px-6 bg-[var(--color-offwhite)]">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-medium tracking-tight mb-16 text-[var(--color-charcoal-muted)]">
            {t("problem.title")}
          </motion.h2>
          
          <div className="flex flex-col gap-6 text-2xl md:text-4xl font-light text-[var(--color-earth)] mb-24">
            <motion.span variants={fadeInUp}>{t("problem.meetings")}</motion.span>
            <motion.span variants={fadeInUp}>{t("problem.notifications")}</motion.span>
            <motion.span variants={fadeInUp}>{t("problem.deadlines")}</motion.span>
            <motion.span variants={fadeInUp}>{t("problem.screens")}</motion.span>
            <motion.span variants={fadeInUp} className="font-medium text-[var(--color-charcoal)] pt-8">{t("problem.repeat")}</motion.span>
          </div>

          <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-medium tracking-tight text-[var(--color-charcoal)]">
            {t("problem.solution")}
          </motion.h2>
        </motion.div>
      </section>

      {/* 3. The Experience */}
      <section className="py-32 bg-[var(--color-stone)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">{t("experience.title")}</h2>
            <p className="text-xl md:text-2xl font-light text-[var(--color-charcoal-muted)] max-w-3xl mx-auto">{t("experience.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-[var(--color-stone-dark)]" />
            {[
              { id: "arrive", num: "01" },
              { id: "reset", num: "02" },
              { id: "experience", num: "03" },
              { id: "takeHome", num: "04" }
            ].map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative z-10"
              >
                <div className="w-3 h-3 rounded-full bg-[var(--color-charcoal)] mx-auto mb-8 hidden md:block" />
                <div className="text-sm font-medium tracking-widest text-[var(--color-earth)] mb-2">{step.num}</div>
                <h3 className="text-xl font-medium mb-4">{t(`experience.steps.${step.id}.title`)}</h3>
                <p className="text-[var(--color-charcoal-muted)] font-light leading-relaxed">{t(`experience.steps.${step.id}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What Makes LUAZ Different */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {["session", "gift", "platform", "companies"].map((item, i) => (
            <motion.div 
              key={item}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="border-t border-[var(--color-stone)] pt-8"
            >
              <h3 className="text-lg font-medium tracking-wide mb-4">{t(`different.${item}.title`)}</h3>
              <p className="text-[var(--color-charcoal-muted)] font-light leading-relaxed">{t(`different.${item}.desc`)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Simple for HR */}
      <section className="py-32 bg-[var(--color-charcoal)] text-[var(--color-offwhite)] px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-32 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h3 className="text-2xl font-medium mb-8 text-[var(--color-himalayan-deep)]">{t("hr.coordinates")}</h3>
            <ul className="space-y-4">
              {(t("hr.coordinatesList", { returnObjects: true }) as string[]).map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-light text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-himalayan-deep)]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[var(--color-offwhite)] text-[var(--color-charcoal)] p-12 lg:p-16 rounded-3xl">
            <h3 className="text-3xl font-medium mb-8">{t("hr.gets")}</h3>
            <ul className="space-y-6">
              {(t("hr.getsList", { returnObjects: true }) as string[]).map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xl font-medium">
                  <Check className="text-[var(--color-himalayan-deep)] w-6 h-6 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 6. The Products */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <img src="/images/products.png" alt="LUAZ Products" className="w-full h-auto rounded-xl object-cover" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">{t("products.title")}</h2>
            <p className="text-xl font-light text-[var(--color-charcoal-muted)] leading-relaxed">{t("products.desc")}</p>
          </motion.div>
        </div>
      </section>

      {/* 7. The Origin */}
      <section className="relative py-48 text-center px-6 text-[var(--color-offwhite)] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/horizon.png" alt="Himalayan Horizon" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[var(--color-charcoal)]/40 mix-blend-multiply" />
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-tight">{t("origin.title")}</h2>
          <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed">{t("origin.desc")}</p>
        </motion.div>
      </section>

      {/* 8. Tradition x Modern Wellness */}
      <section className="py-32 px-6 bg-[var(--color-offwhite)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] gap-8 items-center text-center">
            
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-right flex flex-col items-end">
              <h3 className="text-2xl font-medium mb-8 text-[var(--color-himalayan-deep)]">{t("tradition.traditionCol.title")}</h3>
              <ul className="space-y-6 text-lg font-light text-[var(--color-charcoal-muted)]">
                {(t("tradition.traditionCol.items", { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <div className="hidden md:flex flex-col items-center justify-center col-span-2 md:col-span-1 h-full">
              <div className="w-[1px] h-32 bg-[var(--color-stone)] mb-8" />
              <div className="text-3xl font-medium tracking-widest">LUAZ</div>
              <div className="w-[1px] h-32 bg-[var(--color-stone)] mt-8" />
            </div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-left flex flex-col items-start">
              <h3 className="text-2xl font-medium mb-8 text-[var(--color-himalayan-deep)]">{t("tradition.todayCol.title")}</h3>
              <ul className="space-y-6 text-lg font-light text-[var(--color-charcoal-muted)]">
                {(t("tradition.todayCol.items", { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 9. Practitioners & Trust */}
      <section className="py-32 border-t border-[var(--color-stone)] bg-[var(--color-offwhite)] px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-32">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">{t("practitioners.title")}</h2>
            <p className="text-xl md:text-2xl font-light text-[var(--color-charcoal-muted)] max-w-2xl mx-auto leading-relaxed">{t("practitioners.desc")}</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-3 gap-12 text-[var(--color-himalayan-deep)] font-medium text-lg">
            <motion.div variants={fadeInUp}>{t("trust.pontu")}</motion.div>
            <motion.div variants={fadeInUp}>{t("trust.intersport")}</motion.div>
            <motion.div variants={fadeInUp}>{t("trust.longevity")}</motion.div>
          </motion.div>
        </div>
      </section>

      {/* 10. For Companies */}
      <section id="companies" className="py-32 bg-[var(--color-stone)] px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {(t("companies.steps", { returnObjects: true }) as {num: string, text: string}[]).map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex items-start gap-8"
              >
                <div className="text-xl font-medium text-[var(--color-earth)] pt-1">{step.num}</div>
                <div className="text-2xl md:text-4xl font-medium tracking-tight border-b border-[var(--color-stone-dark)] pb-8 w-full">
                  {step.text}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Inquiry */}
      <section id="inquiry" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-[var(--color-stone)]">
            <h2 className="text-3xl md:text-4xl font-medium mb-12">{t("companies.cta")}</h2>
            
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xl font-medium mb-4">{t("inquiry.q1")}</label>
                <input type="text" placeholder="e.g. 20-50" className="w-full text-xl font-light border-b border-[var(--color-stone)] pb-4 focus:outline-none focus:border-[var(--color-charcoal)] bg-transparent" />
              </div>
              
              <div>
                <label className="block text-xl font-medium mb-4">{t("inquiry.q2")}</label>
                <input type="text" placeholder="Office location or remote" className="w-full text-xl font-light border-b border-[var(--color-stone)] pb-4 focus:outline-none focus:border-[var(--color-charcoal)] bg-transparent" />
              </div>

              <div>
                <label className="block text-xl font-medium mb-6">{t("inquiry.q3")}</label>
                <div className="flex flex-wrap gap-4">
                  {(t("inquiry.feelings", { returnObjects: true }) as string[]).map((feeling, i) => (
                    <button key={i} type="button" className="px-6 py-3 border border-[var(--color-stone)] rounded-full text-lg font-light hover:border-[var(--color-charcoal)] hover:bg-[var(--color-offwhite)] transition-colors focus:bg-[var(--color-charcoal)] focus:text-[var(--color-offwhite)]">
                      {feeling}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-[var(--color-stone)]">
                <input type="text" placeholder={t("inquiry.form.name")} className="w-full text-lg font-light border-b border-[var(--color-stone)] pb-4 focus:outline-none focus:border-[var(--color-charcoal)] bg-transparent" />
                <input type="text" placeholder={t("inquiry.form.company")} className="w-full text-lg font-light border-b border-[var(--color-stone)] pb-4 focus:outline-none focus:border-[var(--color-charcoal)] bg-transparent" />
                <input type="email" placeholder={t("inquiry.form.email")} className="w-full text-lg font-light border-b border-[var(--color-stone)] pb-4 focus:outline-none focus:border-[var(--color-charcoal)] bg-transparent md:col-span-2" />
              </div>

              <button type="submit" className="w-full bg-[var(--color-charcoal)] text-[var(--color-offwhite)] text-xl font-medium py-6 rounded-xl hover:bg-[#1F1F1E] transition-colors flex items-center justify-center gap-3">
                {t("inquiry.cta")} <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 11.5 FAQ */}
      <section className="py-32 bg-[var(--color-offwhite)] px-6 border-t border-[var(--color-stone)]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">{t("faq.title")}</h2>
          </motion.div>
          
          <div className="space-y-8">
            {(t("faq.items", { returnObjects: true }) as {q: string, a: string}[]).map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="border-b border-[var(--color-stone)] pb-8"
              >
                <h3 className="text-2xl font-medium mb-4 text-[var(--color-charcoal)]">{item.q}</h3>
                <p className="text-lg font-light text-[var(--color-charcoal-muted)] leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Final Section */}
      <section className="h-screen w-full flex flex-col items-center justify-center bg-[var(--color-charcoal)] text-[var(--color-offwhite)] text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/horizon.png" alt="Horizon" className="w-full h-full object-cover opacity-30" />
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative z-10">
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-medium tracking-tight mb-8">{t("final.title")}</h1>
          <p className="text-xl md:text-3xl font-light text-white/70 max-w-2xl mx-auto mb-16">{t("final.subtitle")}</p>
          <a href="#inquiry" className="inline-block bg-[var(--color-offwhite)] text-[var(--color-charcoal)] px-10 py-5 rounded-full text-lg font-medium hover:bg-[var(--color-stone)] transition-colors">
            {t("final.cta")}
          </a>
        </motion.div>
      </section>
    </div>
  );
}
