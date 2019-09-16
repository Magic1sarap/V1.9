import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  services: any;
  servicesId: any;
  header: any;
  subheader1: any;
  subheader2: any;
  subheader3: any;
  p1: any;
  p2: any;
  p3: any;


  constructor(private ServicesService: ServicesService, private router: ActivatedRoute) {
    this.getAllServices();
   }

   getAllServices(){
     this.ServicesService.getAllServices().subscribe(services => {
       this.services = services;
       this.servicesId = this.services[0]._id;
       this.header = this.services[0].header;
       this.subheader1 = this.services[0].subheader1;
       this.subheader2 = this.services[0].subheader2;
       this.subheader3 = this.services[0].subheader3;
       this.p1 = this.services[0].p1;
       this.p2 = this.services[0].p2;
       this.p3 = this.services[0].p3;
     })
   }


  ngOnInit() {
  }

}
