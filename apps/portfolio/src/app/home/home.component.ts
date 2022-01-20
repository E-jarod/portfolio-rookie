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
  readonly erenPP = "url('assets/eren_freedom_new_square_sm.png')";
  private _frameworksSkills: CvSkill[] = [
    new CvSkill('Angular', 60, 90, 'warn', ['fab', 'angular']),
    new CvSkill('Flutter', 40, 70, 'accent', 'dove'),
    new CvSkill('Vue', 30, 60, 'warn', ['fab', 'vuejs']),
    new CvSkill('Nestjs', 20, 50, 'primary', ['fab', 'node-js']),
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
