import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordingService } from '../recording-service/recording.service';
import { NgForm } from '@angular/forms';
import { Recording } from 'src/app/recording';

@Component({
  templateUrl: './recording-update.component.html',
  styleUrls: ['./recording-update.component.css']
})
export class RecordingUpdateComponent implements OnInit {

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
