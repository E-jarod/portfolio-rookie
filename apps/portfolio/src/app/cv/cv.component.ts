import { Component } from '@angular/core';
import {
  CvSkill,
  BannerInfo,
  SocialInfo,
  InterestInfo,
  CvSkillsGroup,
} from './cv.model';

@Component({
  selector: 'portfolio-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  private _targets: string[] = [
    'Devenir un <b>expert</b> en informatique',
    'Devenir <b>responsable</b> de projets',
    '<b>Comprendre</b> les éxigences du secteur informatique',
    'Découvrir de <b>nouvelles notions</b> informatiques',
  ];

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
    // new CvSkill('HTML/CSS', 90, 100, 'warn', [
    // 	'fab',
    // 	'html5',
    // ]),
    new CvSkill('SQL', 40, 60, 'primary', 'database'),
    new CvSkill('Python', 20, 30, 'primary', ['fab', 'python']),
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

  private _bannerInfos: BannerInfo[] = [
    new BannerInfo('envelope', 'ejilane.jarod@gmail.com'),
    new BannerInfo('phone', '07 68 45 86 63'),
    new BannerInfo('birthday-cake', '20 ans'),
  ];
  private _socialInfos: SocialInfo[] = [
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
  private _languages: CvSkill[] = [
    new CvSkill('Anglais', 70, 95, 'warn', 'globe-americas'),
    new CvSkill('Tamoul', 80, 100, 'primary', 'globe-asia'),
  ];
  private _interests: InterestInfo[] = [
    new InterestInfo('Développement', 'code'),
    new InterestInfo('Veille Technologique', 'book'),
    new InterestInfo('Sciences & Mathématiques', 'square-root-alt'),
    new InterestInfo('Sports (Basketball)', 'basketball-ball'),
    new InterestInfo('Cuisine Indienne', 'utensils'),
  ];

  print(): void {}

  get targets(): string[] {
    return this._targets;
  }

  get skillsGroups(): CvSkillsGroup[] {
    return this._skillsGroup;
  }

  get bannerInfos(): BannerInfo[] {
    return this._bannerInfos;
  }

  get socialInfos(): SocialInfo[] {
    return this._socialInfos;
  }

  get languages(): CvSkill[] {
    return this._languages;
  }

  get interests(): InterestInfo[] {
    return this._interests;
  }
}
