import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { PemvisdetailComponent } from '../pemvisdetail/pemvisdetail.component';

@Component({
  selector: 'app-pemvis',
  templateUrl: './pemvis.component.html',
  styleUrls: ['./pemvis.component.scss']
})
export class PemvisComponent implements OnInit {

  title: any;
  pemviss: any = [];
  userData: any = {};
  pemvis: any;

  constructor(
    public dialog: MatDialog,
    public db: AngularFirestore,
    public auth: AngularFireAuth

  ) {

  }
  ngOnInit(): void {
    console.log();
    this.title = 'Pemvis';
    this.auth.user.subscribe(user => {
      this.userData = user;
      this.getPemvis();
    });
  }
  loading: boolean | undefined;
  getPemvis() {
    this.loading = true;
    this.db.collection('pemvis', ref => {
      return ref.where('uid', '==', this.userData.uid);
    }).valueChanges({ idField: 'id' }).subscribe(res => {
      console.log(res);
      this.pemvis = res;
      this.loading = false;
    }, err => {
      this.loading = false;
    })
  }
  pemvisDetail(data: any, idx: any) {
    let dialog = this.dialog.open(PemvisdetailComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res => {
      if (res) {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
        if (idx == -1) this.pemvis.push(res);
        //jika tidak maka perbarui data  
        else this.pemvis[idx] = res;
      }
    })
  }
  loadingDelete: any = {};
  deletepemvis(id: any, idx: any) {
    var conf = confirm('Delete Item?');
    if (conf) {
      this.db.collection('pemvis').doc(id).delete().then(res => {
        this.pemvis.splice(idx, 1);
        this.loadingDelete[idx] = false;
      }).catch(err => {
        this.loadingDelete[idx] = false;
        alert('Tidak dapat menghapus data');
      });
    }
  }

}