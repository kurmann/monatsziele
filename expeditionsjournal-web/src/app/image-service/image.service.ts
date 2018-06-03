import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnsplashImage } from './UnsplashImage';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  _unsplashConnection: any;

  constructor(private _httpClient: HttpClient) {}

  getImages(): Observable<UnsplashImage[]> {

    const url =
      environment.connections.unsplash.url +
      '/photos/?client_id=' +
      environment.connections.unsplash.clientId;

    return this._httpClient.get<UnsplashImage[]>(url);
  }
}
