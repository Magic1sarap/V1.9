import { Component, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-event-showcase',
  templateUrl: './event-showcase.component.html',
  styleUrls: ['./event-showcase.component.scss']
})
export class EventShowcaseComponent implements OnInit {

  private events: any=[];
  eventid: any;
  eventstartdate: String;
  eventenddate: String;
  eventtype: String;
  registrationenddate: String;
  eventtitle: String;
  k:String;

  
  constructor(private EventService: EventService, private route: ActivatedRoute) {
    this.getEvent()
   }

  ngOnInit() {
    // var image = document.getElementById('event-photo1');
    // var image2 = document.getElementById('event-photo2'); 
    // new simpleParallax(image, {
    //   scale: 2
    // });
    // new simpleParallax(image2, {
    //   scale: 2
    // });
    this.route.params.subscribe(params => {

      this.eventid=params['eventid'];
      this.eventenddate=params['eventenddate'];
      this.eventstartdate=params['eventstartdate'];
      this.eventtype=params['eventtype'];
      this.registrationenddate=params['registrationenddate'];
      this.eventtitle=params['eventtitle'];

      });
  }
  getEvent(){
    this.EventService.getEvent().subscribe(events => {
      this.events = events;
      console.log(events);
      console.log('data is received');
    });
  }

  getCurrentID(){
    this.k=this.EventService.getapplyEventId(),

    console.log("event ID: "+this.k)
  }

}
