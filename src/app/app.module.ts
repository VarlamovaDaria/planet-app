import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetListComponent } from './components/planet-list/planet-list.component';

import {GlobalConfig} from './classes/global-config';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [GlobalConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
