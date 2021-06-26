import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MaterialDesign } from '../material/material';
import { ImagesComponent } from './images/images.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { TekwebComponent } from './tekweb/tekweb.component';
import { PemvisComponent } from './pemvis/pemvis.component';
import { SekuritaskomputerComponent } from './sekuritaskomputer/sekuritaskomputer.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

const routes: Routes = [
  {
    path: '',
    component : AdminComponent,
    children : [
      {
        path : 'dashboard',
        component : DashboardComponent
      },
      {
        path : 'product',
        component : ProductComponent
      },
      {
        path : 'tekweb',
        component : TekwebComponent
      },
      {
        path : 'pemvis',
        component : PemvisComponent
      },
      {
        path : 'sekuritaskomputer',
        component : SekuritaskomputerComponent
      },
      {
        path : '',
        pathMatch : 'full',
        redirectTo : '/admin/dashboard'
      }
      
    ]
  }
]
@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ImagesComponent,
    ProductComponent,
    ProductDetailComponent,
    TekwebComponent,
    PemvisComponent,
    SekuritaskomputerComponent,
    FileUploaderComponent
  ],
  entryComponents : [

  ],
  
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }
