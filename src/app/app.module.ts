import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalRComponent } from './signal-r/signal-r.component';
 import {ToastrModule } from  'ngx-toastr'

@NgModule({
  declarations: [
    AppComponent,
    SignalRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      enableHtml: true,
      timeOut: 10000, // 15 seconds
      positionClass: 'toast-top-right',
      preventDuplicates:false
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
