import {Injectable} from '@angular/core';

@Injectable()
export class GlobalConfig {
  apiUrl: string;

  constructor() {
    this.apiUrl = 'https://swapi.dev/api/';

    // or we can use docker image: this.apiUrl = 'https://127.0.0.1:8080/api';
  }
}
