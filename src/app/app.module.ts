import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// For angular Material :
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MdInputModule, MdListModule, MdChipsModule, MdButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule, MdListModule, MdChipsModule, MdButtonModule
  ],
  exports: [MdInputModule, MdListModule, MdChipsModule, MdButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
