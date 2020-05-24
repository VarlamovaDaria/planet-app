import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GlobalConfig } from "../../configuration/global-config";
import { PlanetObject } from "../../objects/planet-object";
import { Observable } from "rxjs";
import { PlanetIdService } from "../planet-id-service/planet-id.service";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  constructor(
    private httpClient: HttpClient,
    private config: GlobalConfig,
    private id: PlanetIdService) {
  }

  getAllPlanets(): Observable<PlanetObject[]> {
    const url = '/planets/';

    return this.httpClient
      .get<PlanetObject[]>(`${this.config.apiUrl}${url}`);
  }

  getPlanet() {
    const id = this.id;

    return this.httpClient.get<PlanetObject[]>(`${this.config.apiUrl}${id}`);
  }
}
