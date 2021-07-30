import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { SekuritastugasdetailComponent } from '../sekuritastugasdetail/sekuritastugasdetail.component';

@Component({
  selector: 'app-sekuritastugas',
  templateUrl: './sekuritastugas.component.html',
  styleUrls: ['./sekuritastugas.component.scss']
})
export class SekuritastugasComponent implements OnInit {
    title: any;
    sekuritastugas: any;
    userData: any = {};
    sekuritastugass: any=[];
  
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
    getSekuritastugas() 
    {
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
    sekuritastugasDetail(data: any, idx: any) 
    {
      let dialog = this.dialog.open(SekuritastugasdetailComponent, {
        width: '400px',
        data: data
      });
      dialog.afterClosed().subscribe(res => {
        if (res) 
        {
          //jika idx=-1 (penambahan data baru) maka tambahkan data
          if (idx == -1) this.sekuritastugas.push(res);
          //jika tidak maka perbarui data  
          else this.sekuritastugas[idx] = res;
        }
      })
    }
    loadingDelete: any = {};
    deletetugasSekuritas(id: any, idx: any) 
    {
      var conf = confirm('Delete Item?');
      if (conf) 
      {
        this.db.collection('sekuritastugas').doc(id).delete().then(res => {
          this.sekuritastugas.splice(idx, 1);
          this.loadingDelete[idx] = false;
        }).catch(err => {
          this.loadingDelete[idx] = false;
          alert('Tidak dapat menghapus data');
        });
      }
    }
  }
  