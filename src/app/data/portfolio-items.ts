import { Project } from '../model/Project';

export const PORTFOLIO_ITEMS: Project[] = [
  {
    slug: 'inventory-management',
    title: 'Inventory Management',
    category: 'commercial',
    description: 'App for managing store and employees.',
    imageUrl: 'habkali-inventory-homepage.png',
    overview: 'A full-stack inventory platform to manage products, stock movement, and employee operations.',
    technologies: ['Angular', 'Firebase', 'REST APIs', 'Tailwind CSS'],
    highlights: [
      'Role-based access for admins and staff',
      'Product and stock transaction tracking',
      'Operational dashboard for quick reporting'
    ],
    problemStatement: 'Store teams lacked a single source of truth for stock, staff actions, and daily inventory movement.',
    solutionApproach:
      'Built a centralized inventory workflow with role-specific dashboards, transaction logging, and low-friction product operations.',
    stackByLayer: [
      {
        layer: 'Frontend',
        tools: ['Angular', 'Tailwind CSS'],
        why: 'Fast, maintainable UI with structured component architecture.'
      },
      {
        layer: 'Backend & Data',
        tools: ['Firebase', 'REST APIs'],
        why: 'Simple deployment model and real-time operational updates.'
      }
    ],
    flowSteps: [
      { step: 'Login & Role Access', detail: 'Admins and staff access role-based modules and permissions.' },
      { step: 'Inventory Operations', detail: 'Users add products, update stock, and record incoming/outgoing items.' },
      { step: 'Team Activity Tracking', detail: 'Operational events are logged for visibility and accountability.' },
      { step: 'Dashboard Reporting', detail: 'Managers review stock status and daily/weekly movement summaries.' }
    ],
    impactPoints: [
      'Reduced manual stock reconciliation overhead',
      'Improved visibility of staff actions and item movement',
      'Enabled faster daily operations and reporting'
    ],
    roleOwnership: [
      'Designed core data flow for product and stock operations',
      'Implemented role-based UI and access behavior',
      'Built dashboard and reporting interactions'
    ],
    tradeoffs: [
      'Would add advanced forecasting and reorder automation in v2',
      'Would introduce deeper analytics for multi-branch operations'
    ],
    year: 2024,
    link: 'https://minalu.web.app'
  },
  {
    slug: 'coffee-ordering-platform',
    title: 'Coffee Ordering Platform',
    category: 'fun',
    description: 'Ordering flow, menu catalog, and customer checkout built for speed and usability.',
    imageUrl: 'my-foot-bg.jpg',
    overview: 'A digital ordering platform for coffee shops with product browsing and a smooth checkout flow.',
    technologies: ['React', 'Firebase', 'Responsive UI'],
    highlights: [
      'Fast menu browsing and category filtering',
      'Simple cart and checkout interaction',
      'Mobile-first interface for customer convenience'
    ],
    problemStatement: 'Coffee shops needed a faster ordering process to reduce queue friction and improve customer throughput.',
    solutionApproach:
      'Implemented a streamlined digital ordering flow focused on quick product discovery, low-friction cart updates, and clean checkout.',
    stackByLayer: [
      {
        layer: 'Frontend',
        tools: ['React', 'Responsive UI'],
        why: 'Composable UI for rapid iteration and mobile-first ordering experience.'
      },
      {
        layer: 'Backend & Data',
        tools: ['Firebase'],
        why: 'Lightweight backend setup for fast launch and simplified updates.'
      }
    ],
    flowSteps: [
      { step: 'Menu Discovery', detail: 'Customers browse categories and quickly identify products.' },
      { step: 'Selection & Cart', detail: 'Items are added, edited, and reviewed with minimal taps.' },
      { step: 'Checkout', detail: 'Order details are confirmed and submitted in a short flow.' },
      { step: 'Order Handoff', detail: 'Order information is ready for kitchen/barista execution.' }
    ],
    impactPoints: [
      'Reduced ordering friction on mobile devices',
      'Improved speed from browse to checkout',
      'Made menu updates easier for the business owner'
    ],
    roleOwnership: [
      'Designed the end-to-end customer ordering flow',
      'Implemented responsive UI and cart interactions',
      'Integrated product data and order states'
    ],
    tradeoffs: [
      'Would add payment gateway integration in v2',
      'Would add customer loyalty and reorder features'
    ],
    year: 2024,
    link: 'https://minalu.web.app'
  },
  {
    slug: 'school-system',
    title: 'School System',
    category: 'commercial',
    description: 'Full school management system for teachers, admins, students, and parents.',
    imageUrl: 'yellow_me.png',
    overview: 'A centralized school platform for academic, administrative, and communication workflows.',
    technologies: ['Angular', 'Spring Boot', 'SQL Database'],
    highlights: [
      'Modules for student records and attendance',
      'Teacher workflow for grading and reporting',
      'Admin tooling for user and role management'
    ],
    problemStatement:
      'Schools were using disconnected tools for attendance, grading, and administration, causing delays and inconsistent records.',
    solutionApproach:
      'Developed a unified school platform with dedicated modules for teachers, admins, students, and parent-facing communication.',
    stackByLayer: [
      {
        layer: 'Frontend',
        tools: ['Angular'],
        why: 'Strong modular structure for complex role-based interfaces.'
      },
      {
        layer: 'Backend',
        tools: ['Spring Boot'],
        why: 'Reliable service layer for institutional workflows and role logic.'
      },
      {
        layer: 'Database',
        tools: ['SQL Database'],
        why: 'Structured relational model for academic and administrative data.'
      }
    ],
    flowSteps: [
      { step: 'User & Role Provisioning', detail: 'Admins manage access for teachers, students, and parents.' },
      { step: 'Academic Operations', detail: 'Teachers manage attendance, grading, and class activities.' },
      { step: 'Administrative Workflows', detail: 'School admins monitor records, users, and institutional operations.' },
      { step: 'Progress Visibility', detail: 'Stakeholders access relevant records and performance insights.' }
    ],
    impactPoints: [
      'Centralized fragmented school workflows',
      'Improved record consistency and traceability',
      'Reduced administrative coordination overhead'
    ],
    roleOwnership: [
      'Led system design for multi-role platform behavior',
      'Implemented teacher/admin modules and workflow logic',
      'Coordinated frontend-backend integration'
    ],
    tradeoffs: [
      'Would add advanced parent communication tooling in v2',
      'Would introduce richer analytics and notification automation'
    ],
    year: 2025,
    link: 'https://minalu.web.app'
  },
  {
    slug: 'issue-tracking-dashboard',
    title: 'Issue Tracking Dashboard',
    category: 'learning',
    description: 'Tooling for issue lifecycle tracking, resolution metrics, and team visibility.',
    imageUrl: 'my-foot-bg.jpg',
    overview: 'An operations dashboard for tracking defects, ownership, and progress across teams.',
    technologies: ['Angular', 'Charting', 'Workflow Automation'],
    highlights: [
      'Issue states with assignment and SLA visibility',
      'Resolution and trend insights for teams',
      'Workflow support for status transitions'
    ],
    problemStatement:
      'Teams lacked clear visibility into issue ownership, SLA risk, and resolution trends across ongoing operational work.',
    solutionApproach:
      'Built an issue operations dashboard to track issue lifecycle state, assignment, performance metrics, and workflow transitions.',
    stackByLayer: [
      {
        layer: 'Frontend',
        tools: ['Angular', 'Charting'],
        why: 'Clear dashboard UI for status intelligence and trend analysis.'
      },
      {
        layer: 'Workflow Layer',
        tools: ['Workflow Automation'],
        why: 'Consistent issue state transitions and reduced manual status drift.'
      }
    ],
    flowSteps: [
      { step: 'Issue Intake', detail: 'New issues are captured with owner and priority context.' },
      { step: 'Assignment & State Tracking', detail: 'Teams manage state transitions with accountable ownership.' },
      { step: 'SLA & Trend Monitoring', detail: 'Dashboard surfaces overdue risk and resolution trends.' },
      { step: 'Operational Review', detail: 'Leads use insights to optimize team execution flow.' }
    ],
    impactPoints: [
      'Improved visibility into issue lifecycle health',
      'Made SLA risk more explicit for teams',
      'Supported more predictable operational delivery'
    ],
    roleOwnership: [
      'Designed dashboard information hierarchy and charts',
      'Implemented issue state and transition workflows',
      'Built resolution trend and SLA visualization'
    ],
    tradeoffs: [
      'Would add deeper notification/escalation rules in v2',
      'Would integrate directly with external issue trackers'
    ],
    year: 2025,
    link: 'https://minalu.web.app'
  }
];
