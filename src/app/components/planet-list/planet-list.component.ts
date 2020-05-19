import { Component, OnInit } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  length = 100;
  defaultPageSize = 10;
  pageSizeOptions: number[] = [10, 25, 100];
  pageEvent: PageEvent;

  constructor() { }

  ngOnInit() {
  }

}
