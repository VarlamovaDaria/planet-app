import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GlobalConfig } from "../../configuration/global-config";
import { PlanetObject } from "../../objects/planet-object";
import { Observable } from "rxjs";
import { PlanetIdService } from "../planet-id-service/planet-id.service";
import { ResultObject } from "../../objects/result-object";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  constructor(
    private httpClient: HttpClient,
    private config: GlobalConfig) {
  }

  getAllPlanets(): Observable<ResultObject[]> {
    const url = 'planets/';

    return this.httpClient
      .get<ResultObject[]>(`${this.config.apiUrl}${url}`);
  }

  getPlanet(id: Number) {
    return this.httpClient.get<PlanetObject[]>(`${this.config.apiUrl}${id}`);
  }
}
