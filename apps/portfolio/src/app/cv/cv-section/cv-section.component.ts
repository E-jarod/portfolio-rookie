import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-cv-section',
  templateUrl: './cv-section.component.html',
  styleUrls: ['./cv-section.component.scss'],
})
export class CvSectionComponent implements OnInit {
  @Input() title = '';

  constructor() {}

  ngOnInit(): void {}
}
