import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config-service/config.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _httpClient: HttpClient, private _configService: ConfigService) {
    this._configService.getConfig().subscribe(config => console.log(config));
  }

  test() {
    console.log('test');
  }

}
