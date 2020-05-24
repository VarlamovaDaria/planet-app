import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { SearchPlanetComponent } from './components/search-planet/search-planet.component';

import { GlobalConfig } from './configuration/global-config';
import { PlanetService } from "./services/planet-service/planet.service";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetListComponent,
    SearchPlanetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatPaginatorModule,
    HttpClientModule,
    MatListModule,
    MatIconModule
  ],
  providers: [GlobalConfig, PlanetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
