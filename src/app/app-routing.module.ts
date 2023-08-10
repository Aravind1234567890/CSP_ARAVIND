import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { InsertComponent } from './insert/insert.component';
import { Home2Component } from './home2/home2.component';
import { AboutComponent } from './about/about.component';
import { ConcatComponent } from './concat/concat.component';

const routes: Routes = [
  {path:'', component:Home1Component, title: 'Home page'},
  {path:'home2', component:Home2Component, title: 'Home page'},
  {path:'insert', component:InsertComponent, title: 'Home page'},
  {path:'delete', component:DeleteComponent, title: 'Home page'},
  {path:'update', component:UpdateComponent, title: 'Home page'},
  {path:'read', component:ReadComponent, title: 'Home page'},
  {path:'login', component:LoginComponent, title: 'Home page'},
  {path:'register', component:RegisterComponent, title: 'Home page'},
  {path:'about', component:AboutComponent, title: 'Home page'},
  {path:'contact', component:ConcatComponent, title: 'Home page'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
