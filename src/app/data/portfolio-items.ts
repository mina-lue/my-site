import { Project } from '../model/Project';

export const PORTFOLIO_ITEMS: Project[] = [
  {
    slug: 'timo-school-platform',
    title: 'Timo School Platform',
    category: 'commercial',
    isFlagship: true,
    year: 2026,
    description: 'A school management platform with an Angular web portal and a React Native mobile app.',
    imageUrl: 'portfolio-media/timo-mobile.png',
    imageFit: 'contain',
    overview: 'Timo brings school administration and workflows for teachers, students, and parents into a multi-tenant web and mobile platform.',
    technologies: ['Angular', 'React Native', 'Spring Boot', 'PostgreSQL', 'Expo'],
    proofChips: ['300+ mobile installs', 'Web and mobile'],
    highlights: ['Multi-tenant school administration', 'Web and mobile workflows for schools'],
    impactPoints: ['The Android app reached 300+ installs in under three months after publication on Google Play.'],
    roleOwnership: ['Built across the Angular web app, React Native mobile app, and Spring Boot backend.', 'Published the Android app on Google Play.']
  },
  {
    slug: 'bunocart-telegram-marketplace',
    title: 'Bunocart Telegram Marketplace',
    category: 'commercial',
    isFlagship: true,
    description: 'A Telegram-based marketplace with an Angular storefront and a Spring Boot backend.',
    imageUrl: 'portfolio-media/bunocart-catalog.png',
    overview: 'Bunocart combines a Telegram bot as the customer entry point with a browser storefront and a Java backend.',
    technologies: ['Angular', 'Spring Boot', 'Telegram Bot API', 'Java'],
    highlights: ['Telegram bot interactions', 'Browser-based product catalog'],
    mediaGallery: [
      {
        src: 'portfolio-media/bunocart-catalog.png',
        alt: 'Bunocart catalog showing a sample product and its stock status',
        caption: 'Storefront screenshot with sample catalog data.',
        kind: 'web'
      }
    ],
    roleOwnership: ['Developed the marketplace across the Angular web app and Spring Boot service.']
  },
  {
    slug: 'kemeqisbet-receipt-verification',
    title: 'Kemeqisbet Payment Receipt Verification',
    category: 'commercial',
    isFlagship: true,
    year: 2026,
    description: 'A React Native app for submitting payment receipts and reviewing verification results.',
    imageUrl: 'portfolio-media/kemeqisbet-cover.png',
    overview: 'Kemeqisbet uses OCR to read submitted receipts and connects a React Native mobile app to a Spring Boot verification API.',
    technologies: ['React Native', 'Spring Boot', 'OCR', 'Expo', 'Java'],
    highlights: ['Receipt submission and OCR', 'Verification results through a Verify.ET integration'],
    roleOwnership: ['Developed the mobile app and API for receipt verification workflows.']
  },
  {
    slug: 'inventory-management',
    title: 'Desalegn Cement Factory Inventory',
    category: 'commercial',
    isFlagship: true,
    description: 'A factory operations app for stock movement, employee attendance, and monthly pay calculations.',
    imageUrl: 'habkali-inventory-homepage.png',
    overview: 'I built an inventory and employee management system for Desalegn Cement Factory using Angular, Spring Boot, and PostgreSQL.',
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker', 'Java'],
    highlights: ['Stock monitoring and movement tracking', 'Attendance and salary calculation from recorded hours'],
    impactPoints: ['Gave the owner visibility into stock movement and employee attendance.', 'Supported monthly employee payment calculations.']
  },
  {
    slug: 'kule-family-networking-app',
    title: 'Kule Family Networking Application',
    category: 'commercial',
    year: 2025,
    description: 'A private family networking app with social feeds and messaging.',
    imageUrl: 'kule/login.jpg',
    imageFit: 'contain',
    technologies: ['React Native', 'Node.js', 'Express.js', 'PostgreSQL'],
    highlights: ['Family feeds', 'Direct messaging'],
    roleOwnership: ['Worked on the React Native app and its Node.js backend.']
  },
  {
    slug: 'uzd-cars',
    title: 'UZD Cars Web Application',
    category: 'commercial',
    year: 2022,
    description: 'An automotive web application built with PHP, HTML, and CSS.',
    technologies: ['PHP', 'HTML', 'CSS'],
    roleOwnership: ['Worked on the UZD Cars web application.']
  },
  {
    slug: 'hodiye-shop',
    title: 'Hodiye Shop Food Ordering App',
    category: 'commercial',
    year: 2021,
    description: 'A food ordering app with a Kotlin mobile client and a Spring Boot backend.',
    technologies: ['Kotlin', 'Spring Boot'],
    roleOwnership: ['Worked on the mobile food ordering application.']
  }
];
