import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //items = Array(9).fill({});
items =[{
  logo: 'csharp',
  header: 'C# Interview Questions',
  articleTitle: 'C Sharp Interview Questions',
  summary: 'C Sharp Interview Questions C Sharp Interview Questions C Sharp Interview Questions'
},
{
  logo: 'angular',
  header: 'Angular Interview Questions',
  articleTitle: 'Angular Interview Questions',
  summary: 'C Sharp Interview Questions C Sharp Interview Questions C Sharp Interview Questions'
},
{
  logo: 'net-core',
  header: '.Net Core Interview Questions',
  articleTitle: '.Net Core Interview Questions',
  summary: 'C Sharp Interview Questions C Sharp Interview Questions C Sharp Interview Questions'
},
{
  logo: 'web-api',
  header: 'Web API Interview Questions',
  articleTitle: 'Web API Interview Questions',
  summary: 'C Sharp Interview Questions C Sharp Interview Questions C Sharp Interview Questions'
},
{
  logo: 'mvc',
  header: 'ASP.NET MVC Interview Questions',
  articleTitle: 'ASP.NET MVC Interview Questions',
  summary: 'C Sharp Interview Questions C Sharp Interview Questions C Sharp Interview Questions'
},
{
  logo: 'sql',
  header: 'SQL Server Interview Questions',
  articleTitle: 'SQL Interview Questions',
  summary: 'C Sharp Interview Questions C Sharp Interview Questions C Sharp Interview Questions'
}]
  constructor() {}

  ngOnInit() {}
  getImagePath(imageType: string) {
    switch (imageType) {
      case 'angular':
        return 'assets/images/logos/angular.png';
      case 'csharp':
        return 'assets/images/logos/csharp.png';
      case 'mvc':
        return 'assets/images/logos/mvc.png';
      case 'sql':
        return 'assets/images/logos/sql.png';
      case 'net-core':
        return 'assets/images/logos/net-core.png';
      case 'web-api':
        return 'assets/images/logos/web-api.png';
      default:
        return 'path/to/default-image.jpg';
    }
  }
}
