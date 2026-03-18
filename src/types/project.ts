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
  testSteps: string[];
  verificationNote?: string;
  links: ProjectLink[];
};
