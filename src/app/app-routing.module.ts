import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'forgot',
    component : ForgotComponent
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'admin',
    loadChildren : ()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path : 'public',
    loadChildren : ()=>import('./public/public.module').then(mod=>mod.PublicModule)
  },
  {
    path : '',
    pathMatch:'full',
    redirectTo:'/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
