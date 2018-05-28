import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';

@Component({
  templateUrl: './goal-edit.component.html',
  styleUrls: ['./goal-edit.component.css']
})
export class GoalEditComponent implements OnInit {

  goal: Goal;

  constructor(private route: ActivatedRoute, private goalService: GoalService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.goal = this.goalService.getGoal(id);
  }

}
