import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
// Icons
import {
	faAndroid,
  faAngular,
	faGitAlt,
  faGithub,
	faGitlab,
  faGoogleDrive,
  faHtml5,
  faJava,
  faJs,
  faLinkedin,
  faLinkedinIn,
	faLinux,
  faNodeJs,
  faPhp,
  faPython,
  faReact,
  faStackOverflow,
  faTwitter,
  faVuejs,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBirthdayCake,
  faCode,
  faDatabase,
  faDove,
  faEnvelope,
	faFlagUsa,
	faGlobeAmericas,
	faGlobeAsia,
  faPaperPlane,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

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
    faBirthdayCake,
    faEnvelope,
    faPhone,
    faPhp,
    faNodeJs,
    faDove,
    faCode,
    faHtml5,
    faJava,
    faJs,
    faDatabase,
    faPython,
    faVuejs,
    faReact,
    faStackOverflow,
    faGoogleDrive,
		faGitAlt,
		faGitlab,
		faGlobeAmericas,
		faGlobeAsia,
		faLinux,
		faAndroid,
  ];

  constructor(library: FaIconLibrary) {
    library.addIcons(...this.fontAwesomeIcons);
  }
}
