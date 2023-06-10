import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';


const routes: Routes = [
  { path: 'presentation' ,  title:'Présentation', loadComponent: ()=> import('./components/presentation/presentation.component').then(module =>module.PresentationComponent)},
  { path: 'cv' ,  title:'Cv', loadComponent: ()=> import('./components/cv/cv.component').then(module =>module.CvComponent)},
]

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

