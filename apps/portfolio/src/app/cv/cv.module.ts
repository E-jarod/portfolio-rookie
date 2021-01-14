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
import { CvRoutingModule } from '../cv-routing.module';
// Fontawesome
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faAngular,
  faGithub,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
// Components
import { CvSectionComponent } from './cv-section/cv-section.component';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { SkillBarComponent } from '@portfolio/ui';

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
    FontAwesomeModule,
  ],
  declarations: [CvComponent, CvSectionComponent, SkillBarComponent],
})
export class CvModule {
  fontAwesomeIcons: IconDefinition[] = [
    faGithub,
    faLinkedin,
    faLinkedinIn,
    faTwitter,
    faPaperPlane,
    faAngular,
  ];

  constructor(library: FaIconLibrary) {
    library.addIcons(...this.fontAwesomeIcons);
  }
}
