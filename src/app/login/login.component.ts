import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";
  loginStatus:string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  logIn()
  {
    if(this.username === "Bob" && this.password === "Bob")
    {
      this.loginStatus = "login successful"
    }
    else
    {
      this.loginStatus = "Invalid Credentials"
    }
  }

}
