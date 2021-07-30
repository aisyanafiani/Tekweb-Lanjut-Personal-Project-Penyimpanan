import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { PrmvistugasdetailComponent } from '../prmvistugasdetail/prmvistugasdetail.component';

@Component({
  selector: 'app-pemvistugas',
  templateUrl: './pemvistugas.component.html',
  styleUrls: ['./pemvistugas.component.scss']
})
export class PemvistugasComponent implements OnInit {

  
  title: any;
  pemvistugas: any;
  userData: any = {};
  pemvistugass: any=[];

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
  getPemvistugas() 
  {
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
  pemvistugasDetail(data: any, idx: any) 
  {
    let dialog = this.dialog.open(PrmvistugasdetailComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res => {
      if (res) 
      {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
        if (idx == -1) this.pemvistugas.push(res);
        //jika tidak maka perbarui data  
        else this.pemvistugas[idx] = res;
      }
    })
  }
  loadingDelete: any = {};
  deletetugasPemvis(id: any, idx: any) 
  {
    var conf = confirm('Delete Item?');
    if (conf) 
    {
      this.db.collection('pemvistugas').doc(id).delete().then(res => {
        this.pemvistugas.splice(idx, 1);
        this.loadingDelete[idx] = false;
      }).catch(err => {
        this.loadingDelete[idx] = false;
        alert('Tidak dapat menghapus data');
      });
    }
  }
}
