import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
  }

}
