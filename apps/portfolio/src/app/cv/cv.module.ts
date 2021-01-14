import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';
// CDK modules
import { CdkStepperModule } from '@angular/cdk/stepper';
// Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CvRoutingModule } from '../cv-routing.module';

const CdkModules = [
  // LayoutModule,
  // A11yModule,
  // ClipboardModule,
  // DragDropModule,
  // PortalModule,
  // ScrollingModule,
  CdkStepperModule,
];

const MaterialModule = [
  // MatAutocompleteModule,
  // MatBadgeModule,
  // MatBottomSheetModule,
  MatButtonModule,
  // MatButtonToggleModule,
  MatCardModule,
  // MatCheckboxModule,
  // MatChipsModule,
  // MatNativeDateModule,
  MatRippleModule,
  // MatDatepickerModule,
  // MatDialogModule,
  // MatDividerModule,
  // MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  // MatPaginatorModule,
  MatProgressBarModule,
  // MatProgressSpinnerModule,
  // MatRadioModule,
  // MatSelectModule,
  MatSidenavModule,
  // MatSlideToggleModule,
  // MatSliderModule,
  // MatSnackBarModule,
  // MatSortModule,
  MatStepperModule,
  // MatTableModule,
  // MatTabsModule,
  MatToolbarModule,
  // MatTooltipModule,
  // MatTreeModule,
];

@NgModule({
  imports: [CommonModule, ...CdkModules, ...MaterialModule, CvRoutingModule],
  declarations: [CvComponent],
})
export class CvModule {}
