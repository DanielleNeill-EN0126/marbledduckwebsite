import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MdapiserviceService {

  constructor(private http:HttpClient) { }

  getAllCustomers (): Observable<object> {
    const URL = `https://3sefuyoa3c.execute-api.eu-west-1.amazonaws.com/Stage/marbledCustomerTable`;
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
    const URL = `https://3sefuyoa3c.execute-api.eu-west-1.amazonaws.com/Stage/marbledCustomerTable`
    return fetch(URL,{
      method: "POST",
      body: JSON.stringify(contents),
      headers: {"Content-type": "application/json"}
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));

  
  }
}