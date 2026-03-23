import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../model/Project';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project: Project| undefined= undefined;
}
