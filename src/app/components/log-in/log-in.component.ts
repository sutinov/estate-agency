import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  usernameInput = '';
  passwordInput = '';
  username: string = 'baze';
  password: string = 'pass';
  loginSuccess: boolean = true;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  login() {
    if (
      this.username === this.usernameInput &&
      this.password === this.passwordInput
    ) {
      this.loginSuccess = true;
      this.route.navigate(['home']);
    } else {
      this.loginSuccess = false;
    }
  }
}
