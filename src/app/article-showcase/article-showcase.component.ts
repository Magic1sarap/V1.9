import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-showcase',
  templateUrl: './article-showcase.component.html',
  styleUrls: ['./article-showcase.component.scss']
})
export class ArticleShowcaseComponent implements OnInit {

  header: string;
  subheader: string;
  text: string;
  tag: string;
  image: string;
  articles: any;
  id:any;
  readTime: any;
  date: any;


  constructor(private ArticleService: ArticleService, private router: ActivatedRoute) { }

  ngOnInit() {

    this.router.params.subscribe(params => {
      this.header = params['header'];
      this.subheader = params['subheader'];
      this.tag = params['tag'];
      this.id = params['_id'];
      this.date = params['date'];


      });
      this.image=this.ArticleService.getEditArticleImage();
      this.text=this.ArticleService.getEditArticleText();

      

      /**
       * using 'this.text' and the function 'getEditArticleText()',
       * we can use the fetched data and perform calculations 
       * such as done below in order to find out the approximate
       * reading time for an article.
       * http://www.craigabbott.co.uk/how-to-calculate-reading-time-like-medium
       * link provided for more explanation. 
       */
      const wordsPerMinute = 200;

      // Using regex to split the text 
      const noOfWords = this.text.split(/\s/g).length;
      const minutes = noOfWords / wordsPerMinute;
      this.readTime = Math.ceil(minutes);


      /**
       * To check in the console whether or not
       * the calculation displayed correlates with 
       * displayed value
       */
      console.log(`${this.readTime} minute read`);
  }
  
  onShowcase(image,text){

    this.image = image;
    this.text = text;
    this.ArticleService.setShowcase(this.image,this.text);
    
    }
  

}
