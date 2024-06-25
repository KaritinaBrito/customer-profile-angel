import { Component } from '@angular/core';

@Component({
  selector: 'app-single-customer',
  standalone: true,
  imports: [],
  templateUrl: './single-customer.component.html',
  styleUrl: './single-customer.component.css'
})
export class SingleCustomerComponent {
  customerAutentication: boolean = false;
  singleCard: boolean = false;
  clientData: boolean = true


  cancel() {
    this.singleCard = false;
    this.clientData = true;
  }

}
