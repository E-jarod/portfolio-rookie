import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { CvComponent } from './component/cv/cv.component';
import { SkillsComponent } from './component/skills/skills.component';
import { EducationComponent } from './component/education/education.component';
import { TechWatchComponent } from './component/tech-watch/tech-watch.component';
import { ContactComponent } from './component/contact/contact.component';
import { ErrorComponent } from './component/error/error.component';


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
    path: 'education',
    component: EducationComponent
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
