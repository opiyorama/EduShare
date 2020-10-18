import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { GuizComponent } from './guiz/guiz.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component'
import { StudentcontentComponent } from './studentcontent/studentcontent.component';
import { WelcomestudentComponent } from './welcomestudent/welcomestudent.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GuizComponent,
    SignupComponent,
    SearchComponent,
    StudentcontentComponent,
    WelcomestudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
