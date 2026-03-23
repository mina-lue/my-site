export type ProjectCategory = 'commercial' | 'fun' | 'learning';

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
}
