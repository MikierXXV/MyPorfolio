import type { Lang } from '../scripts/i18n';

export const ASSET_BASE = `${import.meta.env.BASE_URL}assets/`;

export interface RepoLink {
  url: string;
  label?: string; // literal label (e.g. plugin name); omitted → i18n work_link_code
}

export interface ProjectCard {
  id: string;
  num: string;
  year: string;
  titleKey: string;        // i18n key for <em> subtitle
  descKey: string;         // i18n key for description
  tags: string[];
  links?: RepoLink[];
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
  links?: RepoLink[];
}

export const projectLinks: Record<string, RepoLink[]> = {
  bsfront:    [{ url: 'https://github.com/MikierXXV/big-school-frontend' }],
  bsback:     [{ url: 'https://github.com/MikierXXV/big-school-backend' }],
  unimoodle:  [
    { url: 'https://github.com/UNIMOODLE/moodle-gradereport_gradeconfigwizard', label: 'Wizard ↗' },
    { url: 'https://github.com/UNIMOODLE/moodle-gradeexport_groupfilter_txt', label: 'Export ↗' },
  ],
  greenwheel: [{ url: 'https://github.com/orgs/Green-Wheel/repositories' }],
  layup:      [{ url: 'https://github.com/MikierXXV/LAYUP' }],
  wishlist:   [{ url: 'https://github.com/MikierXXV/wishlist' }],
};

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
      en: "<p>Final project of the AI Development Master's at Big School: a hospital-management SPA built with Vue 3 + TypeScript + Pinia, following a 5-layer Clean Architecture (Domain, Application, Infrastructure, Presentation, Shared).</p><ul><li>24 views, 33+ components and 7 Pinia stores</li><li>RBAC with 3 system roles + 4 granular admin permissions</li><li>OAuth2 sign-in with Google &amp; Microsoft; dual analytics view by permission</li><li>Dark mode and 3-language i18n (es/en/ca)</li><li>Vitest unit tests (80% coverage target) + Playwright E2E</li><li>Deployed on Vercel</li></ul><p>Built entirely alongside AI as a coding partner — the workflow this whole portfolio reflects.</p>",
      es: '<p>Proyecto final del Máster de Desarrollo con IA en Big School: una SPA de gestión hospitalaria construida con Vue 3 + TypeScript + Pinia, siguiendo Clean Architecture en 5 capas (Domain, Application, Infrastructure, Presentation, Shared).</p><ul><li>24 vistas, 33+ componentes y 7 stores Pinia</li><li>RBAC con 3 roles de sistema + 4 permisos granulares de administración</li><li>Login OAuth2 con Google y Microsoft; vista de analíticas dual según permisos</li><li>Modo oscuro e i18n en 3 idiomas (es/en/ca)</li><li>Tests unitarios con Vitest (objetivo 80% cobertura) + E2E con Playwright</li><li>Desplegado en Vercel</li></ul><p>Construido íntegramente junto a la IA como compañera de código — el flujo de trabajo que refleja todo este portfolio.</p>',
      ca: "<p>Projecte final del Màster de Desenvolupament amb IA a Big School: una SPA de gestió hospitalària construïda amb Vue 3 + TypeScript + Pinia, seguint Clean Architecture en 5 capes (Domain, Application, Infrastructure, Presentation, Shared).</p><ul><li>24 vistes, 33+ components i 7 stores Pinia</li><li>RBAC amb 3 rols de sistema + 4 permisos granulars d'administració</li><li>Login OAuth2 amb Google i Microsoft; vista d'analítiques dual segons permisos</li><li>Mode fosc i i18n en 3 idiomes (es/en/ca)</li><li>Tests unitaris amb Vitest (objectiu 80% cobertura) + E2E amb Playwright</li><li>Desplegat a Vercel</li></ul><p>Construït íntegrament al costat de la IA com a companya de codi — el flux de treball que reflecteix tot aquest portfolio.</p>",
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
      en: '<p>Enterprise-grade authentication and authorization system for Health Care Suite, built with Clean Architecture, Hexagonal (Ports &amp; Adapters) and Domain-Driven Design.</p><ul><li>30 use cases split across Domain / Application / Infrastructure / Interfaces</li><li>JWT with access + refresh token rotation; OAuth2 with Google &amp; Microsoft</li><li>RBAC with 3 system roles + 4 granular admin permissions in PostgreSQL</li><li>Progressive account lockout (5 attempts → 15min/30min/1h) and rate limiting</li><li>Email verification &amp; password reset via Resend SDK; bcrypt with 12 rounds</li><li>Dockerized, automated migrations &amp; seeds; Vitest + Playwright E2E</li></ul>',
      es: '<p>Sistema de autenticación y autorización de nivel empresarial para Health Care Suite, implementado con Clean Architecture, Hexagonal (Ports &amp; Adapters) y Domain-Driven Design.</p><ul><li>30 casos de uso repartidos entre Domain / Application / Infrastructure / Interfaces</li><li>JWT con rotación access + refresh; OAuth2 con Google y Microsoft</li><li>RBAC con 3 roles de sistema + 4 permisos granulares de admin en PostgreSQL</li><li>Bloqueo progresivo de cuentas (5 intentos → 15min/30min/1h) y rate limiting</li><li>Verificación de email y reset de contraseña vía Resend SDK; bcrypt con 12 rounds</li><li>Dockerizado, migraciones y seeds automatizados; Vitest + Playwright E2E</li></ul>',
      ca: "<p>Sistema d'autenticació i autorització de nivell empresarial per a Health Care Suite, implementat amb Clean Architecture, Hexagonal (Ports &amp; Adapters) i Domain-Driven Design.</p><ul><li>30 casos d'ús repartits entre Domain / Application / Infrastructure / Interfaces</li><li>JWT amb rotació access + refresh; OAuth2 amb Google i Microsoft</li><li>RBAC amb 3 rols de sistema + 4 permisos granulars d'admin a PostgreSQL</li><li>Bloqueig progressiu de comptes (5 intents → 15min/30min/1h) i rate limiting</li><li>Verificació d'email i reset de contrasenya via Resend SDK; bcrypt amb 12 rounds</li><li>Dockeritzat, migracions i seeds automatitzats; Vitest + Playwright E2E</li></ul>",
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
      en: "<p>Unimoodle is a project led by a consortium of 15 Spanish universities, coordinated by UVa, to improve Moodle for teachers. I worked on it during my time at UPCnet.</p><ul><li>Plugin that lets professors write grading formulas intuitively</li><li>Improved data export from the gradebook</li><li>Integrated into Moodle's core UI without breaking accessibility</li><li>PHP backend, vanilla JS frontend, Behat &amp; PHPUnit testing</li></ul><p>The real challenge: keeping the UX intuitive for non-technical users inside a 20-year-old codebase.</p>",
      es: "<p>Unimoodle es un proyecto liderado por un consorcio de 15 universidades españolas, coordinado por la UVa, para mejorar Moodle para los profesores. Trabajé en él durante mi etapa en UPCnet.</p><ul><li>Plugin que permite a los profesores escribir fórmulas de calificación de forma intuitiva</li><li>Mejora de la exportación de datos del cuaderno de notas</li><li>Integrado en la UI nativa de Moodle sin romper la accesibilidad</li><li>Backend PHP, frontend JS vanilla, testing con Behat y PHPUnit</li></ul><p>El reto real: mantener la UX intuitiva para usuarios no técnicos dentro de un codebase de 20 años.</p>",
      ca: "<p>Unimoodle és un projecte liderat per un consorci de 15 universitats espanyoles, coordinat per la UVa, per millorar Moodle per als professors. Hi vaig treballar durant la meva etapa a UPCnet.</p><ul><li>Plugin que permet als professors escriure fórmules de qualificació de forma intuïtiva</li><li>Millora de l'exportació de dades del quadern de notes</li><li>Integrat a la UI nativa de Moodle sense trencar l'accessibilitat</li><li>Backend PHP, frontend JS vanilla, testing amb Behat i PHPUnit</li></ul><p>El repte real: mantenir la UX intuïtiva per a usuaris no tècnics dins d'un codebase de 20 anys.</p>",
    },
  },
  greenwheel: {
    title: {
      en: 'Green Wheel <em>mobility</em>',
      es: 'Green Wheel <em>movilidad</em>',
      ca: 'Green Wheel <em>mobilitat</em>',
    },
    tags: ['Flutter', 'Dart', 'Python'],
    images: ['greenwheel/chargemap.png', 'greenwheel/chargerlist.png', 'greenwheel/bikeslist.png', 'greenwheel/chat.png'],
    prose: {
      en: "<p>A mobile app to find and reserve EV chargers and bikes, built for the PES course at FIB in a 7-person squad split between frontend (Flutter) and backend (Python). I led the frontend team.</p><ul><li>Sprint 1: interactive maps and the charger reservation flow</li><li>Sprint 2: bike reservations and major refactors</li><li>Sprint 3: chat, ratings and user profiles</li><li>Code reviews, sprint planning and demos — real Agile end to end</li></ul>",
      es: '<p>Una app móvil para encontrar y reservar cargadores eléctricos y bicis, desarrollada para la asignatura PES de la FIB en un squad de 7 personas dividido entre frontend (Flutter) y backend (Python). Lideré el equipo de frontend.</p><ul><li>Sprint 1: mapas interactivos y flujo de reserva de cargadores</li><li>Sprint 2: reserva de bicis y refactorizaciones importantes</li><li>Sprint 3: chat, valoraciones y perfiles de usuario</li><li>Code reviews, sprint planning y demos — Agile real de principio a fin</li></ul>',
      ca: "<p>Una app mòbil per trobar i reservar carregadors elèctrics i bicis, desenvolupada per a l'assignatura PES de la FIB en un squad de 7 persones dividit entre frontend (Flutter) i backend (Python). Vaig liderar l'equip de frontend.</p><ul><li>Sprint 1: mapes interactius i flux de reserva de carregadors</li><li>Sprint 2: reserva de bicis i refactoritzacions importants</li><li>Sprint 3: xat, valoracions i perfils d'usuari</li><li>Code reviews, sprint planning i demos — Agile real de principi a fi</li></ul>",
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
      en: "<p>Two end-to-end data mining projects, done in a team of four for the Data Mining course.</p><ul><li>Gender pay gap (R): clustering, PCA and profiling on a Kaggle dataset to uncover the main drivers of the gap</li><li>NBA positions (Python): compared and hyperparameter-tuned classification models to predict player positions from in-game stats</li><li>Heavy preprocessing and a clean, interpretable final pipeline in both</li></ul>",
      es: '<p>Dos proyectos de minería de datos de principio a fin, hechos en equipo de cuatro para la asignatura de Minería de Datos.</p><ul><li>Brecha salarial de género (R): clustering, PCA y profiling sobre un dataset de Kaggle para descubrir los principales motores de la brecha</li><li>Posiciones NBA (Python): comparación y ajuste de hiperparámetros de modelos de clasificación para predecir posiciones a partir de estadísticas de partido</li><li>Mucho preprocesamiento y un pipeline final limpio e interpretable en ambos</li></ul>',
      ca: "<p>Dos projectes de mineria de dades de principi a fi, fets en equip de quatre per a l'assignatura de Mineria de Dades.</p><ul><li>Bretxa salarial de gènere (R): clustering, PCA i profiling sobre un dataset de Kaggle per descobrir els principals motors de la bretxa</li><li>Posicions NBA (Python): comparació i ajust d'hiperparàmetres de models de classificació per predir posicions a partir d'estadístiques de partit</li><li>Molt preprocessament i un pipeline final net i interpretable en tots dos</li></ul>",
    },
  },
  layup: {
    title: {
      en: 'Lay Up <em>ecommerce</em>',
      es: 'Lay Up <em>ecommerce</em>',
      ca: 'Lay Up <em>ecommerce</em>',
    },
    tags: ['Frontend', 'Bootstrap', 'JSON'],
    images: ['layup.png', 'layup/login.png', 'layup/register.png'],
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
