import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  username = "";
  password = "";
  errorMsg = "";
  constructor() { }

  ngOnInit(): void {
  }

  login(): void { 
    if (this.username != 'blecableca') {
      this.errorMsg = "Username is required"
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required"
    }
  }

}
