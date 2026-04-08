import { Component, Input, OnInit } from '@angular/core';
import { ProjectCardComponent } from "../../components/project-card/project-card.component"
import { CommonModule } from '@angular/common';
import { Project, ProjectCategory } from '../../model/Project';
import { PORTFOLIO_ITEMS } from '../../data/portfolio-items';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

type PortfolioCategoryFilter = 'all' | ProjectCategory;

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  @Input() previewMode = false;

  readonly projects: Project[] = PORTFOLIO_ITEMS;
  readonly categoryFilters: { value: PortfolioCategoryFilter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'fun', label: 'Fun' },
    { value: 'learning', label: 'Learning' }
  ];
  readonly previewVisibleCount = 4;
  readonly fullInitialVisibleCount = 4;
  readonly loadMoreStep = 2;

  selectedCategory: PortfolioCategoryFilter = 'all';
  selectedTechnology = 'all';
  visibleCount = this.fullInitialVisibleCount;

  constructor(
    private readonly location: Location,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.visibleCount = this.previewMode ? this.previewVisibleCount : this.fullInitialVisibleCount;
  }

  get technologyFilters(): string[] {
    const values = new Set<string>();
    for (const project of this.orderedProjects) {
      for (const tech of project.technologies ?? []) {
        values.add(tech);
      }
    }
    return ['all', ...Array.from(values).sort((a, b) => a.localeCompare(b))];
  }

  get orderedProjects(): Project[] {
    return [...this.projects].sort((left, right) => Number(Boolean(right.isFlagship)) - Number(Boolean(left.isFlagship)));
  }

  get filteredProjects(): Project[] {
    if (this.previewMode) {
      return this.orderedProjects;
    }

    return this.orderedProjects.filter((project) => {
      const categoryMatches = this.selectedCategory === 'all' || project.category === this.selectedCategory;
      const technologyMatches =
        this.selectedTechnology === 'all' || (project.technologies ?? []).includes(this.selectedTechnology);
      return categoryMatches && technologyMatches;
    });
  }

  get visibleProjects(): Project[] {
    return this.filteredProjects.slice(0, this.visibleCount);
  }

  get hasMoreProjects(): boolean {
    return this.visibleProjects.length < this.filteredProjects.length;
  }

  setCategoryFilter(category: PortfolioCategoryFilter): void {
    if (this.previewMode) {
      return;
    }
    this.selectedCategory = category;
    this.visibleCount = this.fullInitialVisibleCount;
  }

  setTechnologyFilter(technology: string): void {
    if (this.previewMode) {
      return;
    }
    this.selectedTechnology = technology;
    this.visibleCount = this.fullInitialVisibleCount;
  }

  loadMore(): void {
    this.visibleCount += this.loadMoreStep;
  }

  goBack(): void {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      this.location.back();
      return;
    }

    this.router.navigateByUrl('/');
  }
}
