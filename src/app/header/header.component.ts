import { Component } from '@angular/core';
import { SearchService } from '../search-service/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'Monatsziele';

  constructor(private _searchService: SearchService) { }

  search(searchString: string): void {
    this._searchService.setSearchString(searchString);
  }

}
