import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface JourneyItem {
  title: string;
  items: string[];
  year: number;
}

@Component({
  selector: 'app-my-path',
  imports: [CommonModule],
  templateUrl: './my-path.component.html',
  styleUrl: './my-path.component.scss'
})
export class MyPathComponent implements OnInit {
  path: JourneyItem[] = [];
  isTimelineExpanded = false;

  ngOnInit(): void {
    this.path = [
      {
        title: 'Java And C++ Basics',
        items: ['Started programming for fun', 'Built simple calculator', 'Built simple bank application'],
        year: 2015
      },
      {
        title: 'Started Learning HTML & CSS',
        items: ['Built static websites'],
        year: 2016
      },
      {
        title: 'Started Learning PHP',
        items: ['Built dynamic websites'],
        year: 2019
      },
      {
        title: 'Dived Into JavaScript',
        items: ['Worked with DOM, events, and API calls'],
        year: 2020
      },
      {
        title: 'JEE 7, Spring Boot',
        items: ['Built student info CRUD app'],
        year: 2021
      },
      {
        title: 'Mobile Application',
        items: ['Built Android apps using Java and Kotlin'],
        year: 2022
      },
      {
        title: 'Frontend Frameworks',
        items: ['Worked with React, Tailwind CSS, Firebase, and Figma'],
        year: 2023
      },
      {
        title: 'Projects',
        items: ['Tour app', 'Food order app'],
        year: 2024
      },
      {
        title: 'At Perago Information Systems',
        items: ['Angular and advanced engineering work', 'Azure DevOps, GitLab, Docker', 'Monorepo and custom libraries'],
        year: 2025
      },
      {
        title: 'Garri Logistics',
        items: ['Transport management system'],
        year: 2026
      }
    ];
  }

  get startYear(): number {
    return this.path[0]?.year ?? new Date().getFullYear();
  }

  get endYear(): number {
    return this.path[this.path.length - 1]?.year ?? this.startYear;
  }

  get spanYears(): number {
    return Math.max(1, this.endYear - this.startYear + 1);
  }

  getProgress(index: number): number {
    if (!this.path.length) {
      return 0;
    }
    return Math.round(((index + 1) / this.path.length) * 100);
  }

  toggleTimeline(): void {
    this.isTimelineExpanded = !this.isTimelineExpanded;
  }
}
