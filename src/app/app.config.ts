import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';


const routes: Routes = [
  { path: 'presentation' ,  title:'Présentation', loadComponent: ()=> import('./components/presentation/presentation.component').then(module =>module.PresentationComponent)},
  { path: 'cv' ,  title:'Cv', loadComponent: ()=> import('./components/cv/cv.component').then(module =>module.CvComponent)},
  { path: 'accueil' ,  title:'Accueil', loadComponent: ()=> import('./components/accueil/accueil.component').then(module =>module.AccueilComponent)},
  { path: 'project' ,  title:'Projet', loadComponent: ()=> import('./components/projects/projects.component').then(module =>module.ProjectsComponent)},
  { path: '' ,  title:'Accueil', loadComponent: ()=> import('./components/accueil/accueil.component').then(module =>module.AccueilComponent)},
]

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

