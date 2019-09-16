import { Injectable } from '@angular/core';
import { CanActivate, Route, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenService } from './authen.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authenService: AuthenService, private router: Router) { }
  // Validate User
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const permission = next.data["permission"];
    if (this.authenService.isLoggedIn() && permission.only.includes(this.authenService.getCurrentRole())) { 
      return true; 
    } else { 
      this.router.navigateByUrl('/logout'); 
    }
  }
  
  }


