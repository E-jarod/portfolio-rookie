import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { FontawesomeModule } from '@portfolio/shared';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

const MaterialModules = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...MaterialModules,
    FontawesomeModule,
    ContactRoutingModule,
  ],
  declarations: [ContactComponent, ContactFormComponent],
})
export class ContactModule {}
