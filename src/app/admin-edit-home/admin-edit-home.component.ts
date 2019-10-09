import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-admin-edit-home',
  templateUrl: './admin-edit-home.component.html',
  styleUrls: ['./admin-edit-home.component.scss']
})
export class AdminEditHomeComponent implements OnInit {

  carousels: any = [];

  constructor(private HomeService: HomeService) { 
    this.getCarousel();
  }

  ngOnInit() {
  }

  getCarousel() {
    this.HomeService.getCarousel().subscribe(contents => {
      this.carousels = contents;
      console.log(contents);
    })
  }

}
