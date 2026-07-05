export interface GraphProject {
  id: string;
  name: string;
  techs: string[];
}

export const graphProjects: GraphProject[] = [
  { id: 'P0', name: 'HLA · IoT',    techs: ['Vue', 'TypeScript', 'React', 'Bash', 'Python', 'MySQL'] },
  { id: 'P1', name: 'BS · Front',   techs: ['Vue', 'TypeScript', 'Tailwind'] },
  { id: 'P2', name: 'BS · Back',    techs: ['Node', 'TypeScript', 'Express', 'PostgreSQL'] },
  { id: 'P3', name: 'Unimoodle',    techs: ['PHP', 'JS', 'HTML', 'CSS'] },
  { id: 'P4', name: 'Green Wheel',  techs: ['Flutter', 'Dart', 'Python'] },
  { id: 'P5', name: 'Data Mining',  techs: ['Python', 'R'] },
  { id: 'P6', name: 'Lay Up',       techs: ['HTML', 'CSS', 'JS', 'Bootstrap'] },
  { id: 'P7', name: 'Wishlist',     techs: ['React', 'JS', 'HTML'] },
];

export type TechTier = 'core' | 'solid' | 'used';

export interface TechItem {
  name: string;
  tier: TechTier;
}

export const techsList: TechItem[] = [
  { name: 'Vue',        tier: 'core'  },
  { name: 'React',      tier: 'solid' },
  { name: 'TypeScript', tier: 'core'  },
  { name: 'JS',         tier: 'solid' },
  { name: 'Node',       tier: 'core'  },
  { name: 'Express',    tier: 'solid' },
  { name: 'PostgreSQL', tier: 'solid' },
  { name: 'MySQL',      tier: 'solid' },
  { name: 'Python',     tier: 'core'  },
  { name: 'PHP',        tier: 'used'  },
  { name: 'HTML',       tier: 'solid' },
  { name: 'CSS',        tier: 'solid' },
  { name: 'Tailwind',   tier: 'solid' },
  { name: 'Bootstrap',  tier: 'used'  },
  { name: 'Flutter',    tier: 'used'  },
  { name: 'Dart',       tier: 'used'  },
  { name: 'Bash',       tier: 'solid' },
  { name: 'R',          tier: 'used'  },
];
