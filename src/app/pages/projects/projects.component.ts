import { Component } from '@angular/core';
import { ProjectCardComponent } from "../../components/project-card/project-card.component"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Inventory Management',
      description: 'App for managing store and employees',
      imageUrl: 'habkali-inventory-homepage.png',
      link: 'https://minalu.web.app'
    },
    {
      title: 'Coffee Ordering Platform',
      description: 'Ordering flow, menu catalog, and customer checkout built for speed and usability.',
      imageUrl: 'my-foot-bg.jpg',
      link: 'https://minalu.web.app'
    },
    {
      title: 'School System',
      description: 'Full school management system for teachers, admins, students, and parents.',
      imageUrl: 'yellow_me.png',
      link: 'https://minalu.web.app'
    },
    {
      title: 'Issue Tracking Dashboard',
      description: 'Tooling for issue lifecycle tracking, resolution metrics, and team visibility.',
      imageUrl: 'my-foot-bg.jpg',
      link: 'https://minalu.web.app'
    }
  ]
}
