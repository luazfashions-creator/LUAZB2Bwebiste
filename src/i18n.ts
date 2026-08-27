import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        forCompanies: "For Companies",
        inquiry: "Plan Experience"
      },
      hero: {
        title: "Wellness your team can actually experience.",
        subtitle: "Guided reset experiences combining expert practitioners, thoughtful products and everything needed to bring wellbeing into the workplace.",
        ctaMain: "Discover the LUAZ Experience",
        ctaSecondary: "For Companies"
      },
      problem: {
        title: "Work rarely gives us a moment to stop.",
        meetings: "Meetings.",
        notifications: "Notifications.",
        deadlines: "Deadlines.",
        screens: "Screens.",
        repeat: "Repeat.",
        solution: "LUAZ creates the pause."
      },
      experience: {
        title: "Stress Reset",
        subtitle: "A guided experience designed to help teams step away from work, slow down and reconnect.",
        steps: {
          arrive: { title: "ARRIVE", desc: "Leave work mode behind." },
          reset: { title: "RESET", desc: "A practitioner guides the group through a structured wellness experience." },
          experience: { title: "EXPERIENCE", desc: "Employees interact with carefully selected products during the session." },
          takeHome: { title: "TAKE IT HOME", desc: "Selected products continue the ritual after the event." }
        }
      },
      different: {
        session: { title: "NOT JUST A SESSION", desc: "The experience continues beyond the workplace." },
        gift: { title: "NOT JUST A GIFT", desc: "Employees first experience the products and ritual in context." },
        platform: { title: "NOT ANOTHER PLATFORM", desc: "LUAZ creates and organises the entire experience." },
        companies: { title: "BUILT TO WORK FOR COMPANIES", desc: "Practitioners, organisation, communication, compliance support and invoicing are coordinated through one partner." }
      },
      hr: {
        coordinates: "LUAZ coordinates",
        coordinatesList: ["Practitioner", "Employee communication", "Experience planning", "Event management", "Products", "Compliance support", "Invoicing"],
        gets: "Your company gets",
        getsList: ["One experience", "One contact", "One coordinated process", "One invoice"]
      },
      products: {
        title: "The experience doesn't end when the session does.",
        desc: "Selected products become physical reminders of the experience and can help employees recreate the ritual later."
      },
      origin: {
        title: "Inspired by where slowing down was never a trend.",
        desc: "LUAZ takes inspiration from Himalayan traditions, nature and longstanding wellness rituals — interpreted for contemporary life."
      },
      tradition: {
        traditionCol: { title: "Tradition", items: ["Natural ingredients", "Ritual", "Mindful movement", "Himalayan inspiration"] },
        todayCol: { title: "Today", items: ["Modern workplaces", "Evidence-aware wellness", "Professional practitioners", "Structured experiences"] }
      },
      practitioners: {
        title: "Guided by people, not an app.",
        desc: "Yoga, movement, fitness, nutrition and wellness professionals can become part of the LUAZ network."
      },
      trust: {
        pontu: "Previous experiences with Pontu GmbH",
        intersport: "Previous experiences with Intersport Olympia",
        longevity: "Previous experiences with Longevity Lounge"
      },
      companies: {
        steps: [
          { num: "01", text: "Choose your experience." },
          { num: "02", text: "Tell us about your team." },
          { num: "03", text: "LUAZ organises the experience." },
          { num: "04", text: "Your team experiences the reset." },
          { num: "05", text: "The ritual continues afterwards." }
        ],
        cta: "Plan a LUAZ Experience"
      },
      inquiry: {
        q1: "How many people are joining?",
        q2: "Where should the experience happen?",
        q3: "What do you want the team to feel afterwards?",
        feelings: ["Calmer", "Re-energised", "Connected", "Focused"],
        form: { name: "Name", company: "Company", email: "Work email" },
        cta: "Create our experience"
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "Is the LUAZ experience tax-free in Germany?", a: "Yes. We structure the sessions and documentation to comply with the German tax-free wellness budget (€600 per employee, per year)." },
          { q: "Can we combine onsite and offsite sessions?", a: "Absolutely. Many companies choose a weekly onsite reset and a monthly offsite deep-dive." },
          { q: "Who manages the practitioners?", a: "We do. LUAZ handles all vetting, scheduling, contracts, and invoicing." },
          { q: "What is included in the products?", a: "We curate premium, natural products like botanical oils, mindfulness journals, and balancing teas to extend the reset experience." }
        ]
      },
      final: {
        title: "Pause. Reset. Return.",
        subtitle: "Wellness experiences designed to be felt — not simply offered.",
        cta: "Bring LUAZ to your team"
      }
    }
  },
  de: {
    translation: {
      nav: {
        forCompanies: "Für Unternehmen",
        inquiry: "Erlebnis planen"
      },
      hero: {
        title: "Wellness, die Ihr Team wirklich spürt.",
        subtitle: "Geführte Reset-Erlebnisse, die erfahrene Praktiker, durchdachte Produkte und alles, was Sie brauchen, um Wohlbefinden an den Arbeitsplatz zu bringen, kombinieren.",
        ctaMain: "Das LUAZ-Erlebnis entdecken",
        ctaSecondary: "Für Unternehmen"
      },
      problem: {
        title: "Arbeit lässt uns selten Zeit innezuhalten.",
        meetings: "Meetings.",
        notifications: "Benachrichtigungen.",
        deadlines: "Deadlines.",
        screens: "Bildschirme.",
        repeat: "Wiederholung.",
        solution: "LUAZ schafft die Pause."
      },
      experience: {
        title: "Stress Reset",
        subtitle: "Ein geführtes Erlebnis, das Teams hilft, sich von der Arbeit zu lösen, zu entschleunigen und neue Verbindungen zu knüpfen.",
        steps: {
          arrive: { title: "ANKOMMEN", desc: "Lassen Sie den Arbeitsmodus hinter sich." },
          reset: { title: "RESET", desc: "Ein Praktiker führt die Gruppe durch ein strukturiertes Wellness-Erlebnis." },
          experience: { title: "ERLEBEN", desc: "Mitarbeiter interagieren während der Sitzung mit sorgfältig ausgewählten Produkten." },
          takeHome: { title: "MITNEHMEN", desc: "Ausgewählte Produkte setzen das Ritual nach der Veranstaltung fort." }
        }
      },
      different: {
        session: { title: "NICHT NUR EINE SITZUNG", desc: "Das Erlebnis geht über den Arbeitsplatz hinaus." },
        gift: { title: "NICHT NUR EIN GESCHENK", desc: "Mitarbeiter erleben die Produkte und das Ritual zunächst im Kontext." },
        platform: { title: "NICHT NOCH EINE PLATTFORM", desc: "LUAZ erstellt und organisiert das gesamte Erlebnis." },
        companies: { title: "FÜR UNTERNEHMEN GEMACHT", desc: "Praktiker, Organisation, Kommunikation, Compliance-Unterstützung und Rechnungsstellung werden über einen Partner koordiniert." }
      },
      hr: {
        coordinates: "LUAZ koordiniert",
        coordinatesList: ["Praktiker", "Mitarbeiterkommunikation", "Erlebnisplanung", "Eventmanagement", "Produkte", "Compliance-Unterstützung", "Rechnungsstellung"],
        gets: "Ihr Unternehmen erhält",
        getsList: ["Ein Erlebnis", "Einen Ansprechpartner", "Einen koordinierten Prozess", "Eine Rechnung"]
      },
      products: {
        title: "Das Erlebnis endet nicht mit der Sitzung.",
        desc: "Ausgewählte Produkte werden zu physischen Erinnerungen an das Erlebnis und können den Mitarbeitern helfen, das Ritual später nachzustellen."
      },
      origin: {
        title: "Inspiriert von dort, wo Entschleunigung nie ein Trend war.",
        desc: "LUAZ lässt sich von Himalaya-Traditionen, der Natur und langjährigen Wellness-Ritualen inspirieren – neu interpretiert für das moderne Leben."
      },
      tradition: {
        traditionCol: { title: "Tradition", items: ["Natürliche Inhaltsstoffe", "Ritual", "Achtsame Bewegung", "Himalaya-Inspiration"] },
        todayCol: { title: "Heute", items: ["Moderne Arbeitsplätze", "Evidenzbasierte Wellness", "Professionelle Praktiker", "Strukturierte Erlebnisse"] }
      },
      practitioners: {
        title: "Geleitet von Menschen, nicht von einer App.",
        desc: "Profis für Yoga, Bewegung, Fitness, Ernährung und Wellness können Teil des LUAZ-Netzwerks werden."
      },
      trust: {
        pontu: "Bisherige Erfahrungen mit Pontu GmbH",
        intersport: "Bisherige Erfahrungen mit Intersport Olympia",
        longevity: "Bisherige Erfahrungen mit Longevity Lounge"
      },
      companies: {
        steps: [
          { num: "01", text: "Wählen Sie Ihr Erlebnis." },
          { num: "02", text: "Erzählen Sie uns von Ihrem Team." },
          { num: "03", text: "LUAZ organisiert das Erlebnis." },
          { num: "04", text: "Ihr Team erlebt den Reset." },
          { num: "05", text: "Das Ritual geht danach weiter." }
        ],
        cta: "Ein LUAZ-Erlebnis planen"
      },
      inquiry: {
        q1: "Wie viele Personen nehmen teil?",
        q2: "Wo soll das Erlebnis stattfinden?",
        q3: "Wie soll sich das Team danach fühlen?",
        feelings: ["Ruhiger", "Mit neuer Energie", "Verbunden", "Fokussiert"],
        form: { name: "Name", company: "Unternehmen", email: "Arbeits-E-Mail" },
        cta: "Unser Erlebnis erstellen"
      },
      faq: {
        title: "Häufig gestellte Fragen",
        items: [
          { q: "Ist das LUAZ-Erlebnis in Deutschland steuerfrei?", a: "Ja. Wir strukturieren die Sitzungen und die Dokumentation so, dass sie dem steuerfreien Gesundheitsbudget in Deutschland (600 € pro Mitarbeiter und Jahr) entsprechen." },
          { q: "Können wir Vor-Ort- und Externe Sitzungen kombinieren?", a: "Absolut. Viele Unternehmen entscheiden sich für ein wöchentliches Reset vor Ort und ein monatliches Deep-Dive extern." },
          { q: "Wer verwaltet die Praktiker?", a: "Das tun wir. LUAZ kümmert sich um die gesamte Überprüfung, Terminplanung, Verträge und Rechnungsstellung." },
          { q: "Was ist in den Produkten enthalten?", a: "Wir kuratieren hochwertige, natürliche Produkte wie pflanzliche Öle, Achtsamkeitsjournale und ausgleichende Tees, um das Reset-Erlebnis zu verlängern." }
        ]
      },
      final: {
        title: "Pause. Reset. Return.",
        subtitle: "Wellness-Erlebnisse, die man spüren soll — nicht nur anbieten.",
        cta: "Bringen Sie LUAZ zu Ihrem Team"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "de",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
