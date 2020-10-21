import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@app/auth/auth.module'
import { environment } from '../environments/environment';
/* import { GuizComponent } from './guiz/guiz.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from '@app/auth/signup/signup.component'
import { StudentcontentComponent } from './studentcontent/studentcontent.component';
import { WelcomestudentComponent } from './welcomestudent/welcomestudent.component'; */


@NgModule({
  declarations: [
    AppComponent,
    /*    GuizComponent,
       SignupComponent,
       SearchComponent,
       StudentcontentComponent,
       WelcomestudentComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
