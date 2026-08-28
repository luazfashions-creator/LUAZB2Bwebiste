import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        gifting: "Gifting",
        experience: "Wellness",
        companies: "For Companies",
        inquiry: "Get in touch"
      },
      hero: {
        slides: [
          {
            eyebrow: "The Wellness Experience",
            title: "Wellness your team can actually feel.",
            subtitle: "Guided sessions — onsite or offsite — led by real practitioners, on a rhythm your team sets.",
            cta: "See how it works"
          },
          {
            eyebrow: "Personalized Gifting",
            title: "A gift they actually choose. Every occasion.",
            subtitle: "Up to €50, picked by them — for birthdays, onboarding, work anniversaries and the holidays.",
            cta: "See how gifting works"
          }
        ]
      },
      problem: {
        title: "Work rarely gives us a moment to stop.",
        meetings: "Meetings.",
        notifications: "Notifications.",
        deadlines: "Deadlines.",
        screens: "Screens.",
        repeat: "Repeat.",
        solution: "LUAZ brings the pause — and the thank-you."
      },
      gifting: {
        eyebrow: "Personalized Gifting",
        title: "You choose the gift.",
        titleB: "We handle the rest.",
        desc: "Every employee picks their own gift for their own occasion — up to €50, from a curated catalog — with a personal note if they want one.",
        occasions: ["Birthday", "Onboarding", "Work Anniversary", "Holidays"],
        priceNote: "Every occasion above — up to €50, on us",
        noteLabel: "Optional: add a handwritten note",
        noteDesc: "a personal line, included with delivery",
        companyNote: "For your company: one catalog, one monthly invoice, zero admin.",
        cta: "See how gifting works"
      },
      experience: {
        eyebrow: "The Wellness Experience",
        title: "A reset your team looks forward to.",
        subtitle: "Guided sessions — onsite or offsite — led by real practitioners, on a rhythm your team sets.",
        cta: "Book a session",
        steps: {
          arrive: { title: "ARRIVE", desc: "Leave work mode behind." },
          reset: { title: "RESET", desc: "A practitioner guides the group through a structured wellness experience." },
          experience: { title: "EXPERIENCE", desc: "Yoga, fitness or nutrition — onsite or offsite, whatever fits your team." },
          takeHome: { title: "TAKE IT HOME", desc: "The habit — and the occasional gift — continues after the session." }
        }
      },
      different: {
        session: { title: "NOT JUST A SESSION", desc: "The experience continues beyond the workplace." },
        gift: { title: "NOT JUST A GIFT", desc: "Chosen by the employee, for their own occasion — not assigned to them." },
        platform: { title: "NOT ANOTHER PLATFORM", desc: "LUAZ creates and organises the entire experience." },
        companies: { title: "BUILT TO WORK FOR COMPANIES", desc: "Practitioners, gifting, communication and invoicing are coordinated through one partner." }
      },
      hr: {
        coordinates: "LUAZ coordinates",
        coordinatesList: ["Practitioners", "Employee communication", "Gifting & occasions", "Event management", "Products", "Invoicing"],
        gets: "Your company gets",
        getsList: ["One experience", "One contact", "One coordinated process", "One invoice"]
      },
      practitioners: {
        title: "Guided by people, not an app.",
        desc: "Yoga, movement, fitness, nutrition and wellness professionals can become part of the LUAZ network."
      },
      story: {
        eyebrow: "Why LUAZ",
        title: "Built around what actually helps people slow down.",
        desc: "Real sessions, real practitioners, and gifts people actually want — brought together as one simple experience for your team, coordinated end to end by us."
      },
      tradition: {
        traditionCol: { title: "Tradition", items: ["Natural ingredients", "Ritual", "Mindful movement", "Time-tested rituals"] },
        todayCol: { title: "Today", items: ["Modern workplaces", "Evidence-aware wellness", "Professional practitioners", "Structured experiences"] }
      },
      companies: {
        steps: [
          { num: "01", text: "Choose gifting, wellness, or both." },
          { num: "02", text: "Tell us about your team." },
          { num: "03", text: "LUAZ organises everything." },
          { num: "04", text: "Your team experiences it." },
          { num: "05", text: "It continues — occasion after occasion." }
        ],
        cta: "Plan a LUAZ Experience"
      },
      inquiry: {
        q1: "How many people are joining?",
        q2: "Where should the experience happen?",
        q3: "What do you want the team to feel afterwards?",
        feelings: ["Calmer", "Re-energised", "Connected", "Appreciated"],
        form: { name: "Name", company: "Company", email: "Work email" },
        cta: "Create our experience"
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "How does the gifting side work?", a: "Every employee picks their own gift, up to €50, for their own occasion — birthday, onboarding, work anniversary or the holidays. We handle the catalog, delivery, and the note if they add one." },
          { q: "Can we combine onsite and offsite sessions?", a: "Absolutely. Many companies choose a weekly onsite reset and a monthly offsite deep-dive." },
          { q: "Who manages the practitioners and logistics?", a: "We do. LUAZ handles vetting, scheduling, gifting, and invoicing — your team gets one point of contact." },
          { q: "Does our HR team need to manage the paperwork?", a: "No — all of the process and infrastructure behind sessions and gifting is handled on our side." }
        ]
      },
      final: {
        title: "Pause. Reset. Return.",
        subtitle: "Wellness and gifting experiences designed to be felt — not simply offered.",
        cta: "Bring LUAZ to your team"
      },
      footer: {
        tagline: "Wellness and personalized gifting for German teams.",
        copyright: "© 2026 LUAZ"
      }
    }
  },
  de: {
    translation: {
      nav: {
        gifting: "Geschenke",
        experience: "Wellness",
        companies: "Für Unternehmen",
        inquiry: "Kontakt aufnehmen"
      },
      hero: {
        slides: [
          {
            eyebrow: "Das Wellness-Erlebnis",
            title: "Wellness, die Ihr Team wirklich spürt.",
            subtitle: "Geführte Sessions — vor Ort oder extern — mit echten Praktiker:innen, im Rhythmus Ihres Teams.",
            cta: "So funktioniert's"
          },
          {
            eyebrow: "Personalisierte Geschenke",
            title: "Ein Geschenk, das wirklich gewählt wird. Zu jedem Anlass.",
            subtitle: "Bis zu 50 € — selbst ausgewählt, zu Geburtstag, Onboarding, Jubiläum und Feiertagen.",
            cta: "So funktionieren Geschenke"
          }
        ]
      },
      problem: {
        title: "Arbeit lässt uns selten Zeit innezuhalten.",
        meetings: "Meetings.",
        notifications: "Benachrichtigungen.",
        deadlines: "Deadlines.",
        screens: "Bildschirme.",
        repeat: "Wiederholung.",
        solution: "LUAZ bringt die Pause — und das Dankeschön."
      },
      gifting: {
        eyebrow: "Personalisierte Geschenke",
        title: "Sie wählen das Geschenk.",
        titleB: "Wir kümmern uns um den Rest.",
        desc: "Jede:r Mitarbeitende wählt das eigene Geschenk zum eigenen Anlass — bis zu 50 €, aus einem kuratierten Katalog — mit persönlicher Nachricht, wenn gewünscht.",
        occasions: ["Geburtstag", "Onboarding", "Jubiläum", "Feiertage"],
        priceNote: "Jeder Anlass oben — bis zu 50 €, von uns",
        noteLabel: "Optional: handgeschriebene Nachricht hinzufügen",
        noteDesc: "eine persönliche Zeile, inklusive Lieferung",
        companyNote: "Für Ihr Unternehmen: ein Katalog, eine monatliche Rechnung, kein Verwaltungsaufwand.",
        cta: "So funktionieren Geschenke"
      },
      experience: {
        eyebrow: "Das Wellness-Erlebnis",
        title: "Ein Reset, auf den sich Ihr Team freut.",
        subtitle: "Geführte Sessions — vor Ort oder extern — mit echten Praktiker:innen, im Rhythmus Ihres Teams.",
        cta: "Session buchen",
        steps: {
          arrive: { title: "ANKOMMEN", desc: "Lassen Sie den Arbeitsmodus hinter sich." },
          reset: { title: "RESET", desc: "Ein:e Praktiker:in führt die Gruppe durch ein strukturiertes Wellness-Erlebnis." },
          experience: { title: "ERLEBEN", desc: "Yoga, Fitness oder Ernährung — vor Ort oder extern, passend für Ihr Team." },
          takeHome: { title: "MITNEHMEN", desc: "Die Gewohnheit — und gelegentlich ein Geschenk — bleibt nach der Session." }
        }
      },
      different: {
        session: { title: "NICHT NUR EINE SITZUNG", desc: "Das Erlebnis geht über den Arbeitsplatz hinaus." },
        gift: { title: "NICHT NUR EIN GESCHENK", desc: "Von den Mitarbeitenden selbst gewählt, zum eigenen Anlass — nicht zugewiesen." },
        platform: { title: "NICHT NOCH EINE PLATTFORM", desc: "LUAZ erstellt und organisiert das gesamte Erlebnis." },
        companies: { title: "FÜR UNTERNEHMEN GEMACHT", desc: "Praktiker:innen, Geschenke, Kommunikation und Rechnungsstellung werden über einen Partner koordiniert." }
      },
      hr: {
        coordinates: "LUAZ koordiniert",
        coordinatesList: ["Praktiker:innen", "Mitarbeiterkommunikation", "Geschenke & Anlässe", "Eventmanagement", "Produkte", "Rechnungsstellung"],
        gets: "Ihr Unternehmen erhält",
        getsList: ["Ein Erlebnis", "Einen Ansprechpartner", "Einen koordinierten Prozess", "Eine Rechnung"]
      },
      practitioners: {
        title: "Geleitet von Menschen, nicht von einer App.",
        desc: "Profis für Yoga, Bewegung, Fitness, Ernährung und Wellness können Teil des LUAZ-Netzwerks werden."
      },
      story: {
        eyebrow: "Warum LUAZ",
        title: "Entstanden aus dem, was Menschen wirklich hilft, zu entschleunigen.",
        desc: "Echte Sessions, echte Praktiker:innen und Geschenke, die Menschen wirklich wollen — als ein einfaches Erlebnis für Ihr Team, von uns durchgängig koordiniert."
      },
      tradition: {
        traditionCol: { title: "Tradition", items: ["Natürliche Inhaltsstoffe", "Ritual", "Achtsame Bewegung", "Altbewährte Rituale"] },
        todayCol: { title: "Heute", items: ["Moderne Arbeitsplätze", "Evidenzbasierte Wellness", "Professionelle Praktiker:innen", "Strukturierte Erlebnisse"] }
      },
      companies: {
        steps: [
          { num: "01", text: "Geschenke, Wellness oder beides wählen." },
          { num: "02", text: "Erzählen Sie uns von Ihrem Team." },
          { num: "03", text: "LUAZ organisiert alles." },
          { num: "04", text: "Ihr Team erlebt es." },
          { num: "05", text: "Es geht weiter — Anlass für Anlass." }
        ],
        cta: "Ein LUAZ-Erlebnis planen"
      },
      inquiry: {
        q1: "Wie viele Personen nehmen teil?",
        q2: "Wo soll das Erlebnis stattfinden?",
        q3: "Wie soll sich das Team danach fühlen?",
        feelings: ["Ruhiger", "Mit neuer Energie", "Verbunden", "Wertgeschätzt"],
        form: { name: "Name", company: "Unternehmen", email: "Arbeits-E-Mail" },
        cta: "Unser Erlebnis erstellen"
      },
      faq: {
        title: "Häufig gestellte Fragen",
        items: [
          { q: "Wie funktionieren die Geschenke?", a: "Jede:r Mitarbeitende wählt das eigene Geschenk, bis zu 50 €, zum eigenen Anlass — Geburtstag, Onboarding, Jubiläum oder Feiertage. Wir kümmern uns um Katalog, Lieferung und die Nachricht, falls hinzugefügt." },
          { q: "Können wir Sessions vor Ort und extern kombinieren?", a: "Ja. Viele Unternehmen wählen einen wöchentlichen Reset vor Ort und einen monatlichen externen Deep-Dive." },
          { q: "Wer verwaltet Praktiker:innen und Logistik?", a: "Das übernehmen wir. LUAZ kümmert sich um Überprüfung, Terminplanung, Geschenke und Rechnungsstellung — Ihr Team hat einen Ansprechpartner." },
          { q: "Muss unser HR-Team den Papierkram übernehmen?", a: "Nein — der gesamte Prozess und die Infrastruktur hinter Sessions und Geschenken werden auf unserer Seite abgewickelt." }
        ]
      },
      final: {
        title: "Pause. Reset. Return.",
        subtitle: "Wellness- und Geschenke-Erlebnisse, die man spüren soll — nicht nur anbieten.",
        cta: "Bringen Sie LUAZ zu Ihrem Team"
      },
      footer: {
        tagline: "Wellness und personalisierte Geschenke für deutsche Teams.",
        copyright: "© 2026 LUAZ"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "de",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
