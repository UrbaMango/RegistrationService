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

    showNameError: boolean = false;
    showSurnameError: boolean = false;
    showPhoneNumberError: boolean = false;
    showEmailError: boolean = false;
    notFilledError: boolean = false;

    check: boolean = false;

    customer: Customer;

    result: Customer;

    Submit(): void {
        
        if(this.Check()){
            this.notFilledError = false;

            this.customer = {
                name: this.name,
                surname: this.surname,
                phoneNumber: this.phoneNumber,
                email: this.email,
            };

            this.customerService.register(this.customer)
                .subscribe(result => this.result = result);

            this.showMsg = true;

            setTimeout(() => {
                this.showMsg = false;
            }, 2000)
        }
    }

    Check(): boolean {
        this.NameChanged();
        this.SurnameChanged();
        this.PhoneNumberChanged();
        this.EmailChanged();

        if (this.name == "" || this.surname == "" || this.phoneNumber == null || this.email == "") {
            this.notFilledError = true;
            return false;
        }
        else {
            this.notFilledError = true;
            return true;
        }
    }

    NameChanged(): void {
        if (this.name == "")
            this.showNameError = true;
        else
            this.showNameError = false;
    }

    SurnameChanged(): void {
        if (this.surname == "")
            this.showSurnameError = true;
        else
            this.showSurnameError = false;
    }

    PhoneNumberChanged(): void {
        if (this.phoneNumber == null)
            this.showPhoneNumberError = true;
        else
            this.showPhoneNumberError = false;
    }

    EmailChanged(): void {
        if (this.email == "")
            this.showEmailError = true;
        else
            this.showEmailError = false;
    }

    constructor(private customerService: CustomerService) {
    }

  ngOnInit(): void {
  }

}
