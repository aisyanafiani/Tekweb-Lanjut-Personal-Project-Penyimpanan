import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-uploadtekweb',
  templateUrl: './uploadtekweb.component.html',
  styleUrls: ['./uploadtekweb.component.scss']
})
export class UploadtekwebComponent implements OnInit {
  userData: any = {};

  constructor(
    public dialogRef: MatDialogRef<UploadtekwebComponent>,
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
      this.db.collection('tekwebtugas').doc(doc).set(this.data).then(res => {
        this.dialogRef.close(this.data);
        this.loadingUpload = false;
      }).catch(er => {
        console.log(er);
        this.loadingUpload = false;
        alert("Tidak dapat menyimpan data")
      })
    } else {
      this.db.collection('tekwebtugas').doc(this.data.id).update(this.data).then(res => {
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