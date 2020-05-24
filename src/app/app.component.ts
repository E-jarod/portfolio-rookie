import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHourglassHalf as fasHourglassHalf } from '@fortawesome/free-solid-svg-icons';
// import { faHourglass as fasHourglass } from '@fortawesome/free-solid-svg-icons';
// import { faHourglass as farHourglass } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      fasHourglassHalf,
      // fasHourglass,
      // farHourglass
      );
  }
}
