import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cacheable } from 'ngx-cacheable';
import { CacheBuster } from 'ngx-cacheable';
import { Subject } from 'rxjs';

const CacheBuster$ = new Subject<void>();

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  @Cacheable({
    cacheBusterObserver: CacheBuster$
  })
  getCarousel() {
    return this.http.get<any[]>('./api/carousel');
  }

}
