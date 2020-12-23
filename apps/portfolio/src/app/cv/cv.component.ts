import { Component, OnInit } from '@angular/core';
import { CvSkillsProgressBar } from './cv.model';

@Component({
  selector: 'portfolio-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
	frameworksSkills: CvSkillsProgressBar[] = [
		new CvSkillsProgressBar('Angular', 60, 90)
	];

	languagesSkills: CvSkillsProgressBar[] = [
		new CvSkillsProgressBar('HTML/CSS', 90, 100),
		new CvSkillsProgressBar('C/C++', 40, 50),
		new CvSkillsProgressBar('PHP', 40, 50),
		new CvSkillsProgressBar('HTML/CSS', 90, 100),
		new CvSkillsProgressBar('SQL', 40, 60),
		new CvSkillsProgressBar('Python', 20, 30),
		new CvSkillsProgressBar('Typescript', 70, 90),
		new CvSkillsProgressBar('Java', 50, 70),
		new CvSkillsProgressBar('C#', 20, 60),
	];

	otherSkills: CvSkillsProgressBar[] = [
		new CvSkillsProgressBar('Office', 70, 100)
	];

  constructor() { }

  ngOnInit(): void {
  }

}
