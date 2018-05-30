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
  public recording: Recording;

  constructor(private route: ActivatedRoute, private router: Router, private goalService: GoalService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.goal = this.goalService.getGoal(id);

    // test
    this.recording = new Recording ();
    this.recording.date = new Date();
    this.recording.goalIds = ['abacc95c-9515-4470-be53-cf3c15276796'];
    this.recording.amount = 1;
  }

  onBack() {
    this.router.navigate(['/goals']);
  }

  onUpdate() {
    this.router.navigate(['/goals', this.goal.id, 'update'], { relativeTo: this.route });
  }
}
