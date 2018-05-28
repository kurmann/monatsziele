import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalService } from '../goal-service/goal.service';
import { Goal } from '../goal';

@Component({
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  public goal: Goal;

  constructor(private route: ActivatedRoute, private router: Router, private goalService: GoalService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.goal = this.goalService.getGoal(id);
  }

  onBack() {
    this.router.navigate(['/goals']);
  }
}
