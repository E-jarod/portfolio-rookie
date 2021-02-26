import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-cv-section',
  templateUrl: './cv-section.component.html',
  styleUrls: ['./cv-section.component.scss'],
})
export class CvSectionComponent implements OnInit {
  @Input() title = '';
	@Input() titleClasses = Array<string>();
	@Input() sectionClasses = Array<string>();

  constructor() {}

  ngOnInit(): void {}
}
