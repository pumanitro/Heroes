import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// For angular Material :
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MdInputModule, MdListModule, MdChipsModule, MdButtonModule, MdTabsModule, MdAutocompleteModule} from '@angular/material';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import {HeroService} from './hero.service';

import {RoutingModule} from './routing/routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule, MdListModule, MdChipsModule, MdButtonModule, MdTabsModule, MdAutocompleteModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RoutingModule
  ],
  exports: [MdInputModule, MdListModule, MdChipsModule, MdButtonModule, MdAutocompleteModule],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
