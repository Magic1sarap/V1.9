import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
   }

  ngOnInit() {
  }
  
  useLanguage(language: string) {
    this.translate.use(language);
  }

}
