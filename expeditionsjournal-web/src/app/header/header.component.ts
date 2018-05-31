import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { GoalService } from '../goal-service/goal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'Monatsziele';

  private _searchStrings = new Subject<string>();

  constructor(private _goalService: GoalService) { }

  // ngOnInit(): void {
  //   this._searchStrings.pipe(debounceTime(1000))
  //   .subscribe(searchString => this._goalService.setSearchString(searchString));
  // }

  search(searchString: string): void {
    this._goalService.setSearchString(searchString);
  }

}
