import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { SearchService } from '../search-service/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'Monatsziele';

  private _searchStrings = new Subject<string>();

  constructor(private _searchService: SearchService) { }

  search(searchString: string): void {
    this._searchService.setSearchString(searchString);
  }

}
