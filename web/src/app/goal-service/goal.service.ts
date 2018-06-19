import { Injectable } from '@angular/core';
import { GOALSINITDATA } from '../goal-initdata';
import { Goal } from '../goal';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SearchService } from '../search-service/search.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  public readonly goals: BehaviorSubject<Goal[]> = new BehaviorSubject<Goal[]>(
    []
  );

  constructor(
    private _httpClient: HttpClient,
    private _searchService: SearchService
  ) {
    this._searchService.searchString
      .pipe(debounceTime(300))
      .subscribe(searchString => this._updateGoalsBySearchString(searchString));
  }

  private _updateGoalsBySearchString(searchString: string) {
    if (searchString) {
      const filteredGoalData = new Array<Goal>();
      filteredGoalData.push(GOALSINITDATA[1]);
      this.goals.next(filteredGoalData);
    } else {
      this.goals.next(GOALSINITDATA);
    }
  }

  getGoals(): Goal[] {
    return GOALSINITDATA;
  }

  getGoalsAsync(): Observable<Goal[]> {
    const url = environment.connections.monatsziele.url + 'goals';

    return this._httpClient.get<Goal[]>(url);
  }

  getGoal(id: string): Goal {
    return this.getGoals().find(e => e.id === id);
  }
}
