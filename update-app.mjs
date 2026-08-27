import fs from 'fs';

const path = './src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Add import
if (!content.includes('useTranslation')) {
  content = content.replace(
    'import { useState, useEffect, type ReactNode } from "react"',
    'import { useState, useEffect, type ReactNode } from "react"\nimport { useTranslation } from "react-i18next"'
  );
}

// 2. Add useTranslation hook and toggle function inside App
content = content.replace(
  'export default function App() {\n  const [scrolled, setScrolled] = useState(false)',
  `export default function App() {\n  const { t, i18n } = useTranslation();\n  const [scrolled, setScrolled] = useState(false)`
);

// 3. Update navLinks
content = content.replace(
  /const navLinks = \[\s*\{ label: "How it works", href: "#how-it-works" \},\s*\{ label: "For HR", href: "#for-hr" \},\s*\{ label: "For Instructors", href: "#for-instructors" \},\s*\{ label: "Personalized Gifting", href: "#gifting" \},\s*\]/,
  `const navLinks = [\n    { label: t('nav.howItWorks'), href: "#how-it-works" },\n    { label: t('nav.forHr'), href: "#for-hr" },\n    { label: t('nav.forInstructors'), href: "#for-instructors" },\n    { label: t('nav.gifting'), href: "#gifting" },\n  ]`
);

// 4. Update Header language toggle & buttons
content = content.replace(
  /<button\s+onClick=\{openCalendly\}\s+className="hidden md:inline-flex [^"]+">\s*Book a 15-min call\s*<\/button>/,
  `<div className="hidden md:flex items-center gap-2 mr-2 border border-[#E5E5E0] rounded-full p-1 bg-white">\n              <button onClick={() => i18n.changeLanguage('de')} className={\`text-[12px] font-medium px-3 py-1 rounded-full transition-colors \${i18n.language === 'de' ? 'bg-[#5B8C6A] text-white' : 'text-[#6B6B63] hover:bg-[#EDF4EF]'}\`}>DE</button>\n              <button onClick={() => i18n.changeLanguage('en')} className={\`text-[12px] font-medium px-3 py-1 rounded-full transition-colors \${i18n.language === 'en' ? 'bg-[#5B8C6A] text-white' : 'text-[#6B6B63] hover:bg-[#EDF4EF]'}\`}>EN</button>\n            </div>\n            <button\n              onClick={openCalendly}\n              className="hidden md:inline-flex items-center bg-[#5B8C6A] text-white text-[13.5px] font-medium px-5 py-2.5 rounded-full hover:bg-[#4D7A5A] transition-colors shadow-sm cursor-pointer"\n            >\n              {t('nav.bookCall')}\n            </button>`
);

content = content.replace(
  /<button\s+onClick=\{\(\) => \{\s+openCalendly\(\)\s+setMobileOpen\(false\)\s+\}\}\s+className="bg-\[\#5B8C6A\] text-white text-sm font-medium px-5 py-3 rounded-full text-center mt-1 cursor-pointer"\s*>\s*Book a 15-min call\s*<\/button>/,
  `<div className="flex items-center gap-2 justify-center mt-2 border border-[#E5E5E0] rounded-full p-1 bg-white self-center">\n              <button onClick={() => i18n.changeLanguage('de')} className={\`text-[12px] font-medium px-4 py-1.5 rounded-full transition-colors \${i18n.language === 'de' ? 'bg-[#5B8C6A] text-white' : 'text-[#6B6B63] hover:bg-[#EDF4EF]'}\`}>DE</button>\n              <button onClick={() => i18n.changeLanguage('en')} className={\`text-[12px] font-medium px-4 py-1.5 rounded-full transition-colors \${i18n.language === 'en' ? 'bg-[#5B8C6A] text-white' : 'text-[#6B6B63] hover:bg-[#EDF4EF]'}\`}>EN</button>\n            </div>\n            <button\n              onClick={() => {\n                openCalendly()\n                setMobileOpen(false)\n              }}\n              className="bg-[#5B8C6A] text-white text-sm font-medium px-5 py-3 rounded-full text-center mt-1 cursor-pointer"\n            >\n              {t('nav.bookCall')}\n            </button>`
);

