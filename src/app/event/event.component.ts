import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { AuthenService } from '../authen.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  allEvents: any = [];
  publicEvents: any = [];
  recomEvents: any = [];
  showEvents: any = [];
  eventId:any;
  eventPrice:any;
  k:any;
  

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false
  };


  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }


  constructor(private EventService: EventService, private AuthenService: AuthenService) {


  }

  ngOnInit() {

    this.EventService.getEvent().subscribe(events => {
      //get all events
      this.allEvents = events;
      

      //filter public event by divisions
      this.publicEvents = this.allEvents.filter(abc => { return abc.divisions.toString().includes('None') })

      //filter recommadation by category
      if (this.AuthenService.getCurrentPreference() != null) {
      if (this.AuthenService.getCurrentPreference().includes('Trainings')) {
        this.recomEvents = this.recomEvents.concat(this.publicEvents.filter(abc => { return abc.eventtype.toString().includes('Trainings') }))
      }

      if (this.AuthenService.getCurrentPreference().includes('Missions')) {
        this.recomEvents = this.recomEvents.concat(this.publicEvents.filter(abc => { return abc.eventtype.toString().includes('Missions') }))
      }

      if (this.AuthenService.getCurrentPreference().includes('Seminars')) {
        this.recomEvents = this.recomEvents.concat(this.publicEvents.filter(abc => { return abc.eventtype.toString().includes('Seminars') }))

      }

      if (this.AuthenService.getCurrentPreference().includes('Trade Fair')) {
        this.recomEvents = this.recomEvents.concat(this.publicEvents.filter(abc => { return abc.eventtype.toString().includes('Trade Fair') }))

      }

      if (this.AuthenService.getCurrentPreference().includes('Workshops')) {
        this.recomEvents = this.recomEvents.concat(this.publicEvents.filter(abc => { return abc.eventtype.toString().includes('Workshops') }))

      }

      if (this.AuthenService.getCurrentPreference().includes('Supported Events')) {
        this.recomEvents = this.recomEvents.concat(this.publicEvents.filter(abc => { return abc.eventtype.toString().includes('Supported Events') }))

      }
      
    }
      else{
        this.recomEvents =   this.allEvents
      }



      //set login checker
      if (this.AuthenService.getCurrentUser() != null) {
        this.showEvents = this.allEvents
      } else {
        this.showEvents = this.publicEvents
      }
    });



  }

  //set current event ID for application form
  onShowcase(eventId,eventPrice){
    this.eventId=eventId,
    this.eventPrice=eventPrice
    this.EventService.setShowcase(this.eventId,this.eventPrice);


       this.k=this.EventService.getapplyEventId(),

    console.log("event ID: "+this.k)

  }

  getCurrentID(){
    this.k=this.EventService.getapplyEventId(),

    console.log("event ID: "+this.k)
  }



}
