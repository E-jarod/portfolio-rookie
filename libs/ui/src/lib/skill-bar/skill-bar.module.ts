import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillBarComponent } from './skill-bar.component';
// Material Modules
import { MatProgressBarModule } from '@angular/material/progress-bar';

const MaterialModules = [MatProgressBarModule];

@NgModule({
  imports: [CommonModule, ...MaterialModules],
  declarations: [SkillBarComponent],
  exports: [SkillBarComponent],
})
export class SkillBarModule {}
