import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { UploadtekwebComponent } from '../uploadtekweb/uploadtekweb.component';

@Component({
  selector: 'app-tekweb-tugass',
  templateUrl: './tekweb-tugass.component.html',
  styleUrls: ['./tekweb-tugass.component.scss']
})
export class TekwebTugassComponent implements OnInit {


  title: any;
  tekwebtugas: any;
  userData: any = {};
  tekwebtugass: any = [];

  constructor(
    public dialog: MatDialog,
    public db: AngularFirestore,
    public auth: AngularFireAuth
  ) {

  }
  ngOnInit(): void {
    this.title = 'tekwebtugas';
    this.auth.user.subscribe(user => {
      this.userData = user;
      this.getTekwebtugas();
    });
  }
  loading: boolean | undefined;
  getTekwebtugas() {
    this.loading = true;
    this.db.collection('tekwebtugas', ref => {
      return ref.where('uid', '==', this.userData.uid);
    }).valueChanges({ idField: 'id' }).subscribe(res => {
      console.log(res);
      this.tekwebtugas = res;
      this.loading = false;
    }, err => {
      this.loading = false;
    })
  }

  uploadFile(data: any) {
    let dialog = this.dialog.open(UploadtekwebComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res => {
      return;
    })
  }
}


