import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GlobalConfig } from "../configuration/global-config";
import { PeopleObject } from "../objects/people-object";
import {PlanetObject} from "../objects/planet-object";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private httpClient: HttpClient,
    private config: GlobalConfig,
    private people: PeopleObject ) {

  }

  getAllPeople() {
    const url = '/people/';

    return this.httpClient
      .get<PeopleObject[]>(`${this.config.apiUrl}${url}`);
  }

  getPeople() {
    return this.httpClient.get<PeopleObject[]>(`${this.people.url}`);
  }

}
