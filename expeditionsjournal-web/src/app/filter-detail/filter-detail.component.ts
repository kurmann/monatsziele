import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-service/search.service';

@Component({
  selector: 'app-filter-detail',
  templateUrl: './filter-detail.component.html',
  styleUrls: ['./filter-detail.component.css']
})
export class FilterDetailComponent implements OnInit {

  public searchString: string;

  constructor(private _searchService: SearchService) { }

  ngOnInit() {
    this._searchService.searchString.subscribe(searchString => this.searchString = searchString);
  }

}
