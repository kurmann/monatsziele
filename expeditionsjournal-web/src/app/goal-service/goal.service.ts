import { Injectable, OnInit } from '@angular/core';
import { GOALSINITDATA } from '../goal-initdata';
import { Goal } from '../goal';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Period } from '../period.enum';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private _searchString: BehaviorSubject<string> = new BehaviorSubject<string>('');
  // public readonly searchString: Observable<string> = this._searchString.asObservable();

  public readonly goals: BehaviorSubject<Goal[]>;

  constructor() {
    console.log('onInit');
    this._searchString.pipe(debounceTime(1000))
    .subscribe(searchString => this._updateGoalsBySearchString(searchString));
   }

  setSearchString(searchString: string) {
    this._searchString.next(searchString);
  }
  private _updateGoalsBySearchString(searchString: string) {
    console.log('Searching goals by ', searchString);
  }

  getGoals(): Goal[] {
    return GOALSINITDATA;
  }

  getGoal(id: string): Goal {
    return this.getGoals().find(e => e.id === id);
  }

}
