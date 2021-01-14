import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss'],
})
export class SkillBarComponent implements OnInit {
  @Input() skillName = '';

  constructor() {}

  ngOnInit(): void {}
}
