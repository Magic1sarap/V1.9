import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cacheable } from 'ngx-cacheable';
import { CacheBuster } from 'ngx-cacheable';
import { Subject } from 'rxjs';

const cacheBuster$ = new Subject<void>();

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor(private http: HttpClient) { }

  @Cacheable({
    cacheBusterObserver: cacheBuster$
  })
  getAllArticle() {
    return this.http.get<any[]>('./api/articles');
  }
  @CacheBuster({
    cacheBusterNotifier: cacheBuster$
  })

  @Cacheable()
  createArticle(article) {
    console.log("article services work!")
    return this.http.post('./api/articles/add', article);
  }
  @CacheBuster({
    cacheBusterNotifier: cacheBuster$
  })

  @Cacheable()
  deleteArticle(id) {
    return this.http.delete(`./api/articles/delete/${id}`);
  }
  @CacheBuster({
    cacheBusterNotifier: cacheBuster$
  })

  @Cacheable()
  getArticlebyId(header) {
    return this.http.get<any[]>('./api/getArticlebyId/' + header);

  }

  setEditArticle(image,text){
    sessionStorage.setItem('image',image);
    sessionStorage.setItem('text',text);
  }

  setShowcase(image, text) {
    sessionStorage.setItem('image', image);
    sessionStorage.setItem('text', text);
  }

  
  getEditArticleImage(){
    return sessionStorage.getItem('image');
  }

  getEditArticleText(){
    return sessionStorage.getItem('text');
  }

  getShowcaseImage() {
    return sessionStorage.getItem('image');
  }

  getShowcaseText() {
    return sessionStorage.getItem('text');
  }

  @CacheBuster({
    cacheBusterNotifier: cacheBuster$
  })
  updateArticle(id:string, header:string, subheader: string, text:string, tag:string, image: string ) {
    var json = {id:id, text: text, tag: tag, header: header, image: image, subheader: subheader }
    return this.http.put<any[]>(`./api/articles/update/${id}` ,json);
  }

  




}
