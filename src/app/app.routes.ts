import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { NotFoundComponent } from './main/notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./main/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./main/about/about.component').then(m => m.AboutComponent) },
  { path: 'projects', loadComponent: () => import('./main/projects/projects.component').then(m => m.ProjectsComponent) },
  { path: '**', loadComponent: () => import('./main/notfound/notfound.component').then(m => m.NotFoundComponent) }
];

