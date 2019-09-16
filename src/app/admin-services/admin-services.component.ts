import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.scss']
})
export class AdminServicesComponent implements OnInit {

  servicesId: any;
  services: any;
  header: any;
  subheader1: any;
  subheader2: any;
  subheader3: any;
  p1: any;
  p2: any;
  p3: any;



  constructor(private ServicesService :ServicesService, private router: ActivatedRoute) { 
    this.getAllServices();
  }


  getAllServices() {
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

  onChangeHeaderUpdate(value) {
    this.header = value
  }

  onChangeSubheader1Update(value) {
    this.subheader1 = value
  }

  onChangeSubheader2Update(value) {
    this.subheader2 = value
  }

  onChangeSubheader3Update(value) {
    this.subheader3 = value
  }

  onChangeP1Update(value) {
    this.p1 = value
  }

  onChangeP2Update(value) {
    this.p2 = value
  }

  onChangeP3Update(value) {
    this.p3 = value
  }

  onSubmit() {
    Swal.fire({
      title: 'Update content?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Publish'
    }).then((result) => {
      if (result.value) {
        this.ServicesService.updateServices( this.servicesId, this.header, this.subheader1, this.subheader2, this.subheader3, this.p1, this.p2, this.p3).subscribe(result => {
        });
        Swal.fire(
          'updated',
          'services page has been published',
          'success'
        )
      }
    })
  }

}
