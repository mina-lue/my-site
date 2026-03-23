import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PORTFOLIO_ITEMS } from '../../data/portfolio-items';
import { Project } from '../../model/Project';
import { Location } from '@angular/common';

@Component({
  selector: 'app-portfolio-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio-details.component.html',
  styleUrl: './portfolio-details.component.scss'
})
export class PortfolioDetailsComponent implements OnInit {
  project: Project | undefined;
  private readonly techLogos: Record<string, string> = {
    Angular: 'https://cdn.simpleicons.org/angular/DD0031',
    Firebase: 'https://cdn.simpleicons.org/firebase/FFCA28',
    'REST APIs': 'https://cdn.simpleicons.org/openapiinitiative/6BA539',
    'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    React: 'https://cdn.simpleicons.org/react/61DAFB',
    'Responsive UI': 'https://cdn.simpleicons.org/css/1572B6',
    'Spring Boot': 'https://cdn.simpleicons.org/springboot/6DB33F',
    'SQL Database': 'https://cdn.simpleicons.org/mysql/4479A1',
    Charting: 'https://cdn.simpleicons.org/chartdotjs/FF6384',
    'Workflow Automation': 'https://cdn.simpleicons.org/n8n/EA4B71'
  };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly location: Location,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.project = PORTFOLIO_ITEMS.find((item) => item.slug === slug);
    });
  }

  getTechnologyLogo(technology: string): string {
    return this.techLogos[technology] ?? 'https://cdn.simpleicons.org/devbox/9AA4B2';
  }

  goBack(): void {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      this.location.back();
      return;
    }

    this.router.navigateByUrl('/portfolio');
  }
}
