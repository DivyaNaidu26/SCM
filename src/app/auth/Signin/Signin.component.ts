import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-Signin',
  templateUrl: './Signin.component.html',
  styleUrls: ['./Signin.component.css']
})
export class SigninComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'required email' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getPassError() {
    return this.email.hasError('required') ? 'required password' :
        // this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  hide = true;
  constructor() { }

  ngOnInit() {
  }

}
