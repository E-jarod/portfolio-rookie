import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Card } from '../model/card.model';
import { CvSkill } from '../cv/cv.model';

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	private _frameworksSkills: CvSkill[] = [
    new CvSkill('Angular', 50, 90, 'warn', ['fab', 'angular']),
    new CvSkill('Flutter', 20, 50, 'accent', 'dove'),
    new CvSkill('Vue', 30, 60, 'warn', ['fab', 'vuejs']),
    new CvSkill('Android', 30, 50, 'primary', ['fab', 'android']),
  ];

	get skills(): CvSkill[] {
    return this._frameworksSkills;
  }

  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(() => {
  //     return [
  //       new Card('Card 1 lg', 1, 1, 'content-text'),
  //       new Card('Card 2 lg', 1, 1, 'chart'),
  //     ];
  //   })
  // );

  // constructor(private breakpointObserver: BreakpointObserver) {}
}
