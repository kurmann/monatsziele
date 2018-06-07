import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goal-detail-buttons',
  templateUrl: './goal-detail-buttons.component.html',
  styleUrls: ['./goal-detail-buttons.component.css']
})
export class GoalDetailButtonsComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {
    this._route.params.subscribe(params => console.log(params));
   }

  ngOnInit() {
  }

}
