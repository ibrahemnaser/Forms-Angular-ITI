import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userData = { username: '', password: '', email: '' };
  constructor() {}

  ngOnInit(): void {}

  getUser(ref: any) {
    console.log(ref);
  }
}
