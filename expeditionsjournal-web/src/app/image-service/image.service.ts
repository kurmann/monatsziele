import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config-service/config.service';
import { Config } from '../config-service/Config';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  _config: Config;

  constructor(private _httpClient: HttpClient, private _configService: ConfigService) { }

  getImages() {

    this._configService.getConfig().subscribe(
      config => this._config = config,
      error => console.log(error),
      () => {
        const url = this._config.connections.unsplash.url + '/photos/?client_id=' + this._config.connections.unsplash.clientId;
        return this._httpClient.get(url).subscribe(images => console.log(JSON.stringify(images)));
      }
    );


  }

}
