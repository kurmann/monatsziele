import { Component, OnInit, Input } from '@angular/core';
import { Recording } from '../recording';

@Component({
  selector: 'app-recording-list',
  templateUrl: './recording-list.component.html',
  styleUrls: ['./recording-list.component.css']
})
export class RecordingListComponent implements OnInit {

  @Input() recordings: Recording[];
  @Input() amountUnitOfMeasurement: string;

  constructor() { }

  ngOnInit() {
  }

}
