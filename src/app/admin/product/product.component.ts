import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  title:any;
  absence:any={};
  absences:any=[];

  constructor(
    public dialog: MatDialog,
  ) {

    this.title = 'Products';
  }
  ngOnInit(): void {
    console.log();
    this.title='Product';
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

