import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './goal-details-buttons.component.html',
  styleUrls: ['./goal-details-buttons.component.css']
})
export class GoalDetailsButtonsComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() { }

  onBack() {
    this._router.navigate(['/goals']);
  }

  onGoalUpdate() {
    const goalId = this._route.parent.snapshot.paramMap.get('id');
    this._router.navigate(['/goals', goalId, 'update'], {
      relativeTo: this._route
    });
  }

  onCreateRecording() {
    this._router.navigate(['./create-recording'], {
      relativeTo: this._route
    });
  }

}
