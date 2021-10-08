import { Component, OnInit } from '@angular/core';
import { MdapiserviceService } from '../mdapiservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service:MdapiserviceService) { }

  myCustomers: any = [];
  claim: any;

  ngOnInit(): void {
    this.getAllCustomers();
    this.getAllClaims();
  }

  getAllCustomers() {
    this.service.getAllCustomers().subscribe((myData) => { this.myCustomers = myData });
  }

  getAllClaims() {
    this.service.getAllClaims().subscribe((myData) => { this.claim = myData });
  }
}
