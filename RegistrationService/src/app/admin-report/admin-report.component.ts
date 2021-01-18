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
    showError: boolean = false;
    showFillError: boolean = false;

    constructor(private customerService: CustomerService) { }

    GetReport(): void {
        if (this.Check()) {
            this.customerService.getReport(this.from, this.until)
                .subscribe(report => this.report = report);

            this.showTable = true;
        }
    }

    Check(): boolean {
        if (this.from == null || this.until == null) {
            this.showFillError = true;
        }
        if (this.from > this.until) {
            this.showError = true;
            return false;
        }
        else {
            this.showFillError = false;
            this.showError = false;
            return true;
        }
    }

  ngOnInit(): void {
  }

}
