import {Component, Input, OnInit} from '@angular/core';
import { PlanetListComponent } from "../planet-list/planet-list.component";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  @Input('parent') planetList: PlanetListComponent;

  constructor() {}

  ngOnInit(): void {
  }

}
