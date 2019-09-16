import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MDBModalService } from 'angular-bootstrap-md';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.scss']
})
export class AdminArticleComponent implements OnInit {

  id: number;
  articles: any = [];

  image: any;
  text: any;
  dataLoaded = false;


  constructor(private ArticleService: ArticleService, private router: ActivatedRoute, private router1: Router, private modalService: MDBModalService) {
    this.getAllArticle();
  }

  ngOnInit() {

  }
  // Retrieve Articles to display
  getAllArticle() {
    this.ArticleService.getAllArticle().subscribe(articles => {
      this.articles = articles;
      this.dataLoaded = true;
    });
  }


  //delete article function 
  swal(id) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

      if (result.value) {
        this.ArticleService.deleteArticle(id).subscribe(result => {
          this.getAllArticle();
        });
        Swal.fire(
          'Deleted!',
          'Your article has been deleted.',
          'success'
        )
      }
      else {
        console.log('error');
      }
    })

  }

  // passing objects to the next component for image and text only
  onEdit(image, text) {

    this.image = image;
    this.text = text;
    this.ArticleService.setEditArticle(this.image, this.text);

  }


}
