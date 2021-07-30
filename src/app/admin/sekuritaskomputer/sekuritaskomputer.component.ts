import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { SekuritasdetailComponent } from '../sekuritasdetail/sekuritasdetail.component';

@Component({
  selector: 'app-sekuritaskomputer',
  templateUrl: './sekuritaskomputer.component.html',
  styleUrls: ['./sekuritaskomputer.component.scss']
})
export class SekuritaskomputerComponent implements OnInit {

  title: any;
  sekuritass: any = [];
  userData: any = {};
  sekuritas: any;

  constructor(
    public dialog: MatDialog,
    public db: AngularFirestore,
    public auth: AngularFireAuth

  ) {

  }
  ngOnInit(): void {
    console.log();
    this.title = 'Sekuritas';
    this.auth.user.subscribe(user => {
      this.userData = user;
      this.getSekuritas();
    });
  }
  loading: boolean | undefined;
  getSekuritas() 
  {
    this.loading = true;
    this.db.collection('sekuritas', ref => {
      return ref.where('uid', '==', this.userData.uid);
    }).valueChanges({ idField: 'id' }).subscribe(res => {
      console.log(res);
      this.sekuritas = res;
      this.loading = false;
    }, err => {
      this.loading = false;
    })
  }
  sekuritasDetail(data: any, idx: any)
  {
    let dialog = this.dialog.open(SekuritasdetailComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res => {
      if (res) 
      {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
        if (idx == -1) this.sekuritas.push(res);
        //jika tidak maka perbarui data  
        else this.sekuritas[idx] = res;
      }
    })
  }
  loadingDelete: any = {};
  deletesekuritas(id: any, idx: any) {
    var conf = confirm('Delete Item?');
    if (conf) {
      this.db.collection('sekuritas').doc(id).delete().then(res => {
        this.sekuritas.splice(idx, 1);
        this.loadingDelete[idx] = false;
      }).catch(err => {
        this.loadingDelete[idx] = false;
        alert('Tidak dapat menghapus data');
      });
    }
  }

}
