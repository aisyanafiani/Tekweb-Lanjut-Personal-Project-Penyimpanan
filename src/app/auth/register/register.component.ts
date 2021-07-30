import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //constructor
  constructor(
    public router: Router,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }
  //inisial untuk formulir
  user: any = {}
  hide: boolean = true;

  //register
  loading: boolean | undefined;
  register() {
    this.loading = true;
    this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(res => {
      this.loading = false;
      alert('Registration Successfull');
      this.router.navigate(['auth/login']);
    }).catch(err => {
      this.loading = false;
      alert('Registration Failed');
    });
  }
}