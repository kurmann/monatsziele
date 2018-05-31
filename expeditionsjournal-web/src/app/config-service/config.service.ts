import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = 'assets/config.json';

  constructor(private _httpClient: HttpClient) { }

  getConfig() {
    return this._httpClient.get(this.configUrl);
  }

}
