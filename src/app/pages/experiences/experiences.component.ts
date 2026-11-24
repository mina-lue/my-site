import { Component } from '@angular/core';
import { ExperienceCardComponent } from "../../components/experience-card/experience-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  imports: [ExperienceCardComponent, CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Garri Software Solutions',
      duration: 'December 2025–Present',
      description: 'Contributed to and maintained more than three logistics applications across dispatch, finance, documents, and reporting. Also contributed to Garri Asset Management.',
      technologies: ['React', 'Redux', 'Express.js', 'Next.js', 'PostgreSQL']
    },
    {
      title: 'Angular Developer',
      company: 'Perago Information Systems',
      duration: 'September 2022–July 2025',
      description: 'Started while studying software engineering at Arba Minch University. Built features and fixed bugs for an electronic procurement platform serving more than three African countries. Used NgRx with a facade layer for frontend state.',
      technologies: ['Angular', 'NestJS', 'NgRx', 'Docker', 'GitLab']
    }
  ];
}
