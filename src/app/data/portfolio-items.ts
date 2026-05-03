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
    slug: 'kello-school-platform',
    title: 'Kello School Platform',
    category: 'commercial',
    description: 'Production-grade school operations platform with multi-role workflows across web and mobile.',
    imageUrl: 'school/admin_home.png',
    overview:
      'Kello unifies attendance, academics, student records, and finance workflows into one role-based platform for school operations.',
    technologies: ['Angular', 'React Native', 'Spring Boot', 'PostgreSQL', 'RBAC', 'OAuth2', 'JWT'],
    isFlagship: true,
    proofChips: ['Multi-tenant', '5 Roles', 'Web + Mobile'],
    highlights: [
      'Role-based portal for admin, teachers, students, and parents',
      'Finance and academic operations in one workflow',
      'Cross-platform delivery: Angular web and React Native mobile'
    ],
    problemStatement:
      'Schools were managing academics, attendance, and finance in disconnected tools, creating delays, inconsistent records, and weak operational visibility.',
    solutionApproach:
      'Built a centralized platform with role-specific modules and shared data models, prioritizing reliable daily operations and low-friction adoption.',
    stackByLayer: [
      {
        layer: 'Frontend',
        tools: ['Angular (Web)', 'React Native (Mobile)'],
        why: 'Supports both administration-heavy web workflows and on-the-go teacher mobile usage.'
      },
      {
        layer: 'Backend',
        tools: ['Spring Boot'],
        why: 'Provides a stable service layer for role-based academic and finance operations.'
      },
      {
        layer: 'Database',
        tools: ['PostgreSQL', 'Flyway'],
        why: 'Maintains consistent relational records with controlled schema evolution.'
      },
      {
        layer: 'Security',
        tools: ['JWT', 'OAuth2', 'RBAC'],
        why: 'Role-scoped access protects sensitive student, academic, and finance data.'
      },
      {
        layer: 'Performance',
        tools: ['Redis'],
        why: 'Improves responsiveness for high-frequency lookups and dashboard reads.'
      }
    ],
    scopeAtGlance: [
      { label: 'Roles', value: 'Admin, Teacher, Student, Parent, Accountant' },
      { label: 'Platforms', value: 'Web admin portal + React Native mobile app' },
      { label: 'Core Modules', value: 'Attendance, Exams, Student Registry, Finance, Analytics' }
    ],
    architectureDecision:
      'V1 was delivered as a modular monolith in Spring Boot to accelerate delivery and reduce operational complexity, while preserving clear module boundaries for a future service split.',
    executionStatus: [
      'Completed baseline modules for attendance, exam workflows, student listing, and fee setup',
      'Released teacher mobile views for home, class, attendance, and academic charts',
      'Next phase focuses on advanced reporting, notification automation, and deeper parent communication'
    ],
    flowSteps: [
      { step: 'School Setup & Role Provisioning', detail: 'Admin configures school data, classes, users, and role-specific access controls.' },
      { step: 'Teacher Daily Operations', detail: 'Teachers manage classes and attendance on web/mobile with real-time data sync.' },
      { step: 'Academic & Exam Management', detail: 'Academic teams publish exam structure and monitor student progress by class and subject.' },
      { step: 'Finance Workflow', detail: 'Accounting/admin teams manage fee structures and align collection visibility with student records.' },
      { step: 'Stakeholder Visibility', detail: 'Leaders access operational dashboards and reports for decision-making.' }
    ],
    mediaGallery: [
      {
        src: 'school/admin_home.png',
        alt: 'Kello admin dashboard overview',
        caption: 'Web dashboard showing high-level school operations overview.',
        kind: 'web'
      },
      {
        src: 'school/list_students.png',
        alt: 'Student listing module in Kello web app',
        caption: 'Student registry workflow used by administration.',
        kind: 'web'
      },
      {
        src: 'school/exams.png',
        alt: 'Exam management screen in Kello',
        caption: 'Academic operations for exam configuration and tracking.',
        kind: 'web'
      },
      {
        src: 'school/fee_structure.png',
        alt: 'Fee structure management screen',
        caption: 'Finance module for fee setup and institutional billing rules.',
        kind: 'web'
      },
      {
        src: 'school/mobile_teachers_home.jpg',
        alt: 'Teacher mobile home screen',
        caption: 'Mobile teacher entry point for daily operational tasks.',
        kind: 'mobile'
      },
      {
        src: 'school/mobile_teachers_attendance.jpg',
        alt: 'Teacher attendance workflow on mobile',
        caption: 'Attendance capture flow optimized for classroom execution.',
        kind: 'mobile'
      },
      {
        src: 'school/mobile_teachers_classes.jpg',
        alt: 'Teacher class list on mobile',
        caption: 'Teacher class navigation for quick access to classroom workflows.',
        kind: 'mobile'
      },
      {
        src: 'school/mobile_academics_chart.jpg',
        alt: 'Mobile academic chart view',
        caption: 'Academic charting view for fast mobile performance tracking.',
        kind: 'mobile'
      }
    ],
    impactPoints: [
      'Replaced fragmented school workflows with one operational platform',
      'Improved data consistency across academics, attendance, and finance',
      'Reduced day-to-day coordination overhead for school operations teams'
    ],
    roleOwnership: [
      'Led architecture and role-model design for the multi-tenant platform',
      'Implemented major teacher, admin, and academic workflow modules',
      'Drove cross-platform integration between web frontend, mobile app, and backend services'
    ],
    tradeoffs: [
      'V1 favored faster delivery via modular monolith over early microservice decomposition',
      'Next iteration adds deeper analytics, automated alerts, and richer parent communication flows'
    ],
    year: 2025
  },
  {
    slug: 'kule-family-networking-app',
    title: 'Kule Family Networking Application',
    category: 'commercial',
    description: 'A private family social network with lineage-based tree navigation, feed interactions, chat, and admin-controlled onboarding.',
    imageUrl: 'kule/feed.jpg',
    overview: 'Kule is a family-first networking platform that combines social posting, direct messaging, and a generation-aware family tree into one secure mobile experience.',
    technologies: ['React Native (Expo)', 'Node.js/Express', 'PostgreSQL', 'Socket.IO'],
    highlights: [
      'Family tree graph with generation logic, parent-child-sibling edges, and spouse links',
      'Social feed with post tags, engagement, and profile-driven interactions',
      'Role-based admin workflows for invitation, approval, and direct member registration'
    ],
    problemStatement:
      'Families needed a trusted digital space to communicate, preserve lineage context, and onboard relatives with controlled access rather than open public social platforms.',
    solutionApproach:
      'Built a mobile-first family networking platform with invite-gated registration, realtime-ready chat, and a lineage model that keeps descendants, spouses, and generations structurally connected.',
    stackByLayer: [
      {
        layer: 'Frontend',
        tools: ['React Native (Expo)', 'TypeScript'],
        why: 'Delivers a polished mobile UX for feed, chat, profile, and family tree navigation.'
      },
      {
        layer: 'Backend/API',
        tools: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
        why: 'Supports secure auth, invite-gated onboarding, family graph rules, and moderation controls.'
      },
      {
        layer: 'Realtime & Resilience',
        tools: ['Socket.IO', 'REST Polling Fallback'],
        why: 'Keeps chat usable in unstable network conditions while preserving near-realtime behavior.'
      }
    ],
    scopeAtGlance: [
      { label: 'Primary Roles', value: 'Super Admin, Admin, Member, Pending User' },
      { label: 'Core Domains', value: 'Feed, Chat, Family Tree, Invitations, User Governance' },
      { label: 'Platforms', value: 'React Native mobile app + Node.js backend API' }
    ],
    architectureDecision:
      'The product uses a centralized API with strict role checks and relationship validation so social features and family-graph integrity remain consistent as member records grow.',
    executionStatus: [
      'Delivered mobile feed, profile, chat list/chat screens, and family tree exploration flows',
      'Implemented invitation signup, pending-user approval, and super-admin user management screens',
      'Hardened onboarding with father/mother relationship validation and lineage constraints'
    ],
    flowSteps: [
      { step: 'Invitation & Access Control', detail: 'Admins create invite codes and control who can register into the network.' },
      { step: 'Member Onboarding', detail: 'Signup captures parent/spouse relationships to preserve lineage continuity from day one.' },
      { step: 'Daily Social Interaction', detail: 'Family members post updates, browse tagged feed content, and communicate through chat.' },
      { step: 'Family Graph Navigation', detail: 'Users explore cross-generation relationships with spouse and bloodline links in one tree view.' },
      { step: 'Administrative Governance', detail: 'Super admins monitor pending users, manage account status, and keep community quality high.' }
    ],
    mediaGallery: [
      {
        src: 'kule/feed.jpg',
        alt: 'Kule mobile feed screen',
        caption: 'Family activity feed with post cards and social interaction entry points.',
        kind: 'mobile'
      },
      {
        src: 'kule/chat.jpg',
        alt: 'Kule direct chat screen',
        caption: 'Realtime-style family messaging with resilient fallback behavior.',
        kind: 'mobile'
      },
      {
        src: 'kule/family_tree.jpg',
        alt: 'Kule family tree visualization',
        caption: 'Lineage-first tree navigation with generation and spouse relationship context.',
        kind: 'mobile'
      },
      {
        src: 'kule/profile.jpg',
        alt: 'Kule profile screen',
        caption: 'Member profile and identity details used across feed and relationship views.',
        kind: 'mobile'
      },
      {
        src: 'kule/login.jpg',
        alt: 'Kule authentication screen',
        caption: 'Secure invite-gated authentication flow for controlled family onboarding.',
        kind: 'mobile'
      }
    ],
    impactPoints: [
      'Created a private digital home for distributed family communication',
      'Reduced onboarding ambiguity through invite and lineage validation rules',
      'Improved discoverability of family relationships through structured tree views'
    ],
    roleOwnership: [
      'Designed and implemented core mobile product flows (feed, chat, profile, family tree)',
      'Built admin capabilities for pending approvals, user management, and invitations',
      'Implemented backend lineage and relationship handling for family graph consistency'
    ],
    tradeoffs: [
      'Socket connectivity depends on deployment/network quality, so polling fallback is maintained for reliability',
      'Current tree model optimizes clarity over advanced graph analytics, which can be added in a future phase'
    ],
    year: 2026
  }
];
