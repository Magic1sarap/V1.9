import { ModuleWithProviders } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component'; 
import { LoginComponent } from'./login/login.component';
import { ForgotPasswordComponent } from'./forgot-password/forgot-password.component';
import { AboutComponent } from'./about/about.component';
import { EventComponent } from'./event/event.component';
import { ArticleComponent } from'./article/article.component';
import { ServiceComponent } from'./service/service.component';
import { AccountComponent } from'./account/account.component';
import { ArticleShowcaseComponent } from'./article-showcase/article-showcase.component';
import { EventShowcaseComponent } from './event-showcase/event-showcase.component';
import { AdminEditArticlesComponent } from './admin-edit-articles/admin-edit-articles.component';
import { AdminCreateArticleComponent } from './admin-create-article/admin-create-article.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { AdminArticleComponent } from './admin-article/admin-article.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminServicesComponent } from './admin-services/admin-services.component';
import { AdminEditHomeComponent } from './admin-edit-home/admin-edit-home.component';

const appRoutes: Routes = [ 
{ path: '', component: HomeComponent }, 
{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'forgot-password', component: ForgotPasswordComponent },
{ path: 'about', component: AboutComponent },
{ path: 'logout', component:LogoutComponent}, 
{ path: 'event', component: EventComponent },
{ path: 'article', component: ArticleComponent},
{ path: 'services', component: ServiceComponent},
{ path: 'account', component: AccountComponent, canActivate:[AuthGuard],data:{permission:{only:["m"]}}},
// { path: 'article-showcase', component: ArticleShowcaseComponent },
{ path: 'event-showcase', component: EventShowcaseComponent },
{ path: 'event-showcase/:eventid/:eventstartdate/:eventenddate/:registrationenddate/:eventtitle/:eventtype', component: EventShowcaseComponent },
// { path: 'admin', component: AdminComponent, canActivate:[AuthGuard],data:{permission:{only:["a"]}}},
// { path: 'admin-edit-articles', component: AdminEditArticlesComponent },
// { path: 'admin-create-articles', component: AdminCreateArticleComponent },
{ path: 'admin', component: AdminCreateArticleComponent, canActivate:[AuthGuard],data:{permission:{only:["a"]}}},
{ path: 'logout', component:LogoutComponent},
{ path: 'admin-article', component: AdminArticleComponent},
{ path: 'article-showcase/:header/:subheader/:tag/:_id/:date', component: ArticleShowcaseComponent },
{ path: 'admin-edit-articles/:header/:subheader/:tag/:_id/:date', component: AdminEditArticlesComponent },
{ path: 'register-event', component: RegisterEventComponent },
{ path: 'payment', component: PaymentComponent },
{ path: 'admin-about', component: AdminAboutComponent, canActivate:[AuthGuard],data:{permission: {only:["a"]}}},
{ path: 'admin-services', component: AdminServicesComponent, canActivate:[AuthGuard], data:{permission:{only:['a']}}},
{ path: 'admin-edit-home', component: AdminEditHomeComponent, canActivate:[AuthGuard], data:{permission:{only:['a']}}}

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 