import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { GoalService } from '../goal-service/goal.service';
import { Goal } from '../goal';
import { Recording } from '../recording';

@Component({
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  public goal: Goal;
  public isOnAddRecordingToggled: boolean;
  public recording: Recording;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _goalService: GoalService
  ) {}

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    this.goal = this._goalService.getGoal(id);
  }

  onBack() {
    this._router.navigate(['/goals']);
  }

  onGoalUpdate() {
    this._router.navigate(['/goals', this.goal.id, 'update'], {
      relativeTo: this._route
    });
  }

  toggleAddRecording() {
    this.recording = new Recording();
    this.recording.date = new Date();
    this.isOnAddRecordingToggled = !this.isOnAddRecordingToggled;
  }
}
