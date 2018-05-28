import { Component, OnInit } from '@angular/core';
import { GoalService } from '../goal-service/goal.service';
import { Goal } from '../goal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

  public goals: Goal[];

  constructor(private goalService: GoalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.goals = this.goalService.getGoals();
  }

}
