import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillBarComponent } from './skill-bar.component';
// Material Modules
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FontawesomeModule } from '@portfolio/shared';

const MaterialModules = [MatProgressBarModule];

@NgModule({
  imports: [CommonModule, ...MaterialModules, FontawesomeModule],
  declarations: [SkillBarComponent],
  exports: [SkillBarComponent],
})
export class SkillBarModule {}
