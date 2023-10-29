import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contact: any = {
    name: '',
    email: '',
    phone: ''
  };
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    // Here, you can send the contact details to your backend or perform any other desired action.
    console.log('Contact form submitted:', this.contact);
  }
}
