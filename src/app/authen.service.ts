import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private http: HttpClient) { }

  //User login validation 

  validateUser(inputEmail: string, inputPassword: string) {
    return this.http.get('./api/validateUser/' + inputEmail + '/' + inputPassword)
  }

  // Retrieve User Details

  setCurrentUser(accountname: string, accountid: string, phone: string, accountownername: string, industry: string, street: string, webiste: string, industryid: string, accountownerid: string, email: string, role: string,preference:string) {

      sessionStorage.setItem("accountname", accountname),
      sessionStorage.setItem("accountid", accountid),
      sessionStorage.setItem("phone", phone),
      sessionStorage.setItem("accountownername", accountownername),
      sessionStorage.setItem("industry", industry),
      sessionStorage.setItem("street", street),
      sessionStorage.setItem("webiste", webiste),
      sessionStorage.setItem("industryid", industryid),
      sessionStorage.setItem("accountownerid", accountownerid),
      sessionStorage.setItem("email", email),
      sessionStorage.setItem("role", role),
      sessionStorage.setItem("preference", preference)

  }

  getCurrentUser() {
    return sessionStorage.getItem("accountname")
  }

  
  getCurrentPreference() {
    return sessionStorage.getItem("preference")
  }

  getCurrentRole() {
    return sessionStorage.getItem("role")
  }

  getCurrentPhone() {
    return sessionStorage.getItem("phone")
  }

  getCurrentEmail() {
    return sessionStorage.getItem("email")
  }

  getCurrentOwner() {
    return sessionStorage.getItem("accountownername")
  }

  getCurrentAccountid() {
    return sessionStorage.getItem("accountid")
  }
  getCurrentIndustry() {
    return sessionStorage.getItem("industry")
  }

  getCurrentIndustryid() {
    return sessionStorage.getItem("industryid")
  }

  getCurrentStreet() {
    return sessionStorage.getItem("street")
  }

  getCurrentWeb() {
    return sessionStorage.getItem("webiste")
  }

  getCurrentOwnerid() {
    sessionStorage.getItem("accountownerid")
  }

  setUserRole(role: string) {
    sessionStorage.setItem("UserRole", role);
  }

  logout() {
    sessionStorage.clear();
  }
  
  isLoggedIn() {
    return this.getCurrentEmail() !== null;
  }


}
