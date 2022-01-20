import { Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-cv-section',
  templateUrl: './cv-section.component.html',
  styleUrls: ['./cv-section.component.scss'],
})
export class CvSectionComponent {
  @Input() title = '';
  @Input() isRed = false;
  @Input() isBgRed = false;

  get titleClasses() {
    return {
      'text-blue-700': !this.isRed,
      'text-red-500': this.isRed,
    };
  }

  get sectionClasses() {
    return {
      'bg-red-50': this.isBgRed,
      'bg-white': !this.isBgRed,
    };
  }
}
