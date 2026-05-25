import type { Lang } from '../scripts/i18n';

export interface StarPoint { x: number; y: number; }

export interface ConstellationGeometry {
  pos: [number, number];           // normalized [0-1, 0-1] position in stage
  stars: [number, number][];       // [x, y] in local 0-100 box
  lines: [number, number][];       // index pairs connecting stars
}

export interface ToolCopy {
  name: string;                    // may contain <em>
  cat: string;
  usage: string;
  text: string;                    // may contain <strong>
  tags: string[];
}

export const constellationGeometry: Record<string, ConstellationGeometry> = {
  claudecode: {
    pos: [0.20, 0.16],
    stars: [[20,20],[50,10],[80,30],[60,55],[35,65],[15,50]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[3,0]],
  },
  n8n: {
    pos: [0.52, 0.13],
    stars: [[30,30],[55,15],[80,40],[55,65],[30,55]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,0],[1,3]],
  },
  genkit: {
    pos: [0.82, 0.20],
    stars: [[50,15],[20,40],[80,40],[35,65],[65,65]],
    lines: [[0,1],[0,2],[1,3],[2,4],[3,4]],
  },
  huggingface: {
    pos: [0.50, 0.44],
    stars: [[50,20],[20,40],[80,40],[35,65],[65,65],[50,82]],
    lines: [[0,1],[0,2],[1,3],[2,4],[3,5],[4,5]],
  },
  langchain: {
    pos: [0.84, 0.68],
    stars: [[15,20],[35,40],[55,30],[75,50],[55,70]],
    lines: [[0,1],[1,2],[2,3],[3,4],[1,4]],
  },
  ollama: {
    pos: [0.50, 0.75],
    stars: [[40,20],[20,45],[60,45],[40,70]],
    lines: [[0,1],[0,2],[1,3],[2,3]],
  },
  lmstudio: {
    pos: [0.16, 0.70],
    stars: [[20,20],[80,20],[80,80],[20,80],[50,50]],
    lines: [[0,1],[1,2],[2,3],[3,0],[0,4],[1,4],[2,4],[3,4]],
  },
};

