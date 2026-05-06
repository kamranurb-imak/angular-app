import { Component } from '@angular/core';
import { UserChildComponent } from '../user-child-component/user-child-component';

@Component({
  selector: 'app-user-parent-component',
  imports: [UserChildComponent],
  templateUrl: './user-parent-component.html',
  styleUrl: './user-parent-component.css',
})
export class UserParentComponent {
  userInfo: userInfo = {'name': 'Kamran', 'age': 30, 'country': 'Pakistan', gender: ''};

  getGender(userInformation: userInfo) {
    console.log('Gender received from child component:', userInformation.gender);
    this.userInfo = userInformation;
    console.log('Updated userInfo in parent component:', this.userInfo);
  }
}
