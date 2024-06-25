import { Component } from '@angular/core';

import { SingleCustomerComponent } from '../single-customer/single-customer.component';

@Component({
  selector: 'app-customer-autentication',
  standalone: true,
  imports: [SingleCustomerComponent],
  templateUrl: './customer-autentication.component.html',
  styleUrl: './customer-autentication.component.css'
})
export class CustomerAutenticationComponent {

  codeSuccess: boolean = false;
  customerAutentication: boolean = true;
  singleCard: boolean = false;

  validationCode() {
    this.customerAutentication = false;
    if (!this.customerAutentication) {
      this.codeSuccess = true;
      this.singleCard = true;
    }
  }

}
