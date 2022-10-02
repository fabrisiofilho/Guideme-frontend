import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateModule } from './pages/private/private.module';
import { PublicModule } from './pages/public/public.module';

import { MenuModule } from 'primeng/menu'
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { AuthGuardService } from './security/auth-guard.service';
import { AuthService } from './security/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {OverlayPanelModule} from 'primeng/overlaypanel';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MenuModule,
    AvatarModule,
    ToastModule,
    FormsModule,
    ButtonModule,
    DynamicDialogModule,
    ProgressBarModule,
    FileUploadModule,
    ProgressSpinnerModule,
    OverlayPanelModule,

    PublicModule,
    PrivateModule,
    FontAwesomeModule
  ],
  entryComponents:[],
  providers: [AuthGuardService, AuthService, MessageService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
