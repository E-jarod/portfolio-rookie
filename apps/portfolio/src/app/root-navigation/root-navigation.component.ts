import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

class RoutingLink {
  constructor(
    private routingPath: string | any[],
    private routingLabel: string
  ) {}

  get path(): string | any[] {
    return this.routingPath;
  }

  get label(): string {
    return this.routingLabel;
  }
}

class SocialInfo {
  constructor(
    private socialLink: string,
    private socialIcon: IconProp
  ) {}

  get link(): string {
    return this.socialLink;
  }

  get icon(): IconProp {
    return this.socialIcon;
  }
}

@Component({
  selector: 'portfolio-root-navigation',
  templateUrl: './root-navigation.component.html',
  styleUrls: ['./root-navigation.component.scss'],
})
export class RootNavigationComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  private _links: RoutingLink[] = [
    new RoutingLink(['/home'], 'Acceuil'),
    new RoutingLink(['/cv'], 'CV'),
    new RoutingLink(['/skills'], 'Compétences'),
    new RoutingLink(['/courses'], 'Formations'),
    // new RoutingLink(['/tech-watch'], 'Veille'),
    new RoutingLink(['/contact'], 'Contact'),
  ];
  private _socialInfos: SocialInfo[] = [
    new SocialInfo('https://github.com/E-jarod', ['fab', 'github']),
    new SocialInfo('https://www.linkedin.com/in/e-jarod/', [
      'fab',
      'linkedin',
    ]),
    new SocialInfo('https://twitter.com/E_jarod7', [
      'fab',
      'twitter',
    ]),
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  get links(): RoutingLink[] {
    return this._links;
  }

  get socialInfos(): SocialInfo[] {
    return this._socialInfos;
  }
}
