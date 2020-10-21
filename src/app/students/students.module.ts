import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { AttemptQuizComponent } from './attempt-quiz/attempt-quiz.component';


@NgModule({
  declarations: [SignInComponent, AttemptQuizComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
