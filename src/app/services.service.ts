import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cacheable } from 'ngx-cacheable';
import { CacheBuster } from 'ngx-cacheable';
import { Subject } from 'rxjs';

const CacheBuster$ = new Subject<void>();

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  @Cacheable({
    cacheBusterObserver: CacheBuster$
  })
  getAllServices() {
    return this.http.get<any[]>('./api/services');
  }
  @CacheBuster({
    cacheBusterNotifier: CacheBuster$
  })
  updateServices(id: string, header: string, subheader1: string, subheader2: string, subheader3: string, p1: string, p2: string, p3: string, featuredImage: string) {
    var json = {id: id, header: header, subheader1: subheader1, subheader2: subheader2, subheader3: subheader3, p1: p1, p2: p2, p3: p3, featuredImage: featuredImage}
    return this.http.put<any[]>(`./api/services/update/${id}`, json);
  }
}
