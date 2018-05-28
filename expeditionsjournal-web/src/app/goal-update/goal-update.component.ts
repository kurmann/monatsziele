import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GoalService } from "../goal-service/goal.service";
import { Goal } from "../goal";

@Component({
  selector: "app-goal-update",
  templateUrl: "./goal-update.component.html",
  styleUrls: ["./goal-update.component.css"]
})
export class GoalUpdateComponent implements OnInit {
  
  goal: Goal;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private goalService: GoalService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.goal = this.goalService.getGoal(id);
  }
}
