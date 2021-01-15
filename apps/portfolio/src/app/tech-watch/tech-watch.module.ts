import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material Modules
import { MatListModule } from '@angular/material/list';

import { FontawesomeModule } from '@portfolio/shared';
import { TechWatchRoutingModule } from './tech-watch-routing.module';
// Components
import { TechWatchComponent } from './tech-watch.component';

const MaterialModules = [
  MatListModule,
];

@NgModule({
  imports: [
    CommonModule,
    TechWatchRoutingModule,
    ...MaterialModules,
    FontawesomeModule,
  ],
  declarations: [TechWatchComponent],
})
export class TechWatchModule {}
