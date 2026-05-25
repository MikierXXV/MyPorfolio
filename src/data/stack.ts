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

export const techsList: string[] = [
  'Vue', 'React', 'TypeScript', 'JS', 'Node', 'Express',
  'PostgreSQL', 'MySQL', 'Python', 'PHP', 'HTML', 'CSS',
  'Tailwind', 'Bootstrap', 'Flutter', 'Dart', 'Bash', 'R',
];
