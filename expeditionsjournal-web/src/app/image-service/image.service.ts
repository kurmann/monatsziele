import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config-service/config.service';
import { Config } from '../config-service/Config';
import { UnsplashImage } from './UnsplashImage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  _config: Config;

  constructor(private _httpClient: HttpClient, private _configService: ConfigService) { }

  async getImages() {

    this._config = await this._configService.getConfig();
    const url = this._config.connections.unsplash.url + '/photos/?client_id=' + this._config.connections.unsplash.clientId;
    return this._httpClient.get<UnsplashImage[]>(url).toPromise();
  }
}
