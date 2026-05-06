import { Component, inject, Output, EventEmitter } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  private router = inject(Router);
  
  @Output() logout = new EventEmitter<void>();
  
  login(): void {
    console.log('Login button clicked in header');
    this.router.navigate(['/login']);
    // Here you can implement the logic to navigate to the login page or open a login modal
  }

  setLoginProps(): void {
    this.logout.emit();
  }
}
