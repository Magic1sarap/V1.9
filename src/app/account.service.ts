import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  // Get all accounts
  getAccounts() {

    return this.http.get('/api/account');

  }

  // Get account by email
  getAccountUser(email:string){
    return this.http.get<any[]>('/api/accountUser/'+email)

  }

  // Register for an account
  
  regAccount(name:string,company:string,email:string,companyEmail:string,password:string,preference:string) {

     var json={name:name, company:company,email:email,password:password, companyEmail:companyEmail,preference:preference}
     return this.http.post('/api/regAccount/',json)

  }

}
