import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalService } from '../goal-service/goal.service';
import { Goal } from '../goal';
import { Recording } from '../recording';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './goal-detail-create-recording.component.html',
  styleUrls: ['./goal-detail-create-recording.component.css']
})
export class GoalDetailCreateRecordingComponent implements OnInit {

  goal: Goal;
  recording: Recording;

  constructor(private _route: ActivatedRoute, private _router: Router, private _goalService: GoalService) { }

  ngOnInit() {
    const id = this._route.parent.snapshot.paramMap.get('id');
    this.goal = this._goalService.getGoal(id);

    this.recording = this._getNewRecording();
  }

  private _getNewRecording(): Recording {
    const recording = new Recording();
    recording.date = new Date();
    recording.amount = 1;

    return recording;
  }

  onSubmitCreateRecording(form: NgForm) {
    console.log(form.value);
  }

  onCancel() {
    this._router.navigate(['../'], {
      relativeTo: this._route
    });
  }
}
