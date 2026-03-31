export type ProjectCategory = 'commercial' | 'fun' | 'learning';

export interface ProjectStackLayer {
  layer: string;
  tools: string[];
  why?: string;
}

export interface ProjectFlowStep {
  step: string;
  detail: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  imageUrl: string;
  overview?: string;
  technologies?: string[];
  highlights?: string[];
  year?: number;
  link?: string;
  problemStatement?: string;
  solutionApproach?: string;
  stackByLayer?: ProjectStackLayer[];
  flowSteps?: ProjectFlowStep[];
  impactPoints?: string[];
  roleOwnership?: string[];
  tradeoffs?: string[];
}
