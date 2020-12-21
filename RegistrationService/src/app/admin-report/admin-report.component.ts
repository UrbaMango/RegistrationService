import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';
import { CustomerFull } from '../../customerFull';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {

    from : Date;
    until : Date;
    report: CustomerFull[];

    showTable: boolean = false;

    constructor(private customerService: CustomerService) { }

    GetReport(): void {
        this.customerService.getReport(this.from, this.until)
            .subscribe(report => this.report = report);

        this.showTable = true;
    }

  ngOnInit(): void {
  }

}
