import type { Lang } from '../scripts/i18n';

export interface TimelineEvent {
  year: string;
  label: string;
  period: string;
  place: string;
  role: string;
  desc: string;
}

export interface CertItem {
  year: string;
  title: string;
  issuer: string;
  tags: string[];
  url: string;
}

export const tlData: Record<Lang, TimelineEvent[]> = {
  en: [
    {
      year: '2016',
      label: 'Garbi',
      period: '2016 – 2018',
      place: 'Escola Garbi Pere Vergés',
      role: 'Baccalaureate <em>Science &amp; Tech</em>',
      desc: 'Where the engineering itch started.',
    },
    {
      year: '2018',
      label: 'UPC',
      period: '2018 – 2024',
      place: 'Polytechnic University of Catalonia',
      role: 'Software Engineering <em>at FIB</em>',
      desc: 'Six years that shaped how I think about systems.',
    },
    {
      year: '2021',
      label: 'Coyma',
      period: 'Intensive week · 2021',
      place: 'Coyma',
      role: 'First <em>company contact</em>',
      desc: 'A week learning how departments talk to each other.',
    },
    {
      year: '2022',
      label: 'ETSEIB',
      period: 'May 2022 – Mar 2023',
      place: 'ETSEIB · UPC',
      role: 'IT <em>internship</em>',
      desc: 'Installation, maintenance, user support. The unglamorous work that taught me how organisations really run.',
    },
    {
      year: '2023',
      label: 'UPCnet',
      period: 'Mar 2023 – Jan 2024',
      place: 'UPCnet',
      role: 'Moodle <em>developer</em>',
      desc: 'PHP plugins, JS frontends, Behat & PHPUnit, Git. The first real codebase that felt like a workplace.',
    },
    {
      year: '2023',
      label: 'HLA',
      period: 'Sep 2023 – present',
      place: 'Health Lean Analytics',
      role: 'Software Engineer <em>with AI capabilities</em>',
      desc: 'Almost three years here. Started in IoT and frontend with Vue, TypeScript, React, Bash, Python and MySQL. Now operating as a mid engineer integrating AI capabilities into hospital systems.',
    },
    {
      year: '2025',
      label: 'Big School AI',
      period: 'Oct 2025 – May 2026',
      place: 'Big School · cert. Universidad Isabel I',
      role: "Master's degree <em>in AI Development</em>",
      desc: 'A nine-month immersion in building software alongside AI: agents, RAG, prompt engineering, integration with LLMs, MLOps. University-accredited certification by Isabel I.',
    },
  ],
  es: [
    {
      year: '2016',
      label: 'Garbi',
      period: '2016 – 2018',
      place: 'Escola Garbi Pere Vergés',
      role: 'Bachillerato <em>Científico-Técnico</em>',
      desc: 'Donde empezó el gusanillo por la ingeniería.',
    },
    {
      year: '2018',
      label: 'UPC',
      period: '2018 – 2024',
      place: 'Universitat Politècnica de Catalunya',
      role: 'Ingeniería del Software <em>en la FIB</em>',
      desc: 'Seis años que dieron forma a cómo pienso los sistemas.',
    },
    {
      year: '2021',
      label: 'Coyma',
      period: 'Semana intensiva · 2021',
      place: 'Coyma',
      role: 'Primer <em>contacto en empresa</em>',
      desc: 'Una semana entendiendo cómo se hablan los departamentos.',
    },
    {
      year: '2022',
      label: 'ETSEIB',
      period: 'May 2022 – Mar 2023',
      place: 'ETSEIB · UPC',
      role: 'Prácticas <em>de informática</em>',
      desc: 'Instalación, mantenimiento, soporte. El trabajo invisible que me enseñó cómo funcionan de verdad las organizaciones.',
    },
    {
      year: '2023',
      label: 'UPCnet',
      period: 'Mar 2023 – Ene 2024',
      place: 'UPCnet',
      role: 'Desarrollador <em>Moodle</em>',
      desc: 'Plugins PHP, frontends JS, Behat y PHPUnit, Git. El primer código real que se sentía como un trabajo.',
    },
    {
      year: '2023',
      label: 'HLA',
      period: 'Sep 2023 – actualidad',
      place: 'Health Lean Analytics',
      role: 'Software Engineer <em>con capacidades de IA</em>',
      desc: 'Casi tres años aquí. Empecé en IoT y frontend con Vue, TypeScript, React, Bash, Python y MySQL. Ahora opero como mid engineer integrando capacidades de IA en sistemas hospitalarios.',
    },
    {
      year: '2025',
      label: 'Big School AI',
      period: 'Oct 2025 – May 2026',
      place: 'Big School · cert. Universidad Isabel I',
      role: 'Máster <em>en Desarrollo con IA</em>',
      desc: 'Nueve meses de inmersión en construir software junto a la IA: agentes, RAG, prompt engineering, integración con LLMs, MLOps. Certificación con titulación universitaria por Isabel I.',
    },
  ],
  ca: [
    {
      year: '2016',
      label: 'Garbi',
      period: '2016 – 2018',
      place: 'Escola Garbi Pere Vergés',
      role: 'Batxillerat <em>Cientificotècnic</em>',
      desc: "On va començar el cuc per l'enginyeria.",
    },
    {
      year: '2018',
      label: 'UPC',
      period: '2018 – 2024',
      place: 'Universitat Politècnica de Catalunya',
      role: "Enginyeria del Programari <em>a la FIB</em>",
      desc: 'Sis anys que van donar forma a com penso els sistemes.',
    },
    {
      year: '2021',
      label: 'Coyma',
      period: 'Setmana intensiva · 2021',
      place: 'Coyma',
      role: 'Primer <em>contacte en empresa</em>',
      desc: 'Una setmana entenent com es parlen els departaments.',
    },
    {
      year: '2022',
      label: 'ETSEIB',
      period: 'Mai 2022 – Mar 2023',
      place: 'ETSEIB · UPC',
      role: "Pràctiques <em>d'informàtica</em>",
      desc: "Instal·lació, manteniment, suport. La feina invisible que em va ensenyar com funcionen de debò les organitzacions.",
    },
    {
      year: '2023',
      label: 'UPCnet',
      period: 'Mar 2023 – Gen 2024',
      place: 'UPCnet',
      role: 'Desenvolupador <em>Moodle</em>',
      desc: "Plugins PHP, frontends JS, Behat i PHPUnit, Git. El primer codi real que se sentia com una feina.",
    },
    {
      year: '2023',
      label: 'HLA',
      period: 'Set 2023 – actualitat',
      place: 'Health Lean Analytics',
      role: "Software Engineer <em>amb capacitats d'IA</em>",
      desc: "Gairebé tres anys aquí. Vaig començar a IoT i frontend amb Vue, TypeScript, React, Bash, Python i MySQL. Ara opero com a mid engineer integrant capacitats d'IA en sistemes hospitalaris.",
    },
    {
      year: '2025',
      label: 'Big School AI',
      period: 'Oct 2025 – Mai 2026',
      place: 'Big School · cert. Universidad Isabel I',
      role: "Màster <em>en Desenvolupament amb IA</em>",
      desc: "Nou mesos d'immersió en construir programari al costat de l'IA: agents, RAG, prompt engineering, integració amb LLMs, MLOps. Certificació amb titulació universitària per Isabel I.",
    },
  ],
};

