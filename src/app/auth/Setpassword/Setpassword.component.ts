import { Component, OnInit } from '@angular/core';
import { FormControl , Validators } from '@angular/forms';
@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent implements OnInit {
  CPassword = new FormControl('', [Validators.required]);
  confirmpassword = new FormControl('', [Validators.required]);
  getsetMessage() {
    return this.CPassword.hasError('required') ? 'required password' :
        this.CPassword.hasError('CPassword') ? 'Not a valid password' : '';
  }
  getconError() {
    return this.confirmpassword.hasError('required') ? 'Confirm password' :
        // this.confirmpassword.hasError('confirmpassword') ? 'Not a valid password' :
        '';
  }
  hide =true;
  constructor() { }

  ngOnInit() {
  }

}
