import { Component, OnInit, Input } from '@angular/core';
import { RecordingService } from '../recording-service/recording.service';
import { Recording } from 'src/app/recording';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './recording-detail.component.html',
  styleUrls: ['./recording-detail.component.css']
})
export class RecordingDetailComponent implements OnInit {

  recording: Recording;

  constructor(private _route: ActivatedRoute, private _router: Router, private _recordingService: RecordingService) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    this._recordingService.getRecording(id).subscribe(recording => this.recording = recording);
  }

  onUpdateRecording(form: NgForm) {
    console.log(form.value);
  }

  onCancel(): void {
    this._router.navigate(['goals', this.recording.goalId, 'detail' ]);
  }

}
