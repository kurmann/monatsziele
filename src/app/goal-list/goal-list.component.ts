import { Component, OnInit } from '@angular/core';
import { GoalService } from '../goal-service/goal.service';
import { Goal } from '../goal';
import { Router } from '@angular/router';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Component({
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {

  public goals: Goal[];

  constructor(
    private goalService: GoalService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.goalService.getGoalsAsync().subscribe(goals => this.goals = goals);
  }

  getWidthStylePercentageValue(percentageNumber: number): SafeStyle {
    let unsafeStyleValue = 'width: 0%';
    if (percentageNumber === undefined || percentageNumber === NaN) {
      return this.sanitizer.bypassSecurityTrustStyle(unsafeStyleValue);
    } else {
      unsafeStyleValue = 'width: ' + percentageNumber * 100 + '%';
      return this.sanitizer.bypassSecurityTrustStyle(unsafeStyleValue);
    }
  }

  onDetail(goalId: number) {
    this.router.navigate(['goals', goalId, 'detail']);
  }
}
