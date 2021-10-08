import { Component, OnInit } from '@angular/core';
import { MdapiserviceService } from '../mdapiservice.service';

@Component({
  selector: 'app-myclaims',
  templateUrl: './myclaims.component.html',
  styleUrls: ['./myclaims.component.css']
})
export class MyclaimsComponent implements OnInit {

  constructor(private service:MdapiserviceService) { }

  ngOnInit(): void {
  }

}
