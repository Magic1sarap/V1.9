import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-admin-edit-articles',
  templateUrl: './admin-edit-articles.component.html',
  styleUrls: ['./admin-edit-articles.component.scss']
})
export class AdminEditArticlesComponent implements OnInit {


  public Editor = ClassicEditor;

  header: string;
  text: string;
  tag: string;
  image: string;
  articles: any;
  id:any;
  
  constructor(private ArticleService: ArticleService, private router: ActivatedRoute) { }

  // display current article fields
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.header = params['header'];
      this.tag = params['tag'];
      this.id = params['_id'];

      });

      this.image=this.ArticleService.getEditArticleImage();
      this.text=this.ArticleService.getEditArticleText();
  }

  // fields to change

  onChangeHeaderUpdate(value) {
    this.header = value
  }
  // onChangeTextUpdate(value) {
  //   this.text = value
  // }

  public change( {editor}: ChangeEvent ) {
    const EditorData = editor.getData();
    this.text = EditorData;
    // this.text = this.ArticleService.getEditArticleText();
    console.log(editor)
  }
  onChangeTagUpdate(value) {
    this.tag = value
  }

  // onChangeImageUpdate(value) {
  //   this.image = value
  // }


  // update button
  onSubmit() {


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Update article'
    }).then((result) => {
      if (result.value) {
        this.ArticleService.updateArticle(this.id, this.header, this.text, this.tag).subscribe(result => {
        });
        Swal.fire(
          'updated',
          'article has been updated',
          'success'
        )
      }
    })

}

}
