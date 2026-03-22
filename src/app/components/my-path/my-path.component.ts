import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-my-path',
  imports: [ CardModule, ButtonModule, CommonModule],
  templateUrl: './my-path.component.html',
  styleUrl: './my-path.component.scss'
})
export class MyPathComponent implements OnInit {

  path:any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.path = [
      {
        title: 'Java And C++ Basics',
        items: ['Started Programming as fun', 'Simple calculator', 'simple bank application'],
        year: 2015
      },
      {
        title: 'Started Learning HTML & CSS',
        items: ['Building static websites'],
        year: 2016
      },
      {
        title: 'Started Learning PHP',
        items: ['Building Dynamic websites'],
        year: 2019
      },
      {
        title: 'Dived into JavaScript',
        items: ['DOM, events, API calls'],
        year: 2020
      },
      {
        title: 'JEE 7, Spring boot',
        items: ['Student info CRUD app'],
        year: 2021
      },
      {
        title: 'Mobile Application',
        items: ['Java, Kotlin'],
        year: 2022
      },
      {
        title: 'Frontend Frameworks',
        items: ['React, Tailwindcss, Firebase, Figma'],
        year: 2023
      },
      {
        title: 'Projects',
        items: ['Tour app, Food order app'],
        year: 2024
      },
      {
        title: 'At Perago Information Systems',
        items: ['Angular, Advanced software career experience', 'Azure Devops, Gitlab, Docker', 'Monorepo, Custom libraries'],
        year: 2025
      }
    ]
  }
}