export const toolsCopy: Record<Lang, Record<string, ToolCopy>> = {
  en: {
    claudecode: {
      name: 'Claude <em>Code</em>',
      cat: 'CLI · IDE agent',
      usage: 'daily',
      text: 'My main coding partner. <strong>I run it for nearly every project</strong> — refactors, scaffolding, reviewing PRs, writing tests. The whole Big School master and this portfolio were built with it.',
      tags: ['terminal', 'agent', 'pair-programming'],
    },
    n8n: {
      name: 'n8n',
      cat: 'Workflows · automation',
      usage: 'weekly',
      text: 'Open-source workflow automation. <strong>I use it to wire AI agents to real-world systems</strong> — Slack, Gmail, databases, webhooks. Great for prototyping complex flows visually before committing to code.',
      tags: ['automation', 'agents', 'integrations'],
    },
    genkit: {
      name: 'Genkit',
      cat: 'Google AI framework',
      usage: 'project-based',
      text: "Google's framework for building AI features into apps. <strong>Strong TypeScript ergonomics</strong> and great for Genkit Flows when shipping production AI pipelines on Firebase.",
      tags: ['typescript', 'flows', 'firebase'],
    },
    huggingface: {
      name: 'Hugging<em>Face</em>',
      cat: 'Model hub',
      usage: 'reference',
      text: 'The reference for everything model-related. <strong>I use it to discover models, read datasets, and integrate via Transformers.</strong> The community spaces are gold for understanding what\'s possible.',
      tags: ['models', 'datasets', 'transformers'],
    },
    langchain: {
      name: 'Lang<em>Chain</em>',
      cat: 'LLM orchestration',
      usage: 'frequent',
      text: '<strong>Chains, agents and retrievers</strong> for orchestrating LLM calls. The Swiss army knife. I lean on it for RAG pipelines and multi-step agent reasoning.',
      tags: ['rag', 'chains', 'agents'],
    },
    ollama: {
      name: 'Ollama',
      cat: 'Local LLMs',
      usage: 'experimentation',
      text: "<strong>Local LLM runtime.</strong> I use it to test models offline, run sensitive prompts that shouldn't leave the machine, and explore smaller open-source models like Llama, Mistral, Qwen.",
      tags: ['local', 'privacy', 'open-source'],
    },
    lmstudio: {
      name: 'LM <em>Studio</em>',
      cat: 'Local LLM GUI',
      usage: 'exploration',
      text: 'Desktop GUI for local LLMs. <strong>Best for quickly trying out new open-weights models</strong> with a chat interface before deciding which to integrate.',
      tags: ['gui', 'local', 'testing'],
    },
  },
  es: {
    claudecode: {
      name: 'Claude <em>Code</em>',
      cat: 'CLI · agente IDE',
      usage: 'diario',
      text: 'Mi compañero principal de código. <strong>Lo uso en casi todos los proyectos</strong> — refactors, scaffolding, revisiones de PR, escritura de tests. Todo el máster de Big School y este portfolio se construyeron con él.',
      tags: ['terminal', 'agente', 'pair-programming'],
    },
    n8n: {
      name: 'n8n',
      cat: 'Workflows · automatización',
      usage: 'semanal',
      text: 'Automatización open-source. <strong>Lo uso para conectar agentes de IA con sistemas reales</strong> — Slack, Gmail, bases de datos, webhooks. Genial para prototipar flujos complejos antes de pasar a código.',
      tags: ['automatización', 'agentes', 'integraciones'],
    },
    genkit: {
      name: 'Genkit',
      cat: 'Framework de IA · Google',
      usage: 'por proyecto',
      text: 'Framework de Google para integrar IA en apps. <strong>Ergonomía fuerte en TypeScript</strong> y genial para Genkit Flows cuando se despliegan pipelines de IA en Firebase.',
      tags: ['typescript', 'flows', 'firebase'],
    },
    huggingface: {
      name: 'Hugging<em>Face</em>',
      cat: 'Hub de modelos',
      usage: 'referencia',
      text: 'La referencia para todo lo relacionado con modelos. <strong>Lo uso para descubrir modelos, leer datasets e integrar vía Transformers.</strong> Los Spaces de la comunidad son oro para entender qué se puede hacer.',
      tags: ['modelos', 'datasets', 'transformers'],
    },
    langchain: {
      name: 'Lang<em>Chain</em>',
      cat: 'Orquestación LLM',
      usage: 'frecuente',
      text: '<strong>Cadenas, agentes y retrievers</strong> para orquestar llamadas a LLMs. La navaja suiza. Lo uso en pipelines de RAG y razonamiento multi-paso de agentes.',
      tags: ['rag', 'cadenas', 'agentes'],
    },
    ollama: {
      name: 'Ollama',
      cat: 'LLMs locales',
      usage: 'experimentación',
      text: '<strong>Runtime de LLMs locales.</strong> Lo uso para probar modelos offline, ejecutar prompts sensibles que no deben salir de la máquina, y explorar modelos open-source como Llama, Mistral, Qwen.',
      tags: ['local', 'privacidad', 'open-source'],
    },
    lmstudio: {
      name: 'LM <em>Studio</em>',
      cat: 'GUI de LLMs locales',
      usage: 'exploración',
      text: 'GUI de escritorio para LLMs locales. <strong>Lo mejor para probar rápidamente modelos open-weights</strong> con interfaz de chat antes de decidir cuál integrar.',
      tags: ['gui', 'local', 'testing'],
    },
  },
  ca: {
    claudecode: {
      name: 'Claude <em>Code</em>',
      cat: 'CLI · agent IDE',
      usage: 'diari',
      text: "El meu company principal de codi. <strong>L'uso a quasi tots els projectes</strong> — refactors, scaffolding, revisions de PR, escriptura de tests. Tot el màster de Big School i aquest portfolio s'han construït amb ell.",
      tags: ['terminal', 'agent', 'pair-programming'],
    },
    n8n: {
      name: 'n8n',
      cat: 'Workflows · automatització',
      usage: 'setmanal',
      text: "Automatització open-source. <strong>L'uso per connectar agents d'IA amb sistemes reals</strong> — Slack, Gmail, bases de dades, webhooks. Genial per prototipar fluxos complexos abans de passar a codi.",
      tags: ['automatització', 'agents', 'integracions'],
    },
    genkit: {
      name: 'Genkit',
      cat: "Framework d'IA · Google",
      usage: 'per projecte',
      text: "Framework de Google per integrar IA a apps. <strong>Ergonomia forta en TypeScript</strong> i genial per a Genkit Flows quan es despleguen pipelines d'IA en Firebase.",
      tags: ['typescript', 'flows', 'firebase'],
    },
    huggingface: {
      name: 'Hugging<em>Face</em>',
      cat: 'Hub de models',
      usage: 'referència',
      text: "La referència per a tot el relacionat amb models. <strong>L'uso per descobrir models, llegir datasets i integrar via Transformers.</strong> Els Spaces de la comunitat són or per entendre què es pot fer.",
      tags: ['models', 'datasets', 'transformers'],
    },
    langchain: {
      name: 'Lang<em>Chain</em>',
      cat: 'Orquestració LLM',
      usage: 'freqüent',
      text: "<strong>Cadenes, agents i retrievers</strong> per orquestrar crides a LLMs. La navalla suïssa. L'uso a pipelines de RAG i raonament multipas d'agents.",
      tags: ['rag', 'cadenes', 'agents'],
    },
    ollama: {
      name: 'Ollama',
      cat: 'LLMs locals',
      usage: 'experimentació',
      text: "<strong>Runtime de LLMs locals.</strong> L'uso per provar models offline, executar prompts sensibles que no han de sortir de la màquina, i explorar models open-source com Llama, Mistral, Qwen.",
      tags: ['local', 'privacitat', 'open-source'],
    },
    lmstudio: {
      name: 'LM <em>Studio</em>',
      cat: 'GUI de LLMs locals',
      usage: 'exploració',
      text: "GUI d'escriptori per a LLMs locals. <strong>El millor per provar ràpidament models open-weights</strong> amb interfície de xat abans de decidir quin integrar.",
      tags: ['gui', 'local', 'testing'],
    },
  },
};
