import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CvComponent } from './cv/cv.component';
import { SkillsComponent } from './skills/skills.component';
import { SchoolComponent } from './school/school.component';
import { TechWatchComponent } from './tech-watch/tech-watch.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cv',
    component: CvComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'school',
    component: SchoolComponent
  },
  {
    path: 'tech-watch',
    component: TechWatchComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
