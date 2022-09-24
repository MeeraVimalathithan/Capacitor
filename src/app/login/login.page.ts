import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  register(form) {
    console.log(form.value);
    let username = form.value.username ? form.value.username : null;
    let password = form.value.password ? form.value.password : null;

    if (!username || !password) {
      alert("Invalid username or password");
    } else {
      this.apiService.setPreferences('13');
      this.router.navigateByUrl('dashboard');
      form.reset();
    }

  }
}
