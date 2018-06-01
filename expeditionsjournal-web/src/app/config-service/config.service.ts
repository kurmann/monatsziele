import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './Config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configUrl = 'assets/config.json';

  constructor(private _httpClient: HttpClient) { }

  getConfig() {
    return this._httpClient.get<Config>(this.configUrl);
  }

}
