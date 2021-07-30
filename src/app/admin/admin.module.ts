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
import { TekwebdetailComponent } from './tekwebdetail/tekwebdetail.component';
import { PemvisdetailComponent } from './pemvisdetail/pemvisdetail.component';
import { SekuritasdetailComponent } from './sekuritasdetail/sekuritasdetail.component';
import { JoinclassComponent } from './joinclass/joinclass.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TekwebTugasComponent } from './tekweb-tugas/tekweb-tugas.component';
import { TekwebtugasdetailComponent } from './tekwebtugasdetail/tekwebtugasdetail.component';
import { TekwebTugassComponent } from './tekweb-tugass/tekweb-tugass.component';
import { PemvistugasComponent } from './pemvistugas/pemvistugas.component';
import { PemvistugassComponent } from './pemvistugass/pemvistugass.component';
import { PrmvistugasdetailComponent } from './prmvistugasdetail/prmvistugasdetail.component';
import { SekuritastugasComponent } from './sekuritastugas/sekuritastugas.component';
import { SekuritastugasdetailComponent } from './sekuritastugasdetail/sekuritastugasdetail.component';
import { SekuritastugassComponent } from './sekuritastugass/sekuritastugass.component';
import { UploadtekwebComponent } from './uploadtekweb/uploadtekweb.component';
import { UploadpemvisComponent } from './uploadpemvis/uploadpemvis.component';
import { UploadsekuritasComponent } from './uploadsekuritas/uploadsekuritas.component';

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
        path : 'tekwebdetail',
        component :TekwebdetailComponent
      },
      {
        path : 'admin',
        component :AdminComponent
      },
      {
        path : 'joinclass',
        component :JoinclassComponent
      },
      {
        path : 'createnewclass',
        component :CreateClassComponent
      },
      {
        path : 'todo',
        component :TodoComponent
      },
      {
        path : 'tododetail',
        component :TodoDetailComponent
      },
      {
        path : 'fileuploader',
        component :FileUploaderComponent
      },
      {
        path : 'adminpage',
        component :AdminpageComponent
      },
      {
        path : 'pemvisdetail',
        component :PemvisdetailComponent
      },
      {
        path : 'tekwebtugas',
        component :TekwebTugasComponent
      },
      {
        path : 'tekwebtugass',
        component :TekwebTugassComponent
      },
      {
        path : 'pemvistugas',
        component :PemvistugasComponent
      },
      {
        path : 'pemvistugass',
        component :PemvistugassComponent
      },
      {
        path : 'sekuritastugas',
        component :SekuritastugasComponent
      },
      {
        path : 'sekuritastugass',
        component :SekuritastugassComponent
      },
      {
        path : 'produk',
        component :ProductComponent
      },
      {
        path : 'uploadpemvis',
        component :UploadpemvisComponent
      },
      {
        path : 'uploadtekweb',
        component :UploadtekwebComponent
      },
      {
        path : 'uploadsekuritas',
        component :UploadsekuritasComponent
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
    FileUploaderComponent,
    TekwebdetailComponent,
    PemvisdetailComponent,
    SekuritasdetailComponent,
    JoinclassComponent,
    CreateClassComponent,
    AdminpageComponent,
    TodoComponent,
    TodoDetailComponent,
    TekwebTugasComponent,
    TekwebtugasdetailComponent,
    TekwebTugassComponent,
    PemvistugasComponent,
    PemvistugassComponent,
    PrmvistugasdetailComponent,
    SekuritastugasComponent,
    SekuritastugasdetailComponent,
    SekuritastugassComponent,
    UploadtekwebComponent,
    UploadpemvisComponent,
    UploadsekuritasComponent
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
