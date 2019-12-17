import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AdminViewModel } from './adminViewModel.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  email: string;
  password: string;
  constructor(private service: UserService) { }

  ngOnInit() {
  }

  auth() {
    this.service.auth(this.email, this.password).subscribe((isAdmin: boolean) => {
      if (isAdmin) {
        localStorage.setItem('email', this.email);
        localStorage.setItem('password', this.password);
      }
    });
  }
}
