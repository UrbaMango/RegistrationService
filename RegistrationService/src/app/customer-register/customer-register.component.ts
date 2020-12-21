import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

    title = 'Registration';

    public name = "";
    public surname = "";
    public phoneNumber: number;
    public email = "";

    showMsg: boolean = false;

    customer: Customer;

    result: Customer;

    Submit(): void {
        this.customer = {
            name: this.name,
            surname: this.surname,
            phoneNumber: this.phoneNumber,
            email: this.email,
        };

        this.customerService.register(this.customer)
            .subscribe(result => this.result = result);

        this.showMsg = true;
    }

    constructor(private customerService: CustomerService) {
    }

  ngOnInit(): void {
  }

}