// 5. Update Hero
content = content.replace('For HR & People Teams in Germany', '{t("hero.eyebrow")}');
content = content.replace('Sessions your team loves.{" "}', '{t("hero.title1")} ');
content = content.replace('Paperwork your payroll team trusts.', '{t("hero.title2")}');
content = content.replace(
  'LUAZ brings certified yoga, fitness & nutrition sessions to your\n            team — onsite or offsite — fully documented for Germany\'s tax-free\n            wellness budget.',
  '{t("hero.desc")}'
);
content = content.replace(
  /<button\s+onClick=\{openCalendly\}\s+className="bg-\[\#5B8C6A\] text-white font-medium px-7 py-3.5 rounded-full hover:bg-\[\#4D7A5A\] transition-colors text-\[14px\] shadow-sm cursor-pointer"\s*>\s*Book a 15-min call\s*<\/button>/,
  `<button\n              onClick={openCalendly}\n              className="bg-[#5B8C6A] text-white font-medium px-7 py-3.5 rounded-full hover:bg-[#4D7A5A] transition-colors text-[14px] shadow-sm cursor-pointer"\n            >\n              {t('nav.bookCall')}\n            </button>`
);
content = content.replace('See how it works', '{t("hero.seeHowItWorks")}');

// Update HeroIllustration
// Since HeroIllustration doesn't have useTranslation, we can either pass t as a prop or use useTranslation inside it.
// Let's add useTranslation to HeroIllustration
content = content.replace(
  'function HeroIllustration() {',
  'function HeroIllustration() {\n  const { t } = useTranslation();'
);
content = content.replace('Compliance file', '{t("hero.cardComplianceTitle")}');
content = content.replace('ready for payroll', '{t("hero.cardComplianceDesc")}');
content = content.replace('Session booked', '{t("hero.cardSessionTitle")}');
content = content.replace('Thu 14:00 · Onsite', '{t("hero.cardSessionDesc")}');
content = content.replace('tax-free', '{t("hero.budgetTaxFree")}');
content = content.replace('per year', '{t("hero.budgetPerYear")}');

// 6. Update Trust Strip
content = content.replace('tax-free wellness budget', '{t("trust.stat1")}');
content = content.replace('per employee, per year — guaranteed by German law', '{t("trust.sub1")}');
content = content.replace('sessions with full compliance documentation', '{t("trust.stat2")}');
content = content.replace('delivered — no exceptions, no chasing', '{t("trust.sub2")}');
content = content.replace('hours of admin work', '{t("trust.stat3")}');
content = content.replace('for your HR or payroll team', '{t("trust.sub3")}');

// 7. Update How it works
content = content.replace('<Eyebrow>How it works</Eyebrow>', '<Eyebrow>{t("howItWorks.eyebrow")}</Eyebrow>');
content = content.replace('Three steps. No surprises.', '{t("howItWorks.title")}');
content = content.replace('Tell us your team', '{t("howItWorks.step1Title")}');
content = content.replace('Share your size, goals, and location — 5 minutes, no commitment.', '{t("howItWorks.step1Desc")}');
content = content.replace('We match & schedule', '{t("howItWorks.step2Title")}');
content = content.replace('Vetted certified instructors, onsite or offsite, on a rhythm your team sets.', '{t("howItWorks.step2Desc")}');
content = content.replace('You get the paperwork', '{t("howItWorks.step3Title")}');
content = content.replace('A full compliance file per session, structured for payroll and tax.', '{t("howItWorks.step3Desc")}');

