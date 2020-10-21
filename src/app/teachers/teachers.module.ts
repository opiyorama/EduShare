import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { SetQuizComponent } from './set-quiz/set-quiz.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UploadNotesComponent } from './upload-notes/upload-notes.component';


@NgModule({
  declarations: [SetQuizComponent, SignInComponent, WelcomeComponent, UploadNotesComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
