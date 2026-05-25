import type { Lang } from '../scripts/i18n';

export const RAW_BASE = 'https://raw.githubusercontent.com/MikierXXV/MyPorfolio/main/public/assets/';

export interface ProjectCard {
  id: string;
  num: string;
  year: string;
  titleKey: string;        // i18n key for <em> subtitle
  descKey: string;         // i18n key for description
  tags: string[];
}

export const workCards: ProjectCard[] = [
  { id: 'bsfront',    num: '01', year: '2026 · May', titleKey: 'work_bsfront_em',  descKey: 'work_bsfront_desc', tags: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind'] },
  { id: 'bsback',     num: '02', year: '2026 · May', titleKey: 'work_bsback_em',   descKey: 'work_bsback_desc',  tags: ['Node', 'TypeScript', 'Express', 'PostgreSQL'] },
  { id: 'unimoodle',  num: '03', year: '2024 · Jan', titleKey: 'work_1_em',        descKey: 'work_1_desc',       tags: ['PHP', 'Moodle', 'JS'] },
  { id: 'greenwheel', num: '04', year: '2023 · May', titleKey: 'work_2_em',        descKey: 'work_2_desc',       tags: ['Flutter', 'Dart', 'Python'] },
  { id: 'datamining', num: '05', year: '2023 · May', titleKey: 'work_3_em',        descKey: 'work_3_desc',       tags: ['Python', 'R', 'ML'] },
  { id: 'layup',      num: '06', year: '2020 · Mar', titleKey: 'work_4_em',        descKey: 'work_4_desc',       tags: ['HTML', 'CSS', 'JS', 'Bootstrap'] },
  { id: 'wishlist',   num: '07', year: '2019 · Dec', titleKey: 'work_5_em',        descKey: 'work_5_desc',       tags: ['React', 'JS'] },
];

export const workCardBaseTitle: Record<string, string> = {
  bsfront:    'Health Care',
  bsback:     'Health Care',
  unimoodle:  'Unimoodle',
  greenwheel: 'Green Wheel',
  datamining: 'Data Mining',
  layup:      'Lay Up',
  wishlist:   'Wishlist',
};

export interface ProjectModalData {
  title: Record<Lang, string>;
  tags: string[];
  images: string[];
  prose: Record<Lang, string>;
}

export const projectData: Record<string, ProjectModalData> = {
  bsfront: {
    title: {
      en: 'Health Care Suite <em>— Frontend</em>',
      es: 'Health Care Suite <em>— Frontend</em>',
      ca: 'Health Care Suite <em>— Frontend</em>',
    },
    tags: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind', 'Vite', 'Vitest', 'Playwright'],
    images: [],
    prose: {
      en: "<p>Final project of the AI Development Master's at Big School. A Single Page Application for hospital management, built with Vue 3 + TypeScript + Pinia, following Clean Architecture in 5 layers: Domain, Application, Infrastructure, Presentation, Shared.</p><p>24 views, 33+ components, 7 Pinia stores, role-based access control with 3 system roles and 4 granular admin permissions. Dark mode, multi-language (es/en/ca), OAuth2 with Google and Microsoft, dual analytics view depending on permissions.</p><p>Testing with Vitest (unit, 80% coverage target) and Playwright (E2E). Deployed on Vercel. Built entirely alongside AI as a coding partner — the workflow this entire portfolio reflects.</p>",
      es: '<p>Proyecto final del Máster de Desarrollo con IA en Big School. Una SPA para gestión hospitalaria, construida con Vue 3 + TypeScript + Pinia, siguiendo Clean Architecture en 5 capas: Domain, Application, Infrastructure, Presentation, Shared.</p><p>24 vistas, 33+ componentes, 7 stores Pinia, control de acceso basado en roles con 3 roles de sistema y 4 permisos granulares de administración. Modo oscuro, multidioma (es/en/ca), OAuth2 con Google y Microsoft, vista de analíticas dual según permisos.</p><p>Testing con Vitest (unitarios, objetivo 80% cobertura) y Playwright (E2E). Desplegado en Vercel. Construido íntegramente junto a la IA como compañera de código.</p>',
      ca: "<p>Projecte final del Màster de Desenvolupament amb IA a Big School. Una SPA per a gestió hospitalària, construïda amb Vue 3 + TypeScript + Pinia, seguint Clean Architecture en 5 capes: Domain, Application, Infrastructure, Presentation, Shared.</p><p>24 vistes, 33+ components, 7 stores Pinia, control d'accés basat en rols amb 3 rols de sistema i 4 permisos granulars d'administració. Mode fosc, multiidioma (es/en/ca), OAuth2 amb Google i Microsoft, vista d'analítiques dual segons permisos.</p><p>Testing amb Vitest (unitaris, objectiu 80% cobertura) i Playwright (E2E). Desplegat a Vercel. Construït íntegrament al costat de la IA com a companya de codi.</p>",
    },
  },
  bsback: {
    title: {
      en: 'Health Care Suite <em>— Backend</em>',
      es: 'Health Care Suite <em>— Backend</em>',
      ca: 'Health Care Suite <em>— Backend</em>',
    },
    tags: ['Node 20+', 'TypeScript', 'Express 5', 'PostgreSQL', 'JWT', 'Resend', 'Docker'],
    images: [],
    prose: {
      en: '<p>Enterprise-grade authentication and authorization system for Health Care Suite. Built with Clean Architecture, Hexagonal Architecture (Ports & Adapters) and Domain-Driven Design.</p><p>JWT with access + refresh token rotation, OAuth2 with Google and Microsoft, RBAC with 3 system roles and 4 granular admin permissions persisted in PostgreSQL. Progressive account lockout (5 attempts → 15min/30min/1h). Email verification and password reset via Resend SDK.</p><p>30 use cases, separation between Domain / Application / Infrastructure / Interfaces. Rate limiting, bcrypt with 12 rounds, configurable CORS. Migrations and seed automation. Vitest for unit and integration, Playwright for E2E.</p>',
      es: '<p>Sistema de autenticación y autorización de nivel empresarial para Health Care Suite. Implementado con Clean Architecture, Arquitectura Hexagonal (Ports & Adapters) y Domain-Driven Design.</p><p>JWT con rotación access + refresh, OAuth2 con Google y Microsoft, RBAC con 3 roles de sistema y 4 permisos granulares de admin persistidos en PostgreSQL. Bloqueo progresivo de cuentas (5 intentos → 15min/30min/1h). Verificación de email y reset de contraseña vía Resend SDK.</p><p>30 casos de uso, separación entre Domain / Application / Infrastructure / Interfaces. Rate limiting, bcrypt con 12 rounds, CORS configurable. Migraciones y seed automatizados. Vitest para unitarios e integración, Playwright para E2E.</p>',
      ca: "<p>Sistema d'autenticació i autorització de nivell empresarial per a Health Care Suite. Implementat amb Clean Architecture, Arquitectura Hexagonal (Ports & Adapters) i Domain-Driven Design.</p><p>JWT amb rotació access + refresh, OAuth2 amb Google i Microsoft, RBAC amb 3 rols de sistema i 4 permisos granulars d'admin persistits a PostgreSQL. Bloqueig progressiu de comptes (5 intents → 15min/30min/1h). Verificació d'email i reset de contrasenya via Resend SDK.</p><p>30 casos d'ús, separació entre Domain / Application / Infrastructure / Interfaces. Rate limiting, bcrypt amb 12 rounds, CORS configurable. Migracions i seed automatitzats. Vitest per a unitaris i integració, Playwright per a E2E.</p>",
    },
  },
  unimoodle: {
    title: {
      en: 'Unimoodle <em>plugins</em>',
      es: 'Unimoodle <em>plugins</em>',
      ca: 'Unimoodle <em>plugins</em>',
    },
    tags: ['Moodle', 'PHP', 'JS', 'HTML/CSS'],
    images: ['unimoodle/logo.png', 'unimoodle/editorformula.png', 'unimoodle/editor_formula_1.png', 'unimoodle/Group_filter.png'],
    prose: {
      en: "<p>Unimoodle is a project led by 15 Spanish universities, coordinated by UVa, to improve Moodle for teachers. I worked on a plugin that lets professors write grading formulas more intuitively, and on improving data export.</p><p>The challenge was integrating with Moodle's existing components without breaking accessibility, while keeping the UX intuitive for non-technical users. PHP backend, vanilla JS frontend, lots of testing.</p>",
      es: "<p>Unimoodle es un proyecto liderado por 15 universidades españolas, coordinado por la UVa, para mejorar Moodle para los profesores. Trabajé en un plugin que permite escribir fórmulas de calificación de forma más intuitiva, y en mejorar la exportación de datos.</p><p>El reto era integrar con los componentes existentes de Moodle sin romper la accesibilidad, manteniendo la UX intuitiva para usuarios no técnicos. Backend en PHP, frontend en JS vanilla, mucho testing.</p>",
      ca: "<p>Unimoodle és un projecte liderat per 15 universitats espanyoles, coordinat per la UVa, per millorar Moodle per als professors. Vaig treballar en un plugin que permet escriure fórmules de qualificació de forma més intuïtiva, i en millorar l'exportació de dades.</p><p>El repte era integrar amb els components existents de Moodle sense trencar l'accessibilitat, mantenint la UX intuïtiva per a usuaris no tècnics. Backend en PHP, frontend en JS vanilla, molt testing.</p>",
    },
  },
  greenwheel: {
    title: {
      en: 'Green Wheel <em>mobility</em>',
      es: 'Green Wheel <em>movilidad</em>',
      ca: 'Green Wheel <em>mobilitat</em>',
    },
    tags: ['Flutter', 'Dart', 'Python'],
    images: ['Greenwheel.png'],
    prose: {
      en: '<p>A mobile app that lets users find and reserve EV chargers and bikes, developed for the PES course at FIB. Team of seven, split between frontend (Flutter) and backend (Python). I led the frontend team.</p><p>Three sprints: first the maps and charger flow, then bikes and refactoring, finally chat, ratings and user profiles. Real Agile, real review pain, real product.</p>',
      es: '<p>Una app móvil que permite encontrar y reservar cargadores eléctricos y bicis, desarrollada para la asignatura PES de la FIB. Equipo de siete, dividido entre frontend (Flutter) y backend (Python). Lideré el equipo de frontend.</p><p>Tres sprints: primero los mapas y el flujo de cargadores, luego las bicis y refactorizaciones, finalmente chat, valoraciones y perfiles de usuario. Agile de verdad, reviews dolorosas, producto real.</p>',
      ca: "<p>Una app mòbil que permet trobar i reservar carregadors elèctrics i bicis, desenvolupada per a l'assignatura PES de la FIB. Equip de set, dividit entre frontend (Flutter) i backend (Python). Vaig liderar l'equip de frontend.</p><p>Tres sprints: primer els mapes i el flux de carregadors, després les bicis i refactoritzacions, finalment xat, valoracions i perfils d'usuari. Agile de debò, reviews doloroses, producte real.</p>",
    },
  },
  datamining: {
    title: {
      en: 'Data Mining <em>studies</em>',
      es: 'Estudios de <em>Data Mining</em>',
      ca: 'Estudis de <em>Data Mining</em>',
    },
    tags: ['Data Mining', 'Python', 'R'],
    images: ['datamining/Gendergapsalary.png', 'datamining/basketpos.png'],
    prose: {
      en: '<p>Two projects done in a team of four for the Data Mining course. The first analyzed a gender pay gap dataset from Kaggle in R, applying clustering, PCA and profiling to uncover the main drivers of the gap.</p><p>The second predicted NBA player positions from in-game statistics in Python. We compared classification models, tuned hyperparameters and ended with a clean, interpretable pipeline.</p>',
      es: '<p>Dos proyectos hechos en equipo de cuatro para la asignatura de Minería de Datos. El primero analizó un dataset de Kaggle sobre brecha salarial de género en R, aplicando clustering, PCA y profiling para descubrir los principales motores de la brecha.</p><p>El segundo predijo posiciones de jugadores NBA a partir de estadísticas de partido en Python. Comparamos modelos de clasificación, ajustamos hiperparámetros y terminamos con un pipeline limpio e interpretable.</p>',
      ca: "<p>Dos projectes fets en equip de quatre per a l'assignatura de Mineria de Dades. El primer va analitzar un dataset de Kaggle sobre bretxa salarial de gènere en R, aplicant clustering, PCA i profiling per descobrir els principals motors de la bretxa.</p><p>El segon va predir posicions de jugadors NBA a partir d'estadístiques de partit en Python. Vam comparar models de classificació, vam ajustar hiperparàmetres i vam acabar amb un pipeline net i interpretable.</p>",
    },
  },
  layup: {
    title: {
      en: 'Lay Up <em>ecommerce</em>',
      es: 'Lay Up <em>ecommerce</em>',
      ca: 'Lay Up <em>ecommerce</em>',
    },
    tags: ['Frontend', 'Bootstrap', 'JSON'],
    images: ['layup.png'],
    prose: {
      en: "<p>One of my first real web development projects, from the Jedi HTML/CSS/JS course. A fashion-focused ecommerce site with cart logic and login flow, built with HTML, CSS, JS and Bootstrap.</p><p>The Heroku backend hosting changed policies and some features no longer work, but the static frontend is still online. It's the rough draft that taught me what production really meant.</p>",
      es: '<p>Uno de mis primeros proyectos de desarrollo web reales, del curso Jedi de HTML/CSS/JS. Un sitio de ecommerce de moda con lógica de carrito y login, hecho con HTML, CSS, JS y Bootstrap.</p><p>Heroku cambió sus políticas y algunas funcionalidades dejaron de funcionar, pero el frontend estático sigue online. Es el borrador en bruto que me enseñó qué significaba "producción".</p>',
      ca: "<p>Un dels meus primers projectes de desenvolupament web reals, del curs Jedi d'HTML/CSS/JS. Un lloc d'ecommerce de moda amb lògica de cistell i login, fet amb HTML, CSS, JS i Bootstrap.</p><p>Heroku va canviar les seves polítiques i algunes funcionalitats van deixar de funcionar, però el frontend estàtic segueix en línia. És l'esborrany en brut que em va ensenyar què significava \"producció\".</p>",
    },
  },
  wishlist: {
    title: {
      en: 'Wishlist <em>JS</em>',
      es: 'Wishlist <em>JS</em>',
      ca: 'Wishlist <em>JS</em>',
    },
    tags: ['React', 'JS', 'HTML'],
    images: ['wishlist.png'],
    prose: {
      en: "<p>A small wishlist built with React where items shift color based on how long they've been waiting: green when new, orange after 5 seconds, red after 10 (configurable). Marking an item complete moves it to an archive.</p><p>It started as a UI experiment about how time can be made visible, and ended up being one of my favorite small studies — simple, focused, and quietly interesting.</p>",
      es: "<p>Una pequeña wishlist en React donde los items cambian de color según cuánto llevan esperando: verde al inicio, naranja a los 5 segundos, rojo a los 10 (configurable). Marcar un item como completado lo mueve al archivo.</p><p>Empezó como un experimento de UI sobre cómo hacer visible el tiempo, y terminó siendo uno de mis pequeños estudios favoritos — simple, enfocado, discretamente interesante.</p>",
      ca: "<p>Una petita wishlist en React on els items canvien de color segons quant fa que esperen: verd al principi, taronja als 5 segons, vermell als 10 (configurable). Marcar un item com a completat el mou a l'arxiu.</p><p>Va començar com un experiment d'UI sobre com fer visible el temps, i va acabar essent un dels meus petits estudis preferits — simple, enfocat, discretament interessant.</p>",
    },
  },
};
