import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-uploadsekuritas',
  templateUrl: './uploadsekuritas.component.html',
  styleUrls: ['./uploadsekuritas.component.scss']
})
export class UploadsekuritasComponent implements OnInit {
  userData: any = {};

  constructor(
    public dialogRef: MatDialogRef<UploadsekuritasComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public db: AngularFirestore,
    public auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.auth.user.subscribe((res: any) => {
      this.userData = res;
    })
  }

  selectedFile: any;
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      if (this.selectedFile.type != "file/image") alert('file harus PDF');
      console.log(this.selectedFile);
    }
  }

  loadingUpload: boolean | undefined;
  uploadFile() {
    let input = new FormData();
    input.append('file', this.selectedFile);

    this.loadingUpload = true;
    if (this.data.id == undefined) {
      let doc = new Date().getTime().toString();
      this.data.uid = this.userData.uid;
      this.db.collection('sekuritastugas').doc(doc).set(this.data).then(res => {
        this.dialogRef.close(this.data);
        this.loadingUpload = false;
      }).catch(er => {
        console.log(er);
        this.loadingUpload = false;
        alert("Tidak dapat menyimpan data")
      })
    } else {
      this.db.collection('sekuritastugas').doc(this.data.id).update(this.data).then(res => {
        this.dialogRef.close(this.data);
        this.loadingUpload = false;
      }).catch(er => {
        console.log(er);
        this.loadingUpload = false;
        alert("Tidak dapat mengupdate data")
      })
    }
  }
}