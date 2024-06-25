import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { CustomerAutenticationComponent } from '../customer-autentication/customer-autentication.component';
import { SingleCustomerComponent } from '../single-customer/single-customer.component';

@Component({
  selector: 'app-client-data',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, CustomerAutenticationComponent, SingleCustomerComponent],
  templateUrl: './client-data.component.html',
  styleUrl: './client-data.component.css'
})
export class ClientDataComponent {
  private num = inject(FormBuilder);

  clientData: boolean = true
  customerAutentication: boolean = false;
  singleCard: boolean = false;

  numberPhone: any = this.num.group({
    numPhone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]$')]]
  });

  constructor() {
  }

  validatorNumber() {
    this.clientData = false;
    if (!this.clientData) {
      this.customerAutentication = true;
    }
  }

}
