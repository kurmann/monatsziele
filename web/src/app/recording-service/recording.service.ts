import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recording } from '../recording';
import { RECORDINGINITDATA } from '../recording-initdata';

@Injectable({
  providedIn: 'root'
})
export class RecordingService {

  constructor() { }

  getRecordings(): Observable<Recording[]> {
    return Observable.create(RECORDINGINITDATA);
  }

  getRecording(id: string): Observable<Recording> {
    const data = RECORDINGINITDATA.find(e => e.id === id);
    const obs = new Observable<Recording>(observer => {
      observer.next(data);
    });
    return obs;
  }
}
