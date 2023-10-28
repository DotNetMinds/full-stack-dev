import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.css']
})
export class UnderConstructionComponent {

  constructor(private router: Router) {

  }
  navigateHome(): void {
    this.router.navigate(['/']);
  }
}
