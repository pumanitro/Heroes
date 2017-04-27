import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// For angular Material :
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MdInputModule, MdListModule, MdChipsModule, MdButtonModule, MdTabsModule} from '@angular/material';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import {HeroService} from './hero.service';

import {RoutingModule} from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule, MdListModule, MdChipsModule, MdButtonModule, MdTabsModule,
    RoutingModule
  ],
  exports: [MdInputModule, MdListModule, MdChipsModule, MdButtonModule],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
