import { Component, OnInit } from '@angular/core';
import { CvSkillsProgressBar, BannerInfo } from './cv.model';

@Component({
  selector: 'portfolio-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  print(): void {}

  get frameworksSkills(): CvSkillsProgressBar[] {
    return [
      new CvSkillsProgressBar('Angular', 50, 90, 'warn', [
        'fab',
        'angular',
      ]),
      new CvSkillsProgressBar('Vue', 30, 70, 'warn', [
        'fab',
        'vuejs',
      ]),
      new CvSkillsProgressBar('Flutter', 20, 50, 'primary', 'dove'),
      new CvSkillsProgressBar('React', 10, 50, 'primary', [
        'fab',
        'react',
      ]),
    ];
  }

  get languagesSkills(): CvSkillsProgressBar[] {
    return [
      new CvSkillsProgressBar('TS/JS', 70, 90, 'warn', ['fab', 'js']),
      new CvSkillsProgressBar('Java', 50, 70, 'accent', [
        'fab',
        'java',
      ]),
      // new CvSkillsProgressBar('HTML/CSS', 90, 100, 'warn', [
      // 	'fab',
      // 	'html5',
      // ]),
      new CvSkillsProgressBar('SQL', 40, 60, 'primary', 'database'),
      new CvSkillsProgressBar('Python', 20, 30, 'primary', [
				'fab',
        'python',
      ]),
			new CvSkillsProgressBar('PHP', 40, 50, 'primary', [
				'fab',
				'php',
			]),
    ];
  }

  get otherSkills(): CvSkillsProgressBar[] {
    return [
      new CvSkillsProgressBar('Office', 70, 80, 'primary', [
        'fab',
        'google-drive',
      ]),
    ];
  }

  get bannerInfos(): BannerInfo[] {
    return [
      new BannerInfo('envelope', 'ejilane.jarod@gmail.com'),
      new BannerInfo('phone', '07 68 45 86 63'),
      new BannerInfo('birthday-cake', '20 ans'),
    ];
  }
}