// 8. Update Two Pillars
content = content.replace('Two things in one.', '{t("twoPillars.title")}');
content = content.replace('<Eyebrow>The Experience</Eyebrow>', '<Eyebrow>{t("twoPillars.expEyebrow")}</Eyebrow>');
content = content.replace('Real sessions, on a rhythm your team looks forward to.', '{t("twoPillars.expTitle")}');
content = content.replace('Certified yoga, fitness, and nutrition instructors who show up\n              consistently — building the habit that actually sticks.', '{t("twoPillars.expDesc")}');
content = content.replace('The Compliance', '{t("twoPillars.compEyebrow")}');
content = content.replace('Every session ships with the documentation German tax law asks\n              for.', '{t("twoPillars.compTitle")}');
content = content.replace('So the spend is genuinely tax-free — not just claimed to be. Every\n              time, without anyone chasing anyone.', '{t("twoPillars.compDesc")}');

// 9. Update HR
content = content.replace('<Eyebrow>For HR & People Teams</Eyebrow>', '<Eyebrow>{t("hr.eyebrow")}</Eyebrow>');
content = content.replace('One point of contact.', '{t("hr.title1")}');
content = content.replace('One compliant process.', '{t("hr.title2")}');
content = content.replace('A single company-level agreement covers your whole team — no\n              per-session paperwork, no chasing invoices.', '{t("hr.desc")}');
content = content.replace(
  /<button\s+onClick=\{openCalendly\}\s+className="inline-flex items-center bg-\[\#5B8C6A\] text-white font-medium px-6 py-3 rounded-full hover:bg-\[\#4D7A5A\] transition-colors text-\[13.5px\] cursor-pointer"\s*>\s*Book a 15-min call\s*<\/button>/,
  `<button\n              onClick={openCalendly}\n              className="inline-flex items-center bg-[#5B8C6A] text-white font-medium px-6 py-3 rounded-full hover:bg-[#4D7A5A] transition-colors text-[13.5px] cursor-pointer"\n            >\n              {t("nav.bookCall")}\n            </button>`
);
content = content.replace('One contract for the whole team', '{t("hr.item1Title")}');
content = content.replace('Covers every session, every employee — no re-signing.', '{t("hr.item1Desc")}');
content = content.replace('One monthly invoice', '{t("hr.item2Title")}');
content = content.replace('A single, clean invoice each month — not per session.', '{t("hr.item2Desc")}');
content = content.replace('Compliance report for payroll', '{t("hr.item3Title")}');
content = content.replace('Ready every time, structured for German tax documentation.', '{t("hr.item3Desc")}');

// 10. Update Location
content = content.replace('Wherever works for your team.', '{t("location.title")}');
content = content.replace('Onsite — we come to you.', '{t("location.onsiteTitle")}');
content = content.replace('Office, meeting room, rooftop — no commute, no coordination\n              overhead for your team.', '{t("location.onsiteDesc")}');
content = content.replace('Offsite — we host you.', '{t("location.offsiteTitle")}');
content = content.replace('Partner studios or outdoors — a proper reset, away from the desk\n              and the screen.', '{t("location.offsiteDesc")}');

// 11. Update Certified
content = content.replace('Certified instructors already on LUAZ', '{t("certified.eyebrow")}');
content = content.replace('{ label: "Yoga", icon: "🧘" }', '{ label: t("certified.yoga"), icon: "🧘" }');
content = content.replace('{ label: "Personal Training", icon: "🏋️" }', '{ label: t("certified.pt"), icon: "🏋️" }');
content = content.replace('{ label: "Nutrition", icon: "🥗" }', '{ label: t("certified.nutrition"), icon: "🥗" }');

