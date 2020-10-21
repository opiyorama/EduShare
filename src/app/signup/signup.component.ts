import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  /*  form: FormGroup;
   loading = false;
   submitted = false; */

  constructor(
    /*  private formBuilder: FormBuilder,
     private route: ActivatedRoute,
     private router: Router,
     private accountService: AccountService, */

  ) { }

  ngOnInit() {
    /* this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    }) */
  }

  // get f() { return this.form.controls; }

  /* onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.accountService.register(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // this.alertService.success('Registration successful', { keepAfterRouteChange: true });

          this.router.navigate(['../login'], { relativeTo: this.route })
        },
        error: error => {
          // this.alertService.error(error);
          this.loading = false;
        }
      })

  } */


}
