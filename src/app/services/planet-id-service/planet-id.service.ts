import { Injectable } from '@angular/core';
import { PlanetObject } from "../../objects/planet-object";

@Injectable({
  providedIn: 'root'
})
export class PlanetIdService {

  constructor() {

  }

  getPlanetId(planet: PlanetObject) {
    return +planet.url.match(/\d+/);
  }
}
