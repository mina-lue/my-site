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

  goBack(): void {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      this.location.back();
      return;
    }

    this.router.navigateByUrl('/portfolio');
  }
}
