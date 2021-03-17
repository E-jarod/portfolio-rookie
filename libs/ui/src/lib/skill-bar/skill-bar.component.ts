import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'portfolio-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss'],
})
export class SkillBarComponent implements OnInit {
  @Input() skillName = 'ERROR_NO_NAME';
  @Input() color: ThemePalette = 'primary';
  @Input() mode: ProgressBarMode = 'buffer';
  @Input() value = 0;
  @Input() bufferValue = 0;
	@Input() icon: IconProp = 'code';
	@Input() vertical = true;
	@Input() noGrid = false;

  constructor() {}

  ngOnInit(): void {}
}
