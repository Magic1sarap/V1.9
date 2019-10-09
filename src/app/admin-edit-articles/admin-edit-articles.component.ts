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
  subheader: string;
  text: string;
  tag: string;
  image: any;
  articles: any;
  id:any;
  date: any;
  readTime: any;

  constructor(private ArticleService: ArticleService, private router: ActivatedRoute) { }

  // display current article fields
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

      const wordsPerMinute = 200;

      // Use regex to split the text 
      const noOfWords = this.text.split(/\s/g).length;
      const minutes = noOfWords / wordsPerMinute;
      this.readTime = Math.ceil(minutes);

      console.log(`${this.readTime} minute read`);

  }

  // fields to change

  onChangeHeaderUpdate(value) {
    this.header = value
  }


  onChangeSubheaderUpdate(value) {
    this.subheader = value
  }


  public change( {editor}: ChangeEvent ) {
    const EditorData = editor.getData();
    this.text = EditorData;
    console.log(editor)
  }
  onChangeTagUpdate(value) {
    this.tag = value
  }

  onChangeImageUpdate(value) {
    this.image = value
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
      console.log(this.image);
    }
    myReader.readAsDataURL(file);
  }

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
        this.ArticleService.updateArticle(this.id, this.header, this.subheader, this.text, this.tag, this.image).subscribe(result => {
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
