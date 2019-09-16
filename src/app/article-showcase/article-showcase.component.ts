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
  text: string;
  tag: string;
  image: string;
  articles: any;
  id:any;

  constructor(private ArticleService: ArticleService, private router: ActivatedRoute) { }

  ngOnInit() {

    this.router.params.subscribe(params => {
      this.header = params['header'];
      this.tag = params['tag'];
      this.id=params['_id'];

      });
      this.image=this.ArticleService.getEditArticleImage();
      this.text=this.ArticleService.getEditArticleText();
  }
  
  onShowcase(image,text){

    this.image = image;
    this.text = text;
    this.ArticleService.setShowcase(this.image,this.text);
    
    }
  

}
