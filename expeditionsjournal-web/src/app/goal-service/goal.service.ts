import { Injectable } from '@angular/core';
import { GOALSINITDATA } from '../goal-initdata';
import { Goal } from '../goal';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Period } from '../period.enum';
import { SearchService } from '../search-service/search.service';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  public readonly goals: BehaviorSubject<Goal[]>;

  constructor(private _searchService: SearchService) {

    this._searchService.searchString.pipe(debounceTime(300))
    .subscribe(searchString => this._updateGoalsBySearchString(searchString));
   }

  private _updateGoalsBySearchString(searchString: string) {
    console.log('Searching goals by', searchString);
  }

  getGoals(): Goal[] {
    return GOALSINITDATA;
  }

  getGoal(id: string): Goal {
    return this.getGoals().find(e => e.id === id);
  }

}
