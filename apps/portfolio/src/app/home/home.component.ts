import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

interface ICard {
  title: string;
  cols: number;
  rows: number;
  content?: string;
}

export class Card implements ICard {
  constructor(
    public title: string,
    public cols: number,
    public rows: number,
    public content?: string
  ) {}
}

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
        	new Card('Card 1 sm', 2, 1, 'content-text'),
					new Card('Card 2 sm', 2, 1, 'chart'),
        ];
      }

      return [
				new Card('Card 1 lg', 1, 1, 'content-text'),
				new Card('Card 2 lg', 1, 1, 'chart'),
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
