import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../authen.service';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
status:any;
  constructor(private translate: TranslateService, private authenService: AuthenService, private router: Router) {    translate.setDefaultLang('en'); }

  ngOnInit() {
    if(this.authenService.getCurrentUser()==null){
      this.status='Login'

    }else{
      this.status=this.authenService.getCurrentUser();
    }



    

  //  document.getElementById("status").innerHTML = "New text!";
  //  this.status=this.authenService.getCurrentUser()
  //  console.log('current user: '+ this.status)
  }

  navLogin(){
    if(this.authenService.getCurrentUser()==null){
      this.router.navigateByUrl('/login');
    }else if(this.authenService.getCurrentRole()=='m'){
      this.router.navigateByUrl('/account');
    }else if(this.authenService.getCurrentRole()=='a'){
      this.router.navigateByUrl('/admin');
    }
  }

  logOut(){

    this.authenService.logout()
    this.router.navigateByUrl('/');

  }

        
  useLanguage(language: string) {
    this.translate.use(language);
  }


}
