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
sideImage: any;
highlightImage1: any;
highlightImage2: any;
highlightImage3: any;
dataLoaded = false; 



  constructor(private AboutService: AboutService, private router: ActivatedRoute) { 
    this.getAllAbout();
  }

  //Retrieve About to display 
  getAllAbout() {
    this.AboutService.getAllAbout().subscribe(abouts => {
      this.abouts = abouts;
      this.aboutId = this.abouts[0]._id;
      this.header = this.abouts[0].header;
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
      this.sideImage = this.abouts[0].sideImage;
      this.highlightImage1 = this.abouts[0].highlightImage1;
      this.highlightImage2 = this.abouts[0].highlightImage2;
      this.highlightImage3 = this.abouts[0].highlightImage3;
      this.dataLoaded = true;
    });

  }

  ngOnInit() {


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

  onChangeImageUpdate(value) {
    this.sideImage = value 
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any) : void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.sideImage = myReader.result;
      console.log(this.sideImage);

    }
    myReader.readAsDataURL(file);
  }


  onChangeHighlightImage1(value) {
    this.highlightImage1 = value
  }

  changeListener1($event) : void {
    this.readThis1($event.target);
  }

  readThis1(inputValue: any) : void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.highlightImage1 = myReader.result;
      console.log(this.highlightImage1);

    }
    myReader.readAsDataURL(file);
  }


  onChangeHighlightImage2(value) {
    this.highlightImage2 = value
  }

  changeListener2($event) : void {
    this.readThis2($event.target);
  }

  readThis2(inputValue: any) : void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.highlightImage2 = myReader.result;
      console.log(this.highlightImage2);

    }
    myReader.readAsDataURL(file);
  }

  onChangeHighlightImage3(value) {
    this.highlightImage3 = value
  }

  changeListener3($event) : void {
    this.readThis3($event.target);
  }

  readThis3(inputValue: any) : void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.highlightImage3 = myReader.result;
      console.log(this.highlightImage3)

    }
    myReader.readAsDataURL(file);
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
        this.AboutService.updateAbout( this.aboutId, this.header, this.prefaceh3, this.prefacep, this.blockQuoteh3, this.blockQuotep, this.mainQuote, this.highlightHeader, this.subheader, this.title1, this.title2, this.title3, this.p1, this.p2, this.p3, this.sideImage, this.highlightImage1, this.highlightImage2, this.highlightImage3).subscribe(result => {
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
