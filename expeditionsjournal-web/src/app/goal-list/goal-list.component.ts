import { Component, OnInit } from '@angular/core';
import { GoalService } from '../goal-service/goal.service';
import { Goal } from '../goal';

@Component({
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

  public goals: Goal[];

  constructor(private goalService: GoalService) { }

  ngOnInit() {
    this.goals = this.goalService.getGoals();
  }

}
