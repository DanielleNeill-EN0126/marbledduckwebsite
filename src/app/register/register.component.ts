import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string = "";
  lastName: string = "";
  address: string = "";
  postcode: string = "";
  dateOfBirth: string = "";
  email: string = "";
  body = {};

  constructor() { }

  ngOnInit(): void {
  }

  collectBody() {
    this.body = {
      "firstName": this.firstName,
      "lastName": this.lastName,
      "address": this.address,
      "postcode": this.postcode,
      "dateOfBirth": this.dateOfBirth,
      "email": this.email
    };
  }

}
