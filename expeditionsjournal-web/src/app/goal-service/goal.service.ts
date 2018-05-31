import { Injectable } from '@angular/core';
import { GOALSINITDATA } from '../goal-initdata';
import { Goal } from '../goal';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private _searchString: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public readonly searchString: Observable<string> = this._searchString.asObservable();

  constructor() { }

  setSearchString(searchString: string) {
    this._searchString.next(searchString);
    console.log('New search string is set: ', searchString)
  }

  getGoals(): Goal[] {
    return GOALSINITDATA;
  }

  getGoal(id: string): Goal {
    return this.getGoals().find(e => e.id === id);
  }

}
