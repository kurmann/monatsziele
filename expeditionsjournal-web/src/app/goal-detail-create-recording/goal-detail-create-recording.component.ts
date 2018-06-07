import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoalService } from '../goal-service/goal.service';
import { Goal } from '../goal';

@Component({
  templateUrl: './goal-detail-create-recording.component.html',
  styleUrls: ['./goal-detail-create-recording.component.css']
})
export class GoalDetailCreateRecordingComponent implements OnInit {

  _goal: Goal;

  constructor(private _route: ActivatedRoute, private _goalService: GoalService) { }

  ngOnInit() {
    const id = this._route.parent.snapshot.paramMap.get('id');
    this._goal = this._goalService.getGoal(id);

    console.log('Goal:', this._goal.id);
  }

}
