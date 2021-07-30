import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { TekwebtugasdetailComponent } from '../tekwebtugasdetail/tekwebtugasdetail.component';

@Component({
  selector: 'app-tekweb-tugas',
  templateUrl: './tekweb-tugas.component.html',
  styleUrls: ['./tekweb-tugas.component.scss']
})
export class TekwebTugasComponent implements OnInit {

  
  title: any;
  tekwebtugas: any;
  userData: any = {};
  tekwebtugass: any=[];

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
  getTekwebtugas() 
  {
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
  tekwebtugasDetail(data: any, idx: any) 
  {
    let dialog = this.dialog.open(TekwebtugasdetailComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res => {
      if (res) 
      {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
        if (idx == -1) this.tekwebtugas.push(res);
        //jika tidak maka perbarui data  
        else this.tekwebtugas[idx] = res;
      }
    })
  }
  loadingDelete: any = {};
  deletetugasTekweb(id: any, idx: any) 
  {
    var conf = confirm('Delete Item?');
    if (conf) 
    {
      this.db.collection('tekweb').doc(id).delete().then(res => {
        this.tekwebtugas.splice(idx, 1);
        this.loadingDelete[idx] = false;
      }).catch(err => {
        this.loadingDelete[idx] = false;
        alert('Tidak dapat menghapus data');
      });
    }
  }
}
