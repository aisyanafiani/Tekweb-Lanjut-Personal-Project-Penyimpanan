import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { UploadsekuritasComponent } from '../uploadsekuritas/uploadsekuritas.component';

@Component({
  selector: 'app-sekuritastugass',
  templateUrl: './sekuritastugass.component.html',
  styleUrls: ['./sekuritastugass.component.scss']
})
export class SekuritastugassComponent implements OnInit {

  title: any;
  sekuritastugas: any;
  userData: any = {};
  sekuritastugass: any = [];

  constructor(
    public dialog: MatDialog,
    public db: AngularFirestore,
    public auth: AngularFireAuth
  ) {

  }
  ngOnInit(): void {
    this.title = 'sekuritastugas';
    this.auth.user.subscribe(user => {
      this.userData = user;
      this.getSekuritastugas();
    });
  }
  loading: boolean | undefined;
  getSekuritastugas() {
    this.loading = true;
    this.db.collection('sekuritastugas', ref => {
      return ref.where('uid', '==', this.userData.uid);
    }).valueChanges({ idField: 'id' }).subscribe(res => {
      console.log(res);
      this.sekuritastugas = res;
      this.loading = false;
    }, err => {
      this.loading = false;
    })
  }

  uploadFile(data: any) {
    let dialog = this.dialog.open(UploadsekuritasComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res => {
      return;
    })
  }
}


