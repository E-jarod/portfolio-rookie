import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
// Material Modules
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';

import { CoursesComponent } from './courses.component';

const MaterialModules = [
  MatListModule,
  MatStepperModule,
];

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ...MaterialModules,
  ],
  declarations: [CoursesComponent],
})
export class CoursesModule {}
