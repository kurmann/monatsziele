import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnsplashImage } from './UnsplashImage';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { debounceTime } from 'rxjs/operators';
import { UnsplashResult } from './UnsplashResult';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  _unsplashConnection: any;

  constructor(private _httpClient: HttpClient) { }

  getCurrentImages(): Observable<UnsplashImage[]> {

    const url =
      environment.connections.unsplash.url +
      '/photos/?client_id=' +
      environment.connections.unsplash.clientId;

    return this._httpClient.get<UnsplashImage[]>(url);
  }

  getImagesBySearchTerm(searchTerm: string): Observable<UnsplashResult> {
    const url = environment.connections.unsplash.url +
    '/search/photos' +
    '?query=' + searchTerm +
    '&client_id=' +
    environment.connections.unsplash.clientId;

    console.log(url);

    return this._httpClient.get<UnsplashResult>(url);
  }

}
