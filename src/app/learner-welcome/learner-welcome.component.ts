import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/_services/account-service.service';
import { User } from '@app/_models/user';

@Component({
  selector: 'app-learner-welcome',
  templateUrl: './learner-welcome.component.html',
  styleUrls: ['./learner-welcome.component.css']
})
export class LearnerWelcomeComponent implements OnInit {
  user: User;

  constructor(private AccountService: AccountService) {
    this.user = this.AccountService.userValue;
  }

  ngOnInit() {
  }

}
