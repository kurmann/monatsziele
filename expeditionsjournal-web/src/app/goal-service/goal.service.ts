import { Injectable } from '@angular/core';
import { GOALSINITDATA } from '../goal-initdata';
import { Goal } from '../goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor() { }

  getGoals(): Goal[] {
    return GOALSINITDATA;
  }

  getGoal(id: string): Goal {
    return this.getGoals().find(e => e.id === id);
  }

}
