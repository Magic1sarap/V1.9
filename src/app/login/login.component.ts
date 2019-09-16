import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../authen.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userDetails: any;
  userPass:any;
  userRole:any;
  i=0;

  constructor(private authenService: AuthenService, private fb:FormBuilder, private router: Router) { }

  ngOnInit() {

  //login form group
  this.loginForm= this.fb.group({
   
    inputEmail:'',
    inputPassword:''
  
    })
  }

  //login button

  onSubmit() {  

    //GET account and validate user by email/password
    this.authenService.validateUser(this.loginForm.value.inputEmail,this.loginForm.value.inputPassword).subscribe(data=> {
      this.userDetails= data;

         //if return an email match, log match details
         if(this.userDetails!=null){
          this.userDetails.forEach(element=> {
            this.i +=1
             console.log('number of match count: '+this.i)
           });
      console.log('account email: '+ this.userDetails[0].email)
      console.log('account Name: '+ this.userDetails[0].accountname)
      console.log('account password: '+ this.userDetails[0].autoaccountcode)
      this.userPass= this.userDetails[0].autoaccountcode
     
     

      if(this.userPass==this.loginForm.value.inputPassword){
      this.userRole= this.userDetails[0].Custom_role
      this.router.navigateByUrl('/article');
       this.authenService.setCurrentUser(
       this.userDetails[0].accountname,
       this.userDetails[0].accountid,
       this.userDetails[0].phone,
       this.userDetails[0].accountownwername,
       this.userDetails[0].industry,
       this.userDetails[0].street,
       this.userDetails[0].website,
       this.userDetails[0].industryid,
       this.userDetails[0].accountownerid,
       this.userDetails[0].email,
       this.userDetails[0].Custom_role,
       this.userDetails[0].Custom_preference

       );

       console.log(this.userDetails[0].accountname)
       console.log(this.userDetails[0].accountid)
       console.log(this.userDetails[0].phone)
       console.log(this.userDetails[0].accountownwername)
       console.log(this.userDetails[0].industry)
       console.log(this.userDetails[0].street)
       console.log(this.userDetails[0].industryid)
       console.log(this.userDetails[0].accountownerzid)
       console.log(this.userDetails[0].email)
       console.log(this.userDetails[0].Custom_role)
       console.log(this.userDetails[0].Custom_preference)


       const Toast = Swal.mixin({
         toast: true,
         position: 'top-end',
         showConfirmButton: false,
         timer: 3000
       })

       Toast.fire({
         type: 'success',
         title: 'Signed in successfully'
       })

       if(this.userRole=='a'){
        this.router.navigateByUrl('/admin-article');
        const Toast2 = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        })

        Toast2.fire({
          type: 'success',
          title: 'Signed in as administrator'
        })

       }
       else{
        this.router.navigateByUrl('/account');
       }


     }
     else{
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: "Wrong email or password"
      })
   
     }
    }
     
    else{
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: "Wrong email or password"
      })
   
     }
     
     })
 


  }
}
