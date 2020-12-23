import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SkillCard, Skill } from '../model/card.model';

@Component({
  selector: 'portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(() => {
      return [
        new SkillCard('Angular', 2, 1, new Skill('warn', 60, 90)),
				new SkillCard('Flutter', 2, 1, new Skill('accent', 20, 80)),
				new SkillCard('TypeScript', 1, 1, new Skill('accent', 70, 95)),
				new SkillCard('Rust', 1, 1, new Skill('accent', 20, 70)),
				new SkillCard('Node.js', 1, 1, new Skill('accent', 20, 70)),
				new SkillCard('Java', 1, 1, new Skill('primary', 50, 70)),
				new SkillCard('PHP', 1, 1, new Skill('primary', 40, 45)),
				new SkillCard('MongoDB', 1, 1, new Skill('accent', 0, 70)),
				new SkillCard('MySQL', 1, 1, new Skill('primary', 40, 50)),
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}
}
