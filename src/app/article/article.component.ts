import { Component, OnInit } from '@angular/core';

// import to allow service functions calling
import { ArticleService } from '../article.service';
import { AuthenService } from '../authen.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as $ from 'jquery';

// import to allow angular animations 
import { trigger } from '@angular/animations';

/**
 * import the animation we have programmed 
 * located in the same component.
 */
import { fadeIn } from './fade-in';
/** */


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations : [trigger('fadeIn', fadeIn())
]
})
export class ArticleComponent implements OnInit {


  /**
   * dataLoaded is set to false so that 
   * ngx-skeleton-loader will render. If
   * dataLoaded = true; and rendered, the 
   * ngx-skeleton-loader will stop rendering
   * and will be replaced with the articles.
   */
  dataLoaded = false;

  id: number;

  /**
   * empty articles array set to any 
   * to be filled with articles
   */
  articles: any = [];
  publicArticles: any = [];
  showArticles: any = [];
  recomArticles: any = [];


  /**
   * image & text declared to any for 
   * storage and display usage on other
   * components such as article-showcase.
   */
  image: any;
  text: any;


  /**
   * configuration for the slick-carousel
   * Refer to 
   * https://www.npmjs.com/package/ngx-slick-carousel
   * for in-depth documentation 
   */ 
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false
  };

  // To inform if slick has been rendered
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


  constructor(private ArticleService: ArticleService, private AuthenServices: AuthenService, private router: ActivatedRoute, private router1: Router) {
    // this.ArticleService.getAllArticle().subscribe(response => {
    //   this.articles = response;
    //   this.articles = response.slice(0, 4);
    // });
  }



  ngOnInit() {
    /**
     * get all articles but show only 3
     * intially. 
     */
    this.ArticleService.getAllArticle().subscribe(data => {
      this.articles = data;


      // this.articles = data.slice(0,1);
      this.dataLoaded = true;

      //filter member articles from all aritcles 
      this.publicArticles = this.articles.filter(abc => { return abc.availability.toString().includes('public') })

      //set login checker
      if (this.AuthenServices.getCurrentUser() != null) {
        this.showArticles = this.articles
        
      } else {
        this.showArticles = this.publicArticles
        
      }



      //article recommendation
      if(this.AuthenServices.getCurrentPreference()!=null){
      if (this.AuthenServices.getCurrentPreference().includes('BusinessTalks')) {
        //use .concat to push the articles which matches the user's preference
        this.recomArticles = this.recomArticles.concat(this.publicArticles.filter(abc => { return abc.tag.toString().includes('BusinessTalks') }))
      }
      if (this.AuthenServices.getCurrentPreference().includes('Charity')) {
        this.recomArticles  = this.recomArticles.concat(this.publicArticles.filter(abc => { return abc.tag.toString().includes('BusinessTalks') }))

      }
      if (this.AuthenServices.getCurrentPreference().includes('OrganizationalGatherings')) {
        this.recomArticles =this.recomArticles.concat(this.publicArticles.filter(abc => { return abc.tag.toString().includes('OrganizationalGatherings') }))

      }
      if (this.AuthenServices.getCurrentPreference().includes('TradeAssociationHub')) {
        this.recomArticles = this.recomArticles.concat(this.publicArticles.filter(abc => { return abc.tag.toString().includes('TradeAssociationHub') }))

      }
      if (this.AuthenServices.getCurrentPreference().includes('EntrepreneurCourses')) {
        this.recomArticles = this.recomArticles.concat(this.publicArticles.filter(abc => { return abc.tag.toString().includes('EntrepreneurCourses') }))

      }
      if (this.AuthenServices.getCurrentPreference().includes('talks')) {
        this.recomArticles = this.recomArticles.concat(this.publicArticles.filter(abc => { return abc.tag.toString().includes('talks') }))

      }
    }
      else{
        this.recomArticles = this.articles.slice(0, 5)
      }

    })


  }





  /**
   * variables declared on line 57, 58
   */
  onShowcase(image, text) {

    this.image = image;
    this.text = text;

    // refer to article.service.ts setShowcase()
    this.ArticleService.setShowcase(this.image, this.text);

  }
}
