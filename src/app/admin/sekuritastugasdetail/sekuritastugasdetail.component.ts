import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sekuritastugasdetail',
  templateUrl: './sekuritastugasdetail.component.html',
  styleUrls: ['./sekuritastugasdetail.component.scss']
})
export class SekuritastugasdetailComponent implements OnInit {

  userData:any={};

  constructor(
    public dialogRef: MatDialogRef<SekuritastugasdetailComponent>,
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
      this.db.collection('sekuritastugas').doc(doc).set(this.data).then(res=>{
        this.dialogRef.close(this.data);
        this.loading=false;
      }).catch(er=>{
        console.log(er);
        this.loading=false;
        alert("Tidak dapat menyimpan data")
      })
    }else{
      this.db.collection('sekuritastugas').doc(this.data.id).update(this.data).then(res=>{
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