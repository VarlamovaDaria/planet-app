import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GlobalConfig } from "../configuration/global-config";
import { PlanetObject } from "../objects/planet-object";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  constructor(
    private httpClient: HttpClient,
    private config: GlobalConfig,
    private planet: PlanetObject) {
  }

  getAllPlanets() {
    const url = '/planets/';

    return this.httpClient
      .get<PlanetObject[]>(`${this.config.apiUrl}${url}`);
  }

  getPlanet() {
    return this.httpClient.get<PlanetObject[]>(`${this.planet.url}`);
  }
}
