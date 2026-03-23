import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioDetailsComponent } from './pages/portfolio-details/portfolio-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio/:slug', component: PortfolioDetailsComponent },
  { path: '**', redirectTo: '' }
];
