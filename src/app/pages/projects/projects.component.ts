import { Component } from '@angular/core';
import { ProjectCardComponent } from "../../components/project-card/project-card.component"
import { CommonModule } from '@angular/common';
import { Project } from '../../model/Project';
import { PORTFOLIO_ITEMS } from '../../data/portfolio-items';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = PORTFOLIO_ITEMS;
}
