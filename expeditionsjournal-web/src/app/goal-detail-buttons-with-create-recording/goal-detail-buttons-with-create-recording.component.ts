import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goal-detail-buttons-with-create-recording',
  templateUrl: './goal-detail-buttons-with-create-recording.component.html',
  styleUrls: ['./goal-detail-buttons-with-create-recording.component.css']
})
export class GoalDetailButtonsWithCreateRecordingComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {
    this._route.parent.params.subscribe(params => console.log(params));
   }

  ngOnInit() {
  }

}
