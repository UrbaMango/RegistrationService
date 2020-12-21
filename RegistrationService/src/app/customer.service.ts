import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { CustomerFull } from '../customerFull';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

    private RegisterUrl = 'https://localhost:5001/Register';
    private reportUrl = 'https://localhost:5001/admin/VisitReport';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    constructor(private http: HttpClient) { }

    register(customer: Customer): Observable<any> {

        return this.http.post<any>(this.RegisterUrl, customer, this.httpOptions);
        
    }

    getReport(from: Date , until: Date): Observable<CustomerFull[]>{

        const url = `${this.reportUrl}?timeFrom=${from}&timeUntil=${until}`;

        return this.http.get<CustomerFull[]>(url);

    }


}
