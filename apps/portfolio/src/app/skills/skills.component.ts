import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CvSkill, CvSkillsGroup } from '../cv/cv.model';
import { SkillCard, Skill } from '../model/card.model';

@Component({
  selector: 'portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
	private _frameworksSkills: CvSkill[] = [
    new CvSkill('Angular', 50, 90, 'warn', ['fab', 'angular']),
    new CvSkill('Vue', 30, 60, 'warn', ['fab', 'vuejs']),
    new CvSkill('Flutter', 20, 50, 'accent', 'dove'),
    new CvSkill('Android', 30, 50, 'primary', ['fab', 'android']),
    new CvSkill('Nestjs', 20, 50, 'accent', ['fab', 'node-js']),
    new CvSkill('React', 10, 50, 'primary', ['fab', 'react']),
  ];
  private _languagesSkills: CvSkill[] = [
    new CvSkill('TS/JS', 70, 90, 'warn', ['fab', 'js']),
    new CvSkill('Java', 50, 70, 'accent', ['fab', 'java']),
    new CvSkill('Sass', 50, 60, 'warn', ['fab', 'sass']),
    new CvSkill('Python', 20, 30, 'primary', ['fab', 'python']),
    new CvSkill('SQL', 40, 60, 'primary', 'database'),
    new CvSkill('PHP', 40, 50, 'primary', ['fab', 'php']),
  ];
  private _otherSkills: CvSkill[] = [
    new CvSkill('Git', 50, 60, 'warn', ['fab', 'git-alt']),
    new CvSkill('Arch', 60, 70, 'warn', ['fab', 'linux']),
    new CvSkill('Office', 70, 80, 'primary', ['fab', 'google-drive']),
  ];
  private _skillsGroup: CvSkillsGroup[] = [
    new CvSkillsGroup('Frameworks', this._frameworksSkills),
    new CvSkillsGroup('Languages', this._languagesSkills),
    new CvSkillsGroup('Autres', this._otherSkills),
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}

	get skillsGroups(): CvSkillsGroup[] {
    return this._skillsGroup;
  }
}
