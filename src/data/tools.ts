import type { Lang } from '../scripts/i18n';

export interface ToolMeta {
  id: string;
  intensity: 1 | 2 | 3 | 4 | 5;   // usage-intensity bar (5 blocks)
  status: 'run' | 'exp';          // terminal badge, deliberately untranslated
}

// Array order = render order (sorted by usage)
export const toolsMeta: ToolMeta[] = [
  { id: 'claudecode',  intensity: 5, status: 'run' },
  { id: 'ollama',      intensity: 4, status: 'run' },
  { id: 'lmstudio',    intensity: 4, status: 'run' },
  { id: 'openclaw',    intensity: 3, status: 'run' },
  { id: 'hermes',      intensity: 3, status: 'run' },
  { id: 'n8n',         intensity: 3, status: 'run' },
  { id: 'genkit',      intensity: 2, status: 'exp' },
  { id: 'huggingface', intensity: 2, status: 'exp' },
  { id: 'langchain',   intensity: 2, status: 'exp' },
];

export interface ToolCopy {
  name: string;                    // may contain <em>
  cat: string;
  usage: string;
  text: string;                    // may contain <strong>
  tags: string[];
}

export const toolsCopy: Record<Lang, Record<string, ToolCopy>> = {
  en: {
    claudecode: {
      name: 'Claude <em>Code</em>',
      cat: 'CLI · IDE agent',
      usage: 'daily',
      text: 'My main coding partner. <strong>I run it for nearly every project</strong> — refactors, scaffolding, reviewing PRs, writing tests. The whole Big School master and this portfolio were built with it.',
      tags: ['terminal', 'agent', 'pair-programming'],
    },
    ollama: {
      name: 'Ollama',
      cat: 'Local LLMs',
      usage: 'regular',
      text: "<strong>My local LLM runtime of choice.</strong> I run open-weights models — Llama, Mistral, Qwen, Gemma — for offline work and prompts that shouldn't leave the machine. It also powers Hermes, my local lab.",
      tags: ['local', 'privacy', 'open-source'],
    },
    lmstudio: {
      name: 'LM <em>Studio</em>',
      cat: 'Local LLM GUI',
      usage: 'regular',
      text: 'Desktop GUI for local models, <strong>in regular rotation next to Ollama</strong> — quick chat testing of new open-weights releases before deciding which ones stay.',
      tags: ['gui', 'local', 'testing'],
    },
    openclaw: {
      name: 'Open<em>Claw</em>',
      cat: 'Agent framework · open-source',
      usage: 'active',
      text: 'Open-source personal AI assistant framework, <strong>running as my personal agent</strong> — memory, tool use, long-running sessions. My way of understanding agent architectures from the inside.',
      tags: ['agents', 'open-source', 'assistant'],
    },
    hermes: {
      name: 'Hermes',
      cat: 'Local lab · Ollama + Gemma',
      usage: 'active',
      text: 'My local lab, up and running: <strong>Ollama serving Gemma 3n E4B</strong> to probe what a small on-device model can really do — summaries, quick classification, offline assistants.',
      tags: ['local', 'gemma-3n', 'on-device'],
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
      usage: 'exploring',
      text: "Google's framework for building AI features into apps. <strong>I'm exploring its TypeScript ergonomics</strong> and Genkit Flows for possible production AI pipelines on Firebase.",
      tags: ['typescript', 'flows', 'firebase'],
    },
    huggingface: {
      name: 'Hugging<em>Face</em>',
      cat: 'Model hub',
      usage: 'reference',
      text: 'The reference for everything model-related. <strong>I browse it to discover models, read datasets, and study what the community ships</strong> before bringing anything into my own stack.',
      tags: ['models', 'datasets', 'transformers'],
    },
    langchain: {
      name: 'Lang<em>Chain</em>',
      cat: 'LLM orchestration',
      usage: 'exploring',
      text: '<strong>Chains, agents and retrievers</strong> for orchestrating LLM calls. I experiment with it for RAG pipelines and multi-step agent reasoning before committing to a stack.',
      tags: ['rag', 'chains', 'agents'],
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
    ollama: {
      name: 'Ollama',
      cat: 'LLMs locales',
      usage: 'regular',
      text: '<strong>Mi runtime local de LLMs de cabecera.</strong> Ejecuto modelos open-weights — Llama, Mistral, Qwen, Gemma — para trabajo offline y prompts que no deben salir de la máquina. También impulsa Hermes, mi laboratorio local.',
      tags: ['local', 'privacidad', 'open-source'],
    },
    lmstudio: {
      name: 'LM <em>Studio</em>',
      cat: 'GUI de LLMs locales',
      usage: 'regular',
      text: 'GUI de escritorio para modelos locales, <strong>en rotación habitual junto a Ollama</strong> — pruebas rápidas de chat con cada nuevo modelo open-weights antes de decidir cuál se queda.',
      tags: ['gui', 'local', 'testing'],
    },
    openclaw: {
      name: 'Open<em>Claw</em>',
      cat: 'Framework de agentes · open-source',
      usage: 'activo',
      text: 'Framework open-source de asistente personal de IA, <strong>funcionando como mi agente personal</strong> — memoria, uso de herramientas, sesiones largas. Mi forma de entender las arquitecturas de agentes desde dentro.',
      tags: ['agentes', 'open-source', 'asistente'],
    },
    hermes: {
      name: 'Hermes',
      cat: 'Laboratorio local · Ollama + Gemma',
      usage: 'activo',
      text: 'Mi laboratorio local, en marcha: <strong>Ollama sirviendo Gemma 3n E4B</strong> para probar qué puede hacer de verdad un modelo pequeño en local — resúmenes, clasificación rápida, asistentes offline.',
      tags: ['local', 'gemma-3n', 'on-device'],
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
      usage: 'explorando',
      text: 'Framework de Google para integrar IA en apps. <strong>Estoy explorando su ergonomía en TypeScript</strong> y los Genkit Flows para posibles pipelines de IA en producción sobre Firebase.',
      tags: ['typescript', 'flows', 'firebase'],
    },
    huggingface: {
      name: 'Hugging<em>Face</em>',
      cat: 'Hub de modelos',
      usage: 'referencia',
      text: 'La referencia para todo lo relacionado con modelos. <strong>Lo consulto para descubrir modelos, leer datasets y estudiar qué publica la comunidad</strong> antes de traer nada a mi propio stack.',
      tags: ['modelos', 'datasets', 'transformers'],
    },
    langchain: {
      name: 'Lang<em>Chain</em>',
      cat: 'Orquestación LLM',
      usage: 'explorando',
      text: '<strong>Cadenas, agentes y retrievers</strong> para orquestar llamadas a LLMs. Experimento con él en pipelines de RAG y razonamiento multi-paso de agentes antes de comprometerme con un stack.',
      tags: ['rag', 'cadenas', 'agentes'],
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
    ollama: {
      name: 'Ollama',
      cat: 'LLMs locals',
      usage: 'regular',
      text: "<strong>El meu runtime local de LLMs de capçalera.</strong> Executo models open-weights — Llama, Mistral, Qwen, Gemma — per a treball offline i prompts que no han de sortir de la màquina. També impulsa Hermes, el meu laboratori local.",
      tags: ['local', 'privacitat', 'open-source'],
    },
    lmstudio: {
      name: 'LM <em>Studio</em>',
      cat: 'GUI de LLMs locals',
      usage: 'regular',
      text: "GUI d'escriptori per a models locals, <strong>en rotació habitual al costat d'Ollama</strong> — proves ràpides de xat amb cada nou model open-weights abans de decidir quin es queda.",
      tags: ['gui', 'local', 'testing'],
    },
    openclaw: {
      name: 'Open<em>Claw</em>',
      cat: "Framework d'agents · open-source",
      usage: 'actiu',
      text: "Framework open-source d'assistent personal d'IA, <strong>funcionant com el meu agent personal</strong> — memòria, ús d'eines, sessions llargues. La meva manera d'entendre les arquitectures d'agents des de dins.",
      tags: ['agents', 'open-source', 'assistent'],
    },
    hermes: {
      name: 'Hermes',
      cat: 'Laboratori local · Ollama + Gemma',
      usage: 'actiu',
      text: "El meu laboratori local, en marxa: <strong>Ollama servint Gemma 3n E4B</strong> per provar què pot fer de debò un model petit en local — resums, classificació ràpida, assistents offline.",
      tags: ['local', 'gemma-3n', 'on-device'],
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
      usage: 'explorant',
      text: "Framework de Google per integrar IA a apps. <strong>Estic explorant la seva ergonomia en TypeScript</strong> i els Genkit Flows per a possibles pipelines d'IA en producció sobre Firebase.",
      tags: ['typescript', 'flows', 'firebase'],
    },
    huggingface: {
      name: 'Hugging<em>Face</em>',
      cat: 'Hub de models',
      usage: 'referència',
      text: "La referència per a tot el relacionat amb models. <strong>El consulto per descobrir models, llegir datasets i estudiar què publica la comunitat</strong> abans de portar res al meu propi stack.",
      tags: ['models', 'datasets', 'transformers'],
    },
    langchain: {
      name: 'Lang<em>Chain</em>',
      cat: 'Orquestració LLM',
      usage: 'explorant',
      text: "<strong>Cadenes, agents i retrievers</strong> per orquestrar crides a LLMs. Hi experimento en pipelines de RAG i raonament multipas d'agents abans de comprometre'm amb un stack.",
      tags: ['rag', 'cadenes', 'agents'],
    },
  },
};
