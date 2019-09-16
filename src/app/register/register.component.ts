import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormBuilder, FormGroup } from '@angular/forms'; 
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm :FormGroup
  allPrefer:any;

  constructor(private accountService: AccountService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group ({   
      email: '',    
      password: '',   
      name:'',
      company:'',
      companyEmail:'',
      preference:'',


 });
  }

  checkCheckBoxvalue1(event){
    if (event.checked==true){
      this.allPrefer=this.allPrefer+'#BusinessTalks'
    }
    if (event.checked==false){
      this.allPrefer=this.allPrefer.replace('#BusinessTalks','');
    }

  }

  checkCheckBoxvalue2(event){
    if (event.checked==true){
      this.allPrefer=this.allPrefer+'#Charity'
    }
    if (event.checked==false){
      this.allPrefer=this.allPrefer.replace('#Charity','');
    }
    console.log('prefer: '+this.allPrefer)
    
  }

  checkCheckBoxvalue3(event){
    if (event.checked==true){
      this.allPrefer=this.allPrefer+'#OrganizationalGatherings'

    }
    if (event.checked==false){
      this.allPrefer=this.allPrefer.replace('#OrganizationalGatherings','');
    }
    console.log('prefer: '+this.allPrefer)

  }

  checkCheckBoxvalue4(event){
    if (event.checked==true){
      this.allPrefer=this.allPrefer+'#TradeAssociationHub'
    }
    if (event.checked==false){
      this.allPrefer=this.allPrefer.replace('#TradeAssociationHub','');
    }
    console.log('prefer: '+this.allPrefer)

  }

  checkCheckBoxvalue5(event){
    if (event.checked==true){
      this.allPrefer=this.allPrefer+'#EntrepreneurCourses'
    }
    if (event.checked==false){
      this.allPrefer=this.allPrefer.replace('#EntrepreneurCourses','');
    }
    console.log('prefer: '+this.allPrefer)

  }

  checkCheckBoxvalue6(event){
    if (event.checked==true){
      this.allPrefer=this.allPrefer+'#Seminars'
    }
    if (event.checked==false){
      this.allPrefer=this.allPrefer.replace('#Seminars','');
    }
    console.log('prefer: '+this.allPrefer)

  }

  checkCheckBoxvalue7(event){
    if (event.checked==true){
      this.allPrefer=this.allPrefer+'#Missions'
    }
    if (event.checked==false){
      this.allPrefer=this.allPrefer.replace('#Missions','');
    }
    console.log('prefer: '+this.allPrefer)

  }

  checkCheckBoxvalue8(event){
    if (event.checked==true){
      this.allPrefer=this.allPrefer+'#Trade Fair'
    }
    if (event.checked==false){
      this.allPrefer=this.allPrefer.replace('#Trade Fair','');
    }
    console.log('prefer: '+this.allPrefer)

  }

  checkCheckBoxvalue9(event){
    if (event.checked==true){
      this.allPrefer=this.allPrefer+'#Workshops'
    }
    if (event.checked==false){
      this.allPrefer=this.allPrefer.replace('#Workshops','');
    }
    console.log('prefer: '+this.allPrefer)

  }

  checkCheckBoxvalue10(event){
    if (event.checked==true){
      this.allPrefer=this.allPrefer+'#Training'
    }
    if (event.checked==false){
      this.allPrefer=this.allPrefer.replace('#Training','');
    }
    console.log('prefer: '+this.allPrefer)

  }

  checkCheckBoxvalue11(event){
    if (event.checked==true){
      this.allPrefer=this.allPrefer+'#Supported Events'
    }
    if (event.checked==false){
      this.allPrefer=this.allPrefer.replace('#Supported Events','');
    }
    console.log('prefer: '+this.allPrefer)

  }
    
  

  //signup button
  onSubmit() {
    this.registerForm.value.preference= this.allPrefer
    // register a user 
    this.accountService.regAccount(this.registerForm.value.email,this.registerForm.value.name,this.registerForm.value.company,this.registerForm.value.password,this.registerForm.value.companyEmail,this.registerForm.value.preference).subscribe(
        // alert('Account '+this.registerForm.value.name+' has been created!');
        // console.log("preference email: "+this.registerForm.value.email)
        // console.log("preference name: "+this.registerForm.value.name)
        // console.log("preference company: "+this.registerForm.value.company)
        // console.log("preference password: "+this.registerForm.value.password)
        // console.log("preference companyEmail: "+this.registerForm.value.companyEmail)

      )
  }

}
