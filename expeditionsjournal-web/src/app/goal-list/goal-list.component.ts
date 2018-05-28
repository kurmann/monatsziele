import { Component, OnInit } from '@angular/core';
import { GoalService } from '../goal-service/goal.service';
import { Goal } from '../goal';
import { ActivatedRoute, Router } from '@angular/router';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Component({
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {
  public goals: Goal[];

  constructor(
    private goalService: GoalService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.goals = this.goalService.getGoals();
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
}
