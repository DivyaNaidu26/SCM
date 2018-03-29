import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { CalenderComponent } from './calender/calender.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    CalenderComponent,
    DashboardComponent,
    UsersComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  
  providers: [],
  bootstrap: []
})
export class ScmModule { }
