import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { environment } from 'src/environments/environment.prod';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//material design
import { MaterialDesign } from './material/material';

//firebase
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './public/home/home.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    MaterialDesign
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
