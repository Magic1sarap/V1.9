import { Component, OnInit, NgZone } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-admin-create-article',
  templateUrl: './admin-create-article.component.html',
  styleUrls: ['./admin-create-article.component.scss']
})
export class AdminCreateArticleComponent implements OnInit { 



  public Editor = ClassicEditor;



  public article: any = {
    header:'',
    text:'',
    tag:'',
    image: '',
    availability:'',
    date: ''

  };


  

  constructor(private fb: FormBuilder, private ArticleService: ArticleService, private router: Router ) {
    this.article.date = new Date();
    // this.responses = [];
    // this.title = '';

    
   }

   

   // Input Values for the fields when posting article
   changeListener($event) : void {
    this.readThis($event.target);
  }

  //This is to convert an image into base64
  readThis(inputValue: any) : void {
   var file:File = inputValue.files[0];
   var myReader:FileReader = new FileReader();

   myReader.onloadend = (e) => {
     this.article.image = myReader.result;
     console.log(this.article.image);
   }
   myReader.readAsDataURL(file);
  }

ngOnInit(){
  // ngOnInit() : void {
    // const uploaderOptions: FileUploaderOptions = {
    //   url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().dvsb82g5t}/upload`,

    //   // Upload files automatically upon addition to upload queue
    //   autoUpload: true,

    //   // Use xhrTransport in favor of iframeTransport 
    //   isHTML5: true,

    //   // Calculate progree independently for each uploaded file
    //   removeAfterUpload: true,

    //   // XHR request headers
    //   headers: [
    //     {
    //       name: "X-Requested-With",
    //       value: 'XMLHttpRequest'
    //     }
    //   ]
    // };

    // this.uploader = new FileUploader(uploaderOptions);

    // this.uploader.onBuildItemForm = (fileItem: any, form: FormData) : any => {

    //   // Add Cloudinary unsigned upload preset to the upload form 
    //   form.append('upload_preset',
    //   this.cloudinary.config().upload_preset);

    //   // Add file to upload 
    //   form.append('file', fileItem);

    //   // Use default "withCredentials" value for CORS requests
    //   fileItem.withCredentials = false;
    //   return { fileItem, form};
    // };

    // fileOverBase(e: any): void {
    //   this.hasBaseDropZoneOver = e; 
    // }

  }
  


  // Read input Values
  onChangeHeader(value){ this.article.header = value }
  // onChangeText(value){ this.article.text = value }
  public change( {editor}: ChangeEvent ) {
    const EditorData = editor.getData();
    this.article.text = EditorData;
    console.log(editor)

  }

  onChangeTag(value){ this.article.tag = value }
  onChangeAvailabilty(value){ this.article.availability = value }
 checkCheckBoxvalue1(event){
  if (event.checked==true){
    this.article.tag=this.article.tag+'#BusinessTalks';
 (<HTMLInputElement>document.getElementById("preferTag")).value= this.article.tag
  }
  if (event.checked==false){
    this.article.tag=this.article.tag.replace('#BusinessTalks','');
    (<HTMLInputElement>document.getElementById("preferTag")).value= this.article.tag
  }
 
 }
 checkCheckBoxvalue2(event){

  if (event.checked==true){
    this.article.tag=this.article.tag+'#Charity';
 (<HTMLInputElement>document.getElementById("preferTag")).value= this.article.tag
  }
  if (event.checked==false){
    this.article.tag=this.article.tag.replace('#Charity','');
    (<HTMLInputElement>document.getElementById("preferTag")).value= this.article.tag
  }
}
checkCheckBoxvalue3(event){
  if (event.checked==true){
    this.article.tag=this.article.tag+'#OrganizationalGatherings';
 (<HTMLInputElement>document.getElementById("preferTag")).value= this.article.tag
  }
  if (event.checked==false){
    this.article.tag=this.article.tag.replace('#OrganizationalGatherings','');
    (<HTMLInputElement>document.getElementById("preferTag")).value= this.article.tag
  }
}
checkCheckBoxvalue4(event){
  if (event.checked==true){
    this.article.tag=this.article.tag+'#TradeAssociationHub';
 (<HTMLInputElement>document.getElementById("preferTag")).value= this.article.tag
  }
  if (event.checked==false){
    this.article.tag=this.article.tag.replace('#TradeAssociationHub','');
    (<HTMLInputElement>document.getElementById("preferTag")).value= this.article.tag
  }
}
checkCheckBoxvalue5(event){
  if (event.checked==true){
    this.article.tag=this.article.tag+'#EntrepreneurCourses';
 (<HTMLInputElement>document.getElementById("preferTag")).value= this.article.tag
  }
  if (event.checked==false){
    this.article.tag=this.article.tag.replace('#EntrepreneurCourses','');
    (<HTMLInputElement>document.getElementById("preferTag")).value= this.article.tag
  }
}


  //Submit function for posting article
  submit(){
    console.log(this.article.header)
    console.log(this.article.text)
    console.log(this.article.tag)
    console.log(this.article.availability)

  Swal.fire({
    title: 'Post article?',
    text: "Have you checked for grammar mistakes?",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'create article'
  }).then((result) => {
    if (this.article.header && this.article.text && this.article.availability && this.article.tag !=null) {

      this.ArticleService.createArticle(this.article).subscribe(result => {
    
      });
      Swal.fire(
        'Posted!',
        'Your article has been published',
        'success'
      )
    }else{
      Swal.fire(
        'Missing Value!',
        'Please fill in All article information before Posting',
        'warning'
      )
    }
  })
}

}
