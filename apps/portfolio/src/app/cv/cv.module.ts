import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// CDK modules
import { CdkStepperModule } from '@angular/cdk/stepper';
// Material modules
import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { SkillBarModule } from '@portfolio/ui';
import { FontawesomeModule } from '@portfolio/shared';
import { CvRoutingModule } from './cv-routing.module';
// Components
import { CvComponent } from './cv.component';
import { CvSectionComponent } from './cv-section/cv-section.component';

const CdkModules = [CdkStepperModule];

const MaterialModules = [
  MatCardModule,
  MatListModule,
  MatButtonModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...CdkModules,
    ...MaterialModules,
    CvRoutingModule,
    FontawesomeModule,
    SkillBarModule,
  ],
  declarations: [CvComponent, CvSectionComponent],
})
export class CvModule {}
