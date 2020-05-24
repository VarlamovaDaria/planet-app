import {Component, Input, OnInit} from '@angular/core';
import { PlanetListComponent } from "../planet-list/planet-list.component";
import { PlanetService } from "../../services/planet-service/planet.service";
import {PlanetObject} from "../../objects/planet-object";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  @Input('parent') planetList: PlanetListComponent;
  planets: PlanetObject[];

  constructor( private planetService: PlanetService ) {
      this.planetService.getAllPlanets().subscribe(planets => {
      this.planets = planets;
    });
  }

  ngOnInit(): void {
  }

}
