import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config-service/config.service';
import { Config } from '../config-service/Config';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  _config: Config;

  constructor(private _httpClient: HttpClient, private _configService: ConfigService) {
    this._configService.getConfig().subscribe(config => {
      this._config = config;
      console.log('Client URL:', this._config.connections.unsplash.clientId);
    });
  }

  getImages() {
    console.log('Executed test images');
  }

}