export const certData: Record<Lang, CertItem[]> = {
  en: [
    {
      year: '2026',
      title: "AI Development <em>Master's Degree</em>",
      issuer: 'Big School · Universidad Isabel I',
      tags: ['LLMs', 'Agents', 'RAG'],
      url: '#',
    },
    {
      year: '2024',
      title: 'Cambridge English <em>C1 Advanced</em>',
      issuer: 'Cambridge University Press &amp; Assessment',
      tags: ['English'],
      url: '#',
    },
    {
      year: '2023',
      title: 'Scrum <em>Fundamentals</em>',
      issuer: 'Scrum Study',
      tags: ['Agile', 'Scrum'],
      url: '#',
    },
    {
      year: '2023',
      title: '<em>Software Engineering</em> Degree',
      issuer: 'Polytechnic University of Catalonia · FIB',
      tags: ['BSc', '240 ECTS'],
      url: '#',
    },
  ],
  es: [
    {
      year: '2026',
      title: 'Máster en <em>Desarrollo con IA</em>',
      issuer: 'Big School · Universidad Isabel I',
      tags: ['LLMs', 'Agentes', 'RAG'],
      url: '#',
    },
    {
      year: '2024',
      title: 'Cambridge English <em>C1 Advanced</em>',
      issuer: 'Cambridge University Press &amp; Assessment',
      tags: ['Inglés'],
      url: '#',
    },
    {
      year: '2023',
      title: 'Scrum <em>Fundamentals</em>',
      issuer: 'Scrum Study',
      tags: ['Agile', 'Scrum'],
      url: '#',
    },
    {
      year: '2023',
      title: 'Grado en <em>Ingeniería del Software</em>',
      issuer: 'Universitat Politècnica de Catalunya · FIB',
      tags: ['Grado', '240 ECTS'],
      url: '#',
    },
  ],
  ca: [
    {
      year: '2026',
      title: "Màster en <em>Desenvolupament amb IA</em>",
      issuer: 'Big School · Universidad Isabel I',
      tags: ['LLMs', 'Agents', 'RAG'],
      url: '#',
    },
    {
      year: '2024',
      title: 'Cambridge English <em>C1 Advanced</em>',
      issuer: 'Cambridge University Press &amp; Assessment',
      tags: ['Anglès'],
      url: '#',
    },
    {
      year: '2023',
      title: 'Scrum <em>Fundamentals</em>',
      issuer: 'Scrum Study',
      tags: ['Agile', 'Scrum'],
      url: '#',
    },
    {
      year: '2023',
      title: "Grau en <em>Enginyeria del Programari</em>",
      issuer: 'Universitat Politècnica de Catalunya · FIB',
      tags: ['Grau', '240 ECTS'],
      url: '#',
    },
  ],
};
