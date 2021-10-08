import { Component, OnInit } from '@angular/core';
import { MdapiserviceService } from '../mdapiservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:MdapiserviceService) { }

  thisCustomer:any;

  ngOnInit(): void {
    this.getCustomerById();
  }

  getCustomerById() {
    this.service.getCustomerById().subscribe((myData) => { this.thisCustomer = myData });
  }
  
}
