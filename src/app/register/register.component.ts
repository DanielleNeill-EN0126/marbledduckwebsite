import { Component, OnInit } from '@angular/core';
import { MdapiserviceService } from '../mdapiservice.service';

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
  status = {};

  constructor(private service:MdapiserviceService) { }

  ngOnInit(): void {
  }

  async collectBody() {
    if (this.firstName !== "" && this.lastName !== "" &&
      this.address !== "" && this.postcode !== "" &&
      this.dateOfBirth !== "" && this.email !== "") {
      if (this.email.includes("@")) {
        var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
        if (pattern.test(this.dateOfBirth)) {
          var regExp = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) {0,1}[0-9][A-Za-z]{2})$/;
          if (regExp.test(this.postcode)) {
            this.body = {
              "firstName": this.firstName,
              "lastName": this.lastName,
              "address": this.address,
              "postcode": this.postcode,
              "dateOfBirth": this.dateOfBirth,
              "email": this.email
            };
            this.createCustomer();
          }
          else {
            this.body = "Enter Valid Postcode"
          }
        }
        else {
          this.body = "Enter Valid date of birth in dd-mm-yyyy"
        }
      }
      else {
        this.body = "Must enter a valid Email"
      }
    }
    else {
      this.body = "No fields Can be left empty"
    }

  }
  async createCustomer() {
    
    this.status = this.service.createNewCustomer(this.body);
  }

}
