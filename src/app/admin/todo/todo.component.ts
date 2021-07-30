import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  title: any;
  todo: any;
  userData: any = {};
  todos: any = [];

  constructor(
    public dialog: MatDialog,
    public db: AngularFirestore,
    public auth: AngularFireAuth
  ) {


  }

  ngOnInit(): void {
    this.title = 'To do';
    this.auth.user.subscribe(user => {
      this.userData = user;
      this.getTodos();
    });
  }
  loading: boolean | undefined;
  getTodos() {
    this.loading = true;
    this.db.collection('todos', ref => {
      return ref.where('uid', '==', this.userData.uid);
    }).valueChanges({ idField: 'id' }).subscribe(res => {
      console.log(res);
      this.todos = res;
      this.loading = false;
    }, err => {
      this.loading = false;
    })
  }
  todoDetail(data: any, idx: any) {
    let dialog = this.dialog.open(TodoDetailComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res => {
      if (res) {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
        if (idx == -1) this.todos.push(res);
        //jika tidak maka perbarui data  
        else this.todos[idx] = res;
      }
    })
  }
  loadingDelete: any = {};
  deleteTodos(id: any, idx: any) {
    var conf = confirm('Delete Item?');
    if (conf) {
      this.db.collection('todos').doc(id).delete().then(res => {
        this.todos.splice(idx, 1);
        this.loadingDelete[idx] = false;
      }).catch(err => {
        this.loadingDelete[idx] = false;
        alert('Tidak dapat menghapus data');
      });
    }
  }
  uploadFile(data: any) {
    let dialog = this.dialog.open(FileUploaderComponent, {
      width: '400px',
      data: data
    });
    dialog.afterClosed().subscribe(res => {
      return;
    })
  }
}

