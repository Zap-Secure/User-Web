import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SigninComponent } from './Pages/signin/signin.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { SignupInComponent } from './Pages/signup-in/signup-in.component';
import { AccountChatComponent } from './Pages/account-chat/account-chat.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { WebStudioComponent } from './Pages/web-studio/web-studio.component';
import { MobileAppComponent } from './Pages/mobile-app/mobile-app.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup-in', component: SignupInComponent },
  { path: 'account-chat', component: AccountChatComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'web-studio', component: WebStudioComponent },
  { path: 'mobile-app', component: MobileAppComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }