import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthenService } from '../authen.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authenService: AuthenService, private router:Router) { }

  ngOnInit() {
    this.authenService.logout();
    this.router.navigateByUrl('/login')
  }

}