// 12. Update Instructors
content = content.replace('<Eyebrow>For Instructors</Eyebrow>', '<Eyebrow>{t("instructors.eyebrow")}</Eyebrow>');
content = content.replace('Steady corporate work.', '{t("instructors.title1")}');
content = content.replace('No chasing clients.', '{t("instructors.title2")}');
content = content.replace('Join LUAZ for consistent, well-paid corporate bookings — we handle\n              the scheduling, contracts, and invoicing.', '{t("instructors.desc")}');
content = content.replace(
  /<button\s+onClick=\{openCalendly\}\s+className="inline-flex items-center bg-\[\#5B8C6A\] text-white font-medium px-6 py-3 rounded-full hover:bg-\[\#4D7A5A\] transition-colors text-\[13.5px\] cursor-pointer"\s*>\s*Apply as an instructor\s*<\/button>/,
  `<button\n              onClick={openCalendly}\n              className="inline-flex items-center bg-[#5B8C6A] text-white font-medium px-6 py-3 rounded-full hover:bg-[#4D7A5A] transition-colors text-[13.5px] cursor-pointer"\n            >\n              {t("instructors.apply")}\n            </button>`
);
content = content.replace('Recurring bookings', '{t("instructors.item1Title")}');
content = content.replace('Corporate clients book weekly or monthly — not once-off.', '{t("instructors.item1Desc")}');
content = content.replace('We handle the admin', '{t("instructors.item2Title")}');
content = content.replace('Contracts, invoicing, and compliance paperwork — not you.', '{t("instructors.item2Desc")}');
content = content.replace('Onsite & offsite options', '{t("instructors.item3Title")}');
content = content.replace('Teach from offices or our partner studio network.', '{t("instructors.item3Desc")}');

// 13. Update Gifting
content = content.replace('<Eyebrow>For Employees & Teams</Eyebrow>', '<Eyebrow>{t("gifting.eyebrow")}</Eyebrow>');
content = content.replace('Personalized gifting, sorted by the occasion.', '{t("gifting.title")}');
content = content.replace('A gift curated to the person — up to €50, tax-free under German\n              rules — with the compliance paperwork already done.', '{t("gifting.desc")}');
content = content.replace('label: "Birthday"', 'label: t("gifting.occ1")');
content = content.replace('label: "Onboarding"', 'label: t("gifting.occ2")');
content = content.replace('label: "Work Anniversary"', 'label: t("gifting.occ3")');
content = content.replace('label: "Holidays"', 'label: t("gifting.occ4")');
content = content.replace('Every occasion above — up to €50, tax-free', '{t("gifting.limitInfo")}');
content = content.replace('Optional: add a handwritten note', '{t("gifting.noteOpt")}');
content = content.replace('— a personal line, included with delivery', '{t("gifting.noteDesc")}');
content = content.replace(
  /<button\s+onClick=\{openCalendly\}\s+className="inline-flex items-center bg-\[\#5B8C6A\] text-white font-medium px-7 py-3.5 rounded-full hover:bg-\[\#4D7A5A\] transition-colors text-\[13.5px\] cursor-pointer"\s*>\s*Ask about gifting\s*<\/button>/,
  `<button\n              onClick={openCalendly}\n              className="inline-flex items-center bg-[#5B8C6A] text-white font-medium px-7 py-3.5 rounded-full hover:bg-[#4D7A5A] transition-colors text-[13.5px] cursor-pointer"\n            >\n              {t("gifting.cta")}\n            </button>`
);

// 14. Update CTA Band
content = content.replace('Onboarding a small number of founding partner companies this\n              quarter.', '{t("ctaBand.title")}');
content = content.replace('15 minutes to see if it\'s a fit — no pressure, no obligation.', '{t("ctaBand.desc")}');
content = content.replace(
  /<button\s+onClick=\{openCalendly\}\s+className="inline-flex items-center bg-white text-\[\#3D6B4F\] font-semibold px-8 py-4 rounded-full hover:bg-\[\#EDF4EF\] transition-colors text-\[14px\] shadow-md cursor-pointer"\s*>\s*Book a 15-min call\s*<\/button>/,
  `<button\n              onClick={openCalendly}\n              className="inline-flex items-center bg-white text-[#3D6B4F] font-semibold px-8 py-4 rounded-full hover:bg-[#EDF4EF] transition-colors text-[14px] shadow-md cursor-pointer"\n            >\n              {t("nav.bookCall")}\n            </button>`
);
content = content.replace('info@luazwellness.de', '{t("ctaBand.email")}');

// 15. Update Footer
content = content.replace('Onsite & offsite wellness for German teams — compliant by design.', '{t("footer.desc")}');

fs.writeFileSync(path, content);
