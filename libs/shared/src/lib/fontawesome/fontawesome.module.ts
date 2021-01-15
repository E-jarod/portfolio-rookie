import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
// Icons
import {
  faAngular,
  faGithub,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class FontawesomeModule {
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
