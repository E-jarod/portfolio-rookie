import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';
// CDK modules
import { CdkStepperModule } from '@angular/cdk/stepper';
// Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CvRoutingModule } from './cv-routing.module';
import { SkillBarModule } from '@portfolio/ui';
import { FontawesomeModule } from '@portfolio/shared';
// Components
import { CvSectionComponent } from './cv-section/cv-section.component';

const CdkModules = [CdkStepperModule];

const MaterialModule = [
  MatButtonModule,
  MatCardModule,
  MatRippleModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatStepperModule,
  MatToolbarModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...CdkModules,
    ...MaterialModule,
    CvRoutingModule,
    FontawesomeModule,
    SkillBarModule,
  ],
  declarations: [CvComponent, CvSectionComponent],
})
export class CvModule {}
