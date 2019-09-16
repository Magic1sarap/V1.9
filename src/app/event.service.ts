import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cacheable } from 'ngx-cacheable';
import { Subject } from 'rxjs';

const cacheBuster$ = new Subject<void>();
@Injectable({
  providedIn: 'root'
})
export class EventService {


  constructor(private http: HttpClient) { }

  @Cacheable({
    cacheBusterObserver: cacheBuster$
  })

 
  @Cacheable()
  getEvent() {

    return this.http.get<any[]>('./api/events');

  }

  @Cacheable()
  getEventbyId(eventid) {
    return this.http.get<any[]>('./api/getEventbyId/' + eventid);
  }

  setShowcase(eventId,eventPrice){
    sessionStorage.setItem('eventId', eventId);
    sessionStorage.setItem('eventPrice', eventPrice)
  }

  getapplyEventId(){
    return sessionStorage.getItem('eventId')
  }

  getapplyEventPrice(){
    return sessionStorage.getItem('eventPrice')
  }
}
