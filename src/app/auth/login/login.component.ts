import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, Validators } from '@angular/forms';
import { TilePosition } from '@angular/material/grid-list/tile-coordinator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};

  constructor(
    public auth: AngularFireAuth,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  hide : boolean = true;
  //login
  loading: boolean | undefined;
  login() 
  {
    this.loading = true;
    this.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(res => {
      this.loading = false;
      this.router.navigate(['admin/dashboard']);
    }).catch(err => {
      this.loading = false;
      alert('Can`t log in to your Account');
    });

  }

}





