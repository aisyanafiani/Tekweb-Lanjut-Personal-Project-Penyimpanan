import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tekwebtugasdetail',
  templateUrl: './tekwebtugasdetail.component.html',
  styleUrls: ['./tekwebtugasdetail.component.scss']
})
export class TekwebtugasdetailComponent implements OnInit {
userData:any={};

    constructor(
      public dialogRef: MatDialogRef<TekwebtugasdetailComponent>,
      @Inject(MAT_DIALOG_DATA)
      public data: any,
      public db: AngularFirestore,
      public auth: AngularFireAuth
    ) { }
   
    ngOnInit(): void {
      this.auth.user.subscribe((res: any)=>{
        this.userData = res;
      })
    }
    loading: boolean | undefined;
    saveData()
    {
      this.loading=true; 
      if(this.data.id == undefined)
      {
        //simpan ke fiirebase
        let doc = new Date().getTime().toString();
        this.data.uid = this.userData.uid;
        this.db.collection('tekwebtugas').doc(doc).set(this.data).then(res=>{
          this.dialogRef.close(this.data);
          this.loading=false;
        }).catch(er=>{
          console.log(er);
          this.loading=false;
          alert("Tidak dapat menyimpan data")
        })
      }else{
        this.db.collection('tekwebtugas').doc(this.data.id).update(this.data).then(res=>{
          this.dialogRef.close(this.data);
          this.loading=false;
        }).catch(er=>{
          console.log(er);
          this.loading=false;
          alert("Tidak dapat mengupdate data")
      })
      }
    }
  }