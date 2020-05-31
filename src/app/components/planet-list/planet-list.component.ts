import { Component, OnInit } from '@angular/core';
import { PageEvent } from "@angular/material/paginator";
import { PlanetObject } from "../../objects/planet-object";
import { PlanetService } from "../../services/planet-service/planet.service";
import { PlanetIdService } from "../../services/planet-id-service/planet-id.service";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  length = 12;
  defaultPageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  planets: PlanetObject[];
  planet: PlanetObject;

  constructor(
    private planetService: PlanetService,
    private planetIdService: PlanetIdService,
    ) {
      this.planetService.getAllPlanets().subscribe(planets => {
      this.planets = planets;
    });
   }

  ngOnInit() { }

  onPlanetClick() {
 //  let id = this.planetIdService.getPlanetId(this.planet);
 //  this.planetService.getPlanet(id);
  }
}
