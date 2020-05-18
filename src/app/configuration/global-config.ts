import {Injectable} from '@angular/core';

@Injectable()
export class GlobalConfig {
  apiUrl: string;

  constructor() {
    this.apiUrl = 'http://127.0.0.1:8080';
  }
}
