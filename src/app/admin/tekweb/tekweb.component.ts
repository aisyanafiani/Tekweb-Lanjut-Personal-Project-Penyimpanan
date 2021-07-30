import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { TekwebdetailComponent } from '../tekwebdetail/tekwebdetail.component';


@Component({
  selector: 'app-tekweb',
  templateUrl: './tekweb.component.html',
  styleUrls: ['./tekweb.component.scss']
})
export class TekwebComponent implements OnInit {

  title: any;
  tekweb: any;
  userData: any = {};
  tekwebs: any=[];

  constructor(
    public dialog: MatDialog,
    public db: AngularFirestore,
    public auth: AngularFireAuth
  ) {

  }
  ngOnInit(): void {
    this.title = 'tekweb';
    this.auth.user.subscribe(user => {
      this.userData = user;
      this.getTekweb();
    });
  }
  loading: boolean | undefined;
  getTekweb() 
  {
    this.loading = true;
    this.db.collection('tekweb', ref => {
      return ref.where('uid', '==', this.userData.uid);
    }).valueChanges({ idField: 'id' }).subscribe(res => {
      console.log(res);
      this.tekweb = res;
      this.loading = false;
    }, err => {
      this.loading = false;
    })
  }
  tekwebDetail(data: any, idx: any) 
  {
    let dialog = this.dialog.open(TekwebdetailComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res => {
      if (res) 
      {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
        if (idx == -1) this.tekweb.push(res);
        //jika tidak maka perbarui data  
        else this.tekweb[idx] = res;
      }
    })
  }
  loadingDelete: any = {};
  deleteTekweb(id: any, idx: any) 
  {
    var conf = confirm('Delete Item?');
    if (conf) 
    {
      this.db.collection('tekweb').doc(id).delete().then(res => {
        this.tekweb.splice(idx, 1);
        this.loadingDelete[idx] = false;
      }).catch(err => {
        this.loadingDelete[idx] = false;
        alert('Tidak dapat menghapus data');
      });
    }
  }
}