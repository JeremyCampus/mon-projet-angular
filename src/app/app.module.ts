import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { DeuxiemePageComponent } from './deuxieme-page/deuxieme-page.component';

import {AppareilService} from './services/appareil.service';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    DeuxiemePageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
