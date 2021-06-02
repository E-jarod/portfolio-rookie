import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'portfolio-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  mailTo = 'mailto:ejilane.jarod@gmail.com';
  // contactForm = this.fb.group({
  //   firstName: [null, Validators.required],
  //   lastName: [null, Validators.required],
  //   email: [
  //     null,
  //     Validators.compose([Validators.required, Validators.email]),
  //   ],
  //   tel: [null],
  //   subject: [null, Validators.required],
  //   message: [null, Validators.required],
  // });

  // constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.contactForm.valueChanges.subscribe(console.log);
  // }

  // onSubmit() {
  //   const subject =
  //     this.contactForm.value.subject +
  //     '[' +
  //     this.contactForm.value.firstName +
  //     ' ' +
  //     this.contactForm.value.lastName +
  //     ']';
  //   const body = this.contactForm.value.message;
  //   console.log(`${this.mailTo}?subject=${subject}&body=${body}`);
  // }
}
