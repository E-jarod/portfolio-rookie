import { Component } from '@angular/core';
import {
  CvSkillsProgressBar,
  BannerInfo,
  SocialInfo,
  InterestInfo,
} from './cv.model';

@Component({
  selector: 'portfolio-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  print(): void {}

  get targets(): string[] {
    return [
      'Devenir un <b>expert</b> en informatique',
      'Devenir <b>responsable</b> de projets',
      '<b>Comprendre</b> les éxigences du secteur informatique',
      'Découvrir de <b>nouvelles notions</b> informatiques',
    ];
  }

  get frameworksSkills(): CvSkillsProgressBar[] {
    return [
      new CvSkillsProgressBar('Angular', 50, 90, 'warn', [
        'fab',
        'angular',
      ]),
      new CvSkillsProgressBar('Vue', 30, 60, 'warn', [
        'fab',
        'vuejs',
      ]),
      new CvSkillsProgressBar('Flutter', 20, 50, 'accent', 'dove'),
      new CvSkillsProgressBar('Android', 30, 50, 'primary', [
        'fab',
        'android',
      ]),
      new CvSkillsProgressBar('Nestjs', 20, 50, 'accent', [
        'fab',
        'node-js',
      ]),
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
      new CvSkillsProgressBar('Git', 50, 60, 'warn', [
        'fab',
        'git-alt',
      ]),
      new CvSkillsProgressBar('Arch', 60, 70, 'warn', [
        'fab',
        'linux',
      ]),
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

  get socialInfos(): SocialInfo[] {
    return [
      new SocialInfo(
        'https://github.com/E-jarod',
        ['fab', 'github'],
        'text-black',
        'E-jarod'
      ),
      new SocialInfo(
        'https://gitlab.com/E-jarod',
        ['fab', 'gitlab'],
        'text-yellow-600',
        'E-jarod'
      ),
      new SocialInfo(
        'https://www.linkedin.com/in/e-jarod/',
        ['fab', 'linkedin'],
        'text-blue-800',
        'Jarod EJILANE'
      ),
      new SocialInfo(
        'https://twitter.com/E_jarod7',
        ['fab', 'twitter'],
        'text-blue-400',
        'E_jarod7'
      ),
      new SocialInfo(
        'https://stackoverflow.com/users/13041777/e-jarod',
        ['fab', 'stack-overflow'],
        'text-yellow-600',
        '13041777'
      ),
    ];
  }

  get languages(): CvSkillsProgressBar[] {
    return [
      new CvSkillsProgressBar(
        'Anglais',
        70,
        95,
        'warn',
        'globe-americas'
      ),
      new CvSkillsProgressBar(
        'Tamoul',
        80,
        100,
        'primary',
        'globe-asia'
      ),
    ];
  }

  get interests(): InterestInfo[] {
    return [
      new InterestInfo('Développement', 'code'),
      new InterestInfo('Veille Technologique', 'book'),
      new InterestInfo('Sciences & Mathématiques', 'square-root-alt'),
      new InterestInfo('Sports (Basketball)', 'basketball-ball'),
      new InterestInfo('Cuisine Indienne', 'utensils'),
    ];
  }
}
