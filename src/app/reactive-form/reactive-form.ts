import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveFormComponent {
  userProfileForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    userPassword: new FormControl('', [Validators.minLength(5), Validators.required]),
    userEmail : new FormControl('', [Validators.required, Validators.maxLength(50), Validators.email])
  });

  onSubmit() {
    console.log('Form Values:', this.userProfileForm.value);
  }

   setGroupValues() {
    this.userName?.setValue('rayyan');
    this.userEmail?.setValue('rayyan@example.com');
    this.userPassword?.setValue('rayyan$12345');
  }

  get userName() {
    return this.userProfileForm.get('userName');
  }

  get userEmail() {
    return this.userProfileForm.get('userEmail');
  }

  get userPassword() {
    return this.userProfileForm.get('userPassword');
  }

  name = new FormControl('default value');
  email = new FormControl('default email');
  password = new FormControl('default password');

  displayValues() {
    console.log('Name:', this.name.value);
    console.log('Email:', this.email.value);
    console.log('Password:', this.password.value);
  }

  setValues() {
    this.name.setValue('kamran');
    this.email.setValue('kamran@example.com');
    this.password.setValue('password123');
  }

}
