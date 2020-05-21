import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { GlobalConfig } from "../configuration/global-config";
import { PlanetObject } from "../objects/planet-object";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  constructor(
    private httpClient: HttpClient,
    private config: GlobalConfig,
    private planet: PlanetObject ) {
  }

  getAllPlanets(): Observable<PlanetObject[]> {
    const url = '/planets/';

    return this.httpClient
      .get<PlanetObject[]>(`${this.config.apiUrl}${url}`);
  }

  getPlanet() {
    return this.httpClient.get<PlanetObject[]>(`${this.planet.url}`);
  }
}
