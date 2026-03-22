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
      title: 'Student Management Prototype',
      company: 'Education Domain',
      duration: 'June 2022',
      description: 'Built CRUD workflows for student records and validated core backend patterns.',
      technologies: ['J2EE', 'wildfly server', 'JDBC', 'mysql']
    },
    {
      title: 'UZD Vehicles Web App',
      company: 'UZD Vehicles',
      duration: 'January 2023',
      description: 'Delivered a responsive landing platform for showcasing and marketing vehicles.',
      technologies: ['PHP', 'HTML/CSS', 'MySQL']
    },
    {
      title: 'Assets Marketsquare - Android',
      company: 'Assets Market',
      duration: 'June 2024',
      description: 'Implemented Android flows for listing, browsing, and transacting high-value assets.',
      technologies: ['Kotlin', 'Firebase Auth', 'REST API']
    },
    {
      title: 'Perago Engineering Projects',
      company: 'Perago Information Systems',
      duration: '2025 - Present',
      description: 'Contributed to production applications with Angular, shared libraries, and delivery pipelines.',
      technologies: ['Angular', 'TypeScript', 'GitLab', 'Azure DevOps']
    }
    ];
}
