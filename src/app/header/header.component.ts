import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {
  }

  navigateTo(routeName: string) {
    // Split the URL by '/'
    const baseUrl = this.router.url.split('/').slice(0, -1).join('/');
    console.log(`Navigating to ${baseUrl}/${routeName}`);
    this.router.navigateByUrl(`${baseUrl}/${routeName}`);
  }

}
