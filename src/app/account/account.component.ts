import { Component, OnInit } from '@angular/core';
import { AuthenService} from '../authen.service';
import { AccountService} from '../account.service';

import { NgModule }from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



import { FormBuilder, FormGroup } from '@angular/forms'; 


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accountname:any;
  phone:any;
  accountid:any;
  accountownername:any;
  industry:any;
  street:any;
  webiste:any;
  industryid:any;
  accountownerid:any;
  email:any;


  constructor(private authenServices : AuthenService, private fb: FormBuilder,  private accountService:AccountService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.accountname=this.authenServices.getCurrentUser()
    console.log('accountname: '+this.accountname)

    this.accountid=this.authenServices.getCurrentAccountid()
    console.log('accountid: '+this.accountid)

    this.phone=this.authenServices.getCurrentPhone()
    console.log('phone: '+this.phone)

    this.accountownername=this.authenServices.getCurrentUser()
    console.log('accountownername: '+this.accountownername)

    this.industry=this.authenServices.getCurrentIndustry()
    console.log('industry: '+this.industry)

    this.street=this.authenServices.getCurrentStreet()
    console.log('street: '+this.street)

    this.webiste=this.authenServices.getCurrentWeb()
    console.log('webiste: '+this.webiste)

    this.industryid=this.authenServices.getCurrentUser()
    console.log('industryid: '+this.industryid)

    this.accountownerid=this.authenServices.getCurrentOwnerid()
    console.log('accountownerid: '+this.accountownerid)

    this.email=this.authenServices.getCurrentEmail()
    console.log('accountownerid: '+this.email)


    
  }

}
