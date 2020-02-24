import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ScrumboardComponent } from './scrumboard/scrumboard.component';

const routes: Routes = [
  {path : '', component : HomepageComponent},
  {path : 'home', component : HomepageComponent},
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'scrumboard/:project_id', component : ScrumboardComponent, canActivate:[AuthGuard]},
]



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
