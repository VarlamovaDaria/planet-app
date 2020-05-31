import { Component, OnInit } from '@angular/core';
import { PageEvent } from "@angular/material/paginator";
import { PlanetObject } from "../../objects/planet-object";
import { PlanetService } from "../../services/planet-service/planet.service";
import { PlanetIdService } from "../../services/planet-id-service/planet-id.service";
import { ResultObject } from "../../objects/result-object";

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
  result: ResultObject[];
  planets: PlanetObject[];

  constructor(
    private planetService: PlanetService,
    private planetIdService: PlanetIdService,
    ) { }

  ngOnInit() {
      this.planetService.getAllPlanets().subscribe(response => {
        this.result = response;
    });
  }

 // onPlanetClick() {
 //  let id = this.planetIdService.getPlanetId(this.planet);
 //  this.planetService.getPlanet(id);
 // }
}
