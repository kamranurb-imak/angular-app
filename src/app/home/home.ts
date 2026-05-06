import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToProfile() {
    // this.router.navigate(['/profile', { name: 'kamran', id: 123 }]);

    this.router.navigate(['/profile'], { queryParams: { name: 'kami', id: 24 } });
  }
}
