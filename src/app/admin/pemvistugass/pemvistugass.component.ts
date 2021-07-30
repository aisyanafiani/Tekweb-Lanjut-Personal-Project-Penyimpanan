import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { UploadpemvisComponent } from '../uploadpemvis/uploadpemvis.component';

@Component({
  selector: 'app-pemvistugass',
  templateUrl: './pemvistugass.component.html',
  styleUrls: ['./pemvistugass.component.scss']
})
export class PemvistugassComponent implements OnInit {

  title: any;
  pemvistugas: any;
  userData: any = {};
  pemvistugass: any = [];

  constructor(
    public dialog: MatDialog,
    public db: AngularFirestore,
    public auth: AngularFireAuth
  ) {

  }
  ngOnInit(): void {
    this.title = 'pemvistugas';
    this.auth.user.subscribe(user => {
      this.userData = user;
      this.getPemvistugas();
    });
  }
  loading: boolean | undefined;
  getPemvistugas() {
    this.loading = true;
    this.db.collection('pemvistugas', ref => {
      return ref.where('uid', '==', this.userData.uid);
    }).valueChanges({ idField: 'id' }).subscribe(res => {
      console.log(res);
      this.pemvistugas = res;
      this.loading = false;
    }, err => {
      this.loading = false;
    })
  }

  uploadFile(data: any) {
    let dialog = this.dialog.open(UploadpemvisComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res => {
      return;
    })
  }
}


