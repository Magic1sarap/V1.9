import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AboutService } from '../about.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.scss']
})
export class AdminAboutComponent implements OnInit {


abouts: any;
header:any;
aboutId:any;
prefaceh3: any;
prefacep: any;
blockQuoteh3: any;
blockQuotep: any;
mainQuote: any;
highlightHeader: any;
subheader: any;
title1: any;
title2: any;
title3: any;
p1: any;
p2: any;
p3: any;


  constructor(private AboutService: AboutService, private router: ActivatedRoute) { 
    this.getAllAbout();
  }

  //Retrieve About to display 
  getAllAbout() {
    this.AboutService.getAllAbout().subscribe(abouts => {
      this.abouts = abouts;
      this.aboutId=this.abouts[0]._id;
      this.header=this.abouts[0].header;
      this.prefaceh3 = this.abouts[0].prefaceh3;
      this.prefacep = this.abouts[0].prefacep;
      this.blockQuoteh3 = this.abouts[0].blockQuoteh3;
      this.blockQuotep = this.abouts[0].blockQuotep;
      this.mainQuote = this.abouts[0].mainQuote;
      this.highlightHeader = this.abouts[0].highlightHeader;
      this.subheader = this.abouts[0].subheader;
      this.title1 = this.abouts[0].title1;
      this.title2 = this.abouts[0].title2;
      this.title3 = this.abouts[0].title3;
      this.p1 = this.abouts[0].p1;
      this.p2 = this.abouts[0].p2;
      this.p3 = this.abouts[0].p3;

      
    })
  }

  ngOnInit() {
    // this.router.params.subscribe(params => {
    //   this.header = params['header'];
    //   this.id = params['_id'];
    // })
  }

  onChangeHeaderUpdate(value) {
    this.header = value
  }

  onChangePrefaceh3Update(value) {
    this.prefaceh3 = value
  }

  onChangePrefacepUpdate(value) {
    this.prefacep = value
  }

  onChangeBlockQuoteh3Update(value) {
    this.blockQuoteh3 = value
  }

  onChangeBlockQuotepUpdate(value) {
    this.blockQuotep = value
  }

  onChangeMainQuoteUpdate(value) {
    this.mainQuote = value
  }

  onChangeHighlightHeaderUpdate(value) {
    this.highlightHeader = value
  }

  onChangeSubheaderUpdate(value) {
    this.subheader = value
  }

  onChangeTitle1Update(value) {
    this.title1 = value 
  }

  onChangeTitle2Update(value) {
    this.title2 = value
  }

  onChangeTitle3Update(value) {
    this.title3 = value
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
      confirmButtonText: 'Publish '
    }).then((result) => {
      if (result.value) {
        this.AboutService.updateAbout( this.aboutId, this.header, this.prefaceh3, this.prefacep, this.blockQuoteh3, this.blockQuotep, this.mainQuote, this.highlightHeader, this.subheader, this.title1, this.title2, this.title3, this.p1, this.p2, this.p3).subscribe(result => {
        });
        Swal.fire(
          'updated',
          'about page has been published',
          'success'
        )
      }
    })
  }



}
