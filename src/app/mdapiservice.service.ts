import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MdapiserviceService {

  constructor(private http:HttpClient) { }

  getAllCustomers (): Observable<object> {
    const URL = `https://3sefuyoa3c.execute-api.eu-west-1.amazonaws.com/Stage/marbledCustomerTable`
    return this.http.get<object>(URL)
  }
  
  getAllClaims() : Observable<object>
  {
    const URL = `https://3sefuyoa3c.execute-api.eu-west-1.amazonaws.com/Stage/marbledClaimsTable`;
    return this.http.get<object>(URL);
  }

  getCustomerById(id = '1'): Observable<object>
  {
    const URL = `https://3sefuyoa3c.execute-api.eu-west-1.amazonaws.com/Stage/marbledCustomerTable/${id}`;
    return this.http.get<object>(URL);
  }

  createNewCustomer(contents:any)
  {
    const URL = `https://3sefuyoa3c.execute-api.eu-west-1.amazonaws.com/Stage/marbledCustomerTable`;
    let header = new Headers()
    header.append("Access-Control-Allow-Origin", "*")
    header.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    header.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    const body=JSON.stringify(contents);
    console.log(body);
    //return this.http.post(URL, body, header);
  
  }
}