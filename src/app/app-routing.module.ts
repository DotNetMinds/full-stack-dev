import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  // Default route to navigate to AppComponent on app launch
  { path: '', component: HomeComponent, pathMatch: 'full' },

  // Route for the Under Construction page
  { path: 'under-construction', component: UnderConstructionComponent, pathMatch: 'full' },

  // Wildcard route to capture all unknown routes and redirect to Under Construction

  { path: 'contact-us', component: ContactUsComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'under-construction', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
