import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {CvComponent} from "./cv/cv.component";
import {ContactComponent} from "./contact/contact.component";
import {CoursesComponent} from "./courses/courses.component";
import {SkillsComponent} from "./skills/skills.component";
import {TechWatchComponent} from "./tech-watch/tech-watch.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		component: HomeComponent,
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
		path: 'courses',
		component: CoursesComponent
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
	exports: [RouterModule],
})
export class AppRoutingModule {
}
