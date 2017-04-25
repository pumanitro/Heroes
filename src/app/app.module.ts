import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// For angular Material :
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MdInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule
  ],
  exports: [MdInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
