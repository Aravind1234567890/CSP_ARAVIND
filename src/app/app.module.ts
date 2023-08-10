import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ReadComponent } from './read/read.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ConcatComponent } from './concat/concat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    Home2Component,
    InsertComponent,
    UpdateComponent,
    DeleteComponent,
    ReadComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ConcatComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
