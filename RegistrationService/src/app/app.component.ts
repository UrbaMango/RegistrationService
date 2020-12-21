import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    //template: '<input [(ngModel)]="name" type="text">{{ name }}'
})

export class AppComponent{
    title(title: any) {
        throw new Error('Method not implemented.');
    }
    
    constructor(private customerService: CustomerService) {
    }

}
