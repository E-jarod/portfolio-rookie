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
  faJava,
  faJs,
  faLinkedin,
  faLinkedinIn,
  faLinux,
  faNodeJs,
  faPhp,
  faPython,
  faReact,
  faSass,
  faStackOverflow,
  faTwitter,
  faVuejs,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBasketballBall,
  faBirthdayCake,
  faBook,
  faCode,
  faDatabase,
  faDove,
  faEnvelope,
  faFeather,
  faGlobeAmericas,
  faGlobeAsia,
  faPaperPlane,
  faPhone,
  faSquareRootAlt,
  faUtensils,
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
    faBasketballBall,
    faSquareRootAlt,
    faUtensils,
    faBook,
    faSass,
    faFeather,
  ];

  constructor(library: FaIconLibrary) {
    library.addIcons(...this.fontAwesomeIcons);
  }
}
