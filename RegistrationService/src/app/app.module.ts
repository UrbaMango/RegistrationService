import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminReportComponent } from './admin-report/admin-report.component'

const routes: Routes = [
    { path: 'admin', component: AdminLoginComponent },
    { path: 'admin/home', component: AdminComponent },
    { path: 'register', component: CustomerRegisterComponent },
    { path: 'admin/home/report', component: AdminReportComponent },
    { path: '', redirectTo: '/register', pathMatch: 'full' }
];

@NgModule({
  declarations: [
        AppComponent,
        CustomerRegisterComponent,
        AdminComponent,
        AdminLoginComponent,
        AdminReportComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
