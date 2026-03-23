export interface Project {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  overview?: string;
  technologies?: string[];
  highlights?: string[];
  year?: number;
  link?: string;
}
