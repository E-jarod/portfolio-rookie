import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// Components
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';

const MaterialModules = [
  MatCardModule,
  MatGridListModule,
  MatProgressBarModule,
];

@NgModule({
  imports: [CommonModule, SkillsRoutingModule, ...MaterialModules],
  declarations: [SkillsComponent],
})
export class SkillsModule {}
