import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css',
})
export class TemplateDrivenFormComponent {

  userDetails: any = {
    name: '',
    password: '',
    gender: '',
    age: '',
  };
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.userDetails = form.value;

    console.log('User Name:', this.userDetails.name);
    console.log('User Password:', this.userDetails.password);
    console.log('User Gender:', this.userDetails.gender);
    console.log('User Age:', this.userDetails.age);
  }
}
