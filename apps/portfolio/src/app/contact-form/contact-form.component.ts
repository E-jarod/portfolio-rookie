import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'portfolio-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required],
    tel: [null, Validators.required],
    message: [null, Validators.required],
    // postalCode: [
    //   null,
    //   Validators.compose([
    //     Validators.required,
    //     Validators.minLength(5),
    //     Validators.maxLength(5),
    //   ]),
    // ],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
