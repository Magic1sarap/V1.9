import { Component, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';
import {AuthenService} from '../authen.service';
import { ArticleService } from '../article.service';
import { EventService } from '../event.service';
import {TranslateService} from '@ngx-translate/core';
import { trigger } from '@angular/animations';
import { fadeIn } from './fade-in';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations :[trigger('fadeIn', fadeIn())
]
})
export class HomeComponent implements OnInit {

  dataLoaded = false;

  id: number;
  articles: any = [];
  articles2: any = [];
  articles3: any = [];
  image:any;
  text:any;
  private events: any = [];

  constructor(private router: Router, private translate: TranslateService, private authenService: AuthenService, private ArticleService: ArticleService, private EventService: EventService) { 
    this.getAllArticle();
    this.getEvent();
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    var image = document.getElementsByClassName('thumbnail');
    var image2 = document.getElementsByClassName('thumbnail2'); 
    new simpleParallax(image, {
      scale: 2
    });
    new simpleParallax(image2, {
      scale: 2
    });
  }

  getAllArticle() {
    this.ArticleService.getAllArticle().subscribe(response => {
      this.articles = response;
      this.articles = response.slice(0,1);
      this.articles2 = response.slice(1,2);
      this.articles3 = response.slice(2,3);
      this.dataLoaded = true;

    });
  }

  getEvent(){
    this.EventService.getEvent().subscribe(events => {
      this.events = events;
      this.events = events.slice(0,3);
    });
  }

  onShowcase(image, text) {

    this.image = image;
    this.text = text;
    this.ArticleService.setShowcase(this.image, this.text);

  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


}
