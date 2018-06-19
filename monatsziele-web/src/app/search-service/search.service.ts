import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public readonly searchString: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  setSearchString(searchString: string) {
    this.searchString.next(searchString);
  }

}
