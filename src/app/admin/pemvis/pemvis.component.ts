import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-pemvis',
  templateUrl: './pemvis.component.html',
  styleUrls: ['./pemvis.component.scss']
})
export class PemvisComponent implements OnInit {

  title:any;
  absence:any={};
  absences:any=[];

  constructor(
    public dialog: MatDialog,
  ) {

    this.title = 'Tekweb';
  }
  ngOnInit(): void {
    console.log();
    this.title='Tekweb';
    this.absence={
      NIM : '1900016020',
      Nama : 'Aisya Fitria Nafiani',
      Kelas:'D',
      ProgramStudi:'SI',
      Fakultas:'FAST',
    };
    
  }



productDetail(data:any,idx:any)
 {
   let dialog=this.dialog.open(ProductDetailComponent, {
     width:'400px',
     data:data
   });
   dialog.afterClosed().subscribe(res=>{
     if(res)
     {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
       if(idx==-1)this.absences.push(res);      
        //jika tidak maka perbarui data  
       else this.absences[idx]=res; 
     }
   })
  }
  deleteProduct(idx:any)
 {
   var conf=confirm('Delete item?');
   if(conf)
   this.absences.splice(idx,1);
 }

}

