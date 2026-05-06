import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-child-component',
  imports: [],
  templateUrl: './user-child-component.html',
  styleUrl: './user-child-component.css',
})
export class UserChildComponent {
  @Input() userInfo: userInfo | null = null;
  @Output() genderChange = new EventEmitter<userInfo>();

  onGenderChange(gender: string) {
    this.genderChange.emit({ ...this.userInfo, gender } as userInfo);
  }
}
