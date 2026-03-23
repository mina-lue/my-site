import { Project } from '../model/Project';

export const PORTFOLIO_ITEMS: Project[] = [
  {
    slug: 'inventory-management',
    title: 'Inventory Management',
    description: 'App for managing store and employees.',
    imageUrl: 'habkali-inventory-homepage.png',
    overview: 'A full-stack inventory platform to manage products, stock movement, and employee operations.',
    technologies: ['Angular', 'Firebase', 'REST APIs', 'Tailwind CSS'],
    highlights: [
      'Role-based access for admins and staff',
      'Product and stock transaction tracking',
      'Operational dashboard for quick reporting'
    ],
    year: 2024,
    link: 'https://minalu.web.app'
  },
  {
    slug: 'coffee-ordering-platform',
    title: 'Coffee Ordering Platform',
    description: 'Ordering flow, menu catalog, and customer checkout built for speed and usability.',
    imageUrl: 'my-foot-bg.jpg',
    overview: 'A digital ordering platform for coffee shops with product browsing and a smooth checkout flow.',
    technologies: ['React', 'Firebase', 'Responsive UI'],
    highlights: [
      'Fast menu browsing and category filtering',
      'Simple cart and checkout interaction',
      'Mobile-first interface for customer convenience'
    ],
    year: 2024,
    link: 'https://minalu.web.app'
  },
  {
    slug: 'school-system',
    title: 'School System',
    description: 'Full school management system for teachers, admins, students, and parents.',
    imageUrl: 'yellow_me.png',
    overview: 'A centralized school platform for academic, administrative, and communication workflows.',
    technologies: ['Angular', 'Spring Boot', 'SQL Database'],
    highlights: [
      'Modules for student records and attendance',
      'Teacher workflow for grading and reporting',
      'Admin tooling for user and role management'
    ],
    year: 2025,
    link: 'https://minalu.web.app'
  },
  {
    slug: 'issue-tracking-dashboard',
    title: 'Issue Tracking Dashboard',
    description: 'Tooling for issue lifecycle tracking, resolution metrics, and team visibility.',
    imageUrl: 'my-foot-bg.jpg',
    overview: 'An operations dashboard for tracking defects, ownership, and progress across teams.',
    technologies: ['Angular', 'Charting', 'Workflow Automation'],
    highlights: [
      'Issue states with assignment and SLA visibility',
      'Resolution and trend insights for teams',
      'Workflow support for status transitions'
    ],
    year: 2025,
    link: 'https://minalu.web.app'
  }
];
