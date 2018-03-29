import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from '../app.component';

import { AuthService } from './auth.service';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material';
import {SigninComponent} from './Signin/Signin.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';

const routes: Routes = [
  {path:'',redirectTo:'signin',pathMatch:'full'},
  { path: 'signin', component:SigninComponent },
  { path: 'Setpassword', component:SetpasswordComponent }
];

@NgModule({
  declarations: [
    // AppComponent,
    SigninComponent,
    SetpasswordComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    MatButtonModule
  ],
   exports: [RouterModule],
   providers: [AuthService]
 
})
export class AuthModule { }
