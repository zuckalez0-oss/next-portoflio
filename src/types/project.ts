export type ProjectSection = {
  title: string;
  content: string[];
};

export type ProjectHighlight = {
  label: string;
  value: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

// NOVA ESTRUTURA PARA O IMPACTO DE NEGÓCIOS
export type BusinessImpact = {
  sectionTitle: string;
  columns: {
    title: string;
    content: string;
  }[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  impact: string;
  tagline: string;
  period: string;
  role: string;
  status: string;
  imageUrl: string;
  gallery: {
    src: string;
    alt: string;
  }[];
  techStack: string[];
  highlights: ProjectHighlight[];
  challenge: string[];
  solution: string[];
  outcomes: string[];
  sections: ProjectSection[];
  
  // ADICIONAMOS O '?' PARA TORNAR OPCIONAL
  testSteps?: string[]; 
  
  // ADICIONAMOS A NOVA PROPRIEDADE COMO OPCIONAL
  businessImpact?: BusinessImpact; 
  
  verificationNote?: string;
  links: ProjectLink[];
};