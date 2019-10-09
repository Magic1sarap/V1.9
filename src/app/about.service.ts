import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cacheable } from 'ngx-cacheable';
import { CacheBuster } from 'ngx-cacheable';
import { Subject } from 'rxjs';

const cacheBuster$ = new Subject<void>();


@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) { }

  @Cacheable({
    cacheBusterObserver: cacheBuster$
  })
  getAllAbout(){
    return this.http.get<any[]>('./api/about');
  }
  @CacheBuster({
    cacheBusterNotifier: cacheBuster$
  })

  // setEditAbout(sideImage) {
  //   sessionStorage.setItem('sideImage', sideImage)
  // }

  // getEditAboutImage() {
  //   return sessionStorage.getItem('sideImage');
  // }

  @CacheBuster({
    cacheBusterNotifier: cacheBuster$
  })
  updateAbout(id:string, header: string, prefaceh3: string, prefacep: string, blockQuoteh3: string, blockQuotep: string, mainQuote: string, highlightHeader: string, subheader: string, title1: string, title2: string, title3: string, p1: string, p2: string, p3: string, sideImage: string, highlightImage1: string, highlightImage2: string, highlightImage3: string) {
    var json = {id:id, header: header, prefaceh3: prefaceh3, prefacep: prefacep, blockQuoteh3: blockQuoteh3, blockQuotep: blockQuotep, mainQuote: mainQuote, highlightHeader: highlightHeader, subheader:subheader, title1:title1, title2: title2, title3: title3, p1: p1, p2:p2, p3: p3, sideImage: sideImage, highlightImage1: highlightImage1, highlightImage2: highlightImage2, highlightImage3: highlightImage3 }
    return this.http.put<any[]>(`./api/about/update/${id}`, json);
  }




}
