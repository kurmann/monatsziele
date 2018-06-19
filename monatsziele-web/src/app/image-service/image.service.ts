import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UnsplashResult } from './UnsplashResult';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  _unsplashConnection: any;

  constructor(private _httpClient: HttpClient) { }

  getImagesBySearchTerm(searchTerm: string): Observable<UnsplashResult> {
    const url = environment.connections.unsplash.url +
    '/search/photos' +
    '?query=' + searchTerm +
    '&per_page=' + 24 +
    '&orientation=' + 'landscape' +
    '&client_id=' +
    environment.connections.unsplash.clientId;

    console.log(url);

    return this._httpClient.get<UnsplashResult>(url);
  }

}
