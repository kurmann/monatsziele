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

}
