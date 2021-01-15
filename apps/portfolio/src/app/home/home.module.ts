import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material modules
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { HomeRoutingModule } from './home-routing.module';
// Components
import { HomeComponent } from './home.component';

const MaterialModules = [
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatProgressBarModule,
];

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ...MaterialModules,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
