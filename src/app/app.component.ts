import { Component } from '@angular/core';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faHourglass = faHourglass;
}
