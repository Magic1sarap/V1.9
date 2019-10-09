
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { CategoryPipe } from './event/category.pipe';
import { ArticlePipe } from './article/articlesearch.pipe';
import { ArticleBlockPipe } from './article/articleBlock.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPayPalModule } from 'ngx-paypal';
import { InputCounterModule } from 'ng4-input-counter';

//services
import { AccountService } from './account.service';
import { AuthenService } from './authen.service';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { routing }  from './app.routing'; 
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ServiceComponent } from './service/service.component';
import { ArticleComponent } from './article/article.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { ArticleShowcaseComponent } from './article-showcase/article-showcase.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FutureEventsComponent } from './future-events/future-events.component';
import { ContactComponent } from './contact/contact.component';
import { EventShowcaseComponent } from './event-showcase/event-showcase.component';
import { AdminEditArticlesComponent } from './admin-edit-articles/admin-edit-articles.component';
import { AdminCreateArticleComponent } from './admin-create-article/admin-create-article.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminArticleComponent } from './admin-article/admin-article.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { DateAgoPipe } from './date-ago.pipe';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminServicesComponent } from './admin-services/admin-services.component';
import { StripHtmlPipe } from './strip-html.pipe';
import { AdminEditHomeComponent } from './admin-edit-home/admin-edit-home.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ServiceComponent,
    ArticleComponent,
    EventComponent,
    AboutComponent,
    AccountComponent,
    ArticleShowcaseComponent,
    NavbarComponent,
    FooterComponent,
    FutureEventsComponent,
    ContactComponent,
    EventShowcaseComponent,
    AdminEditArticlesComponent,
    AdminCreateArticleComponent,
    PaymentComponent,
    LogoutComponent,
    AdminArticleComponent,
    CategoryPipe,
    ArticlePipe,
    ArticleBlockPipe,
    RegisterEventComponent,
    PaymentComponent,
    DateAgoPipe,
    AdminAboutComponent,
    AdminServicesComponent,
    StripHtmlPipe,
    AdminEditHomeComponent,

  ],
  imports: [
    BrowserModule,
    NgxPayPalModule,
    routing,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    SlickCarouselModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    NgxSkeletonLoaderModule,
    CKEditorModule,
    InputCounterModule.forRoot()

    
  ],
  providers: [AccountService,AuthenService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
    // required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}