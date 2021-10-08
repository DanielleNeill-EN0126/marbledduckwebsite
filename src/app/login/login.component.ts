import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  loginStatus: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  logIn() {
    if (this.username === "Bob" && this.password === "Bob") {
      //this.loginStatus = "login successful"
      this.router.navigateByUrl('/dashboard');
    } 
    else if(this.username === "Jeff" && this.password === "Jeff")
    {
      //to Admin section
      this.router.navigateByUrl('/admin');
    }
    else {
      this.loginStatus = "Invalid Credentials"
    }
  }

}
