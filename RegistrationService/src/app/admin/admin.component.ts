import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    constructor(private router: Router) { }

    RegisterClient(): void {
        this.router.navigateByUrl('/register');//insert register client by admin view
    }
    Report(): void {
        this.router.navigateByUrl('admin/home/report');
    }

  ngOnInit(): void {
  }

}
