import { Injectable } from '@angular/core';
import { Expedition } from '../expedition';
import { EXPEDITIONLIST } from '../mock-expedition-list';

@Injectable({
  providedIn: 'root'
})
export class ExpeditionService {

  getExpeditions(): Expedition[] {
    return EXPEDITIONLIST;
  }

  constructor() { }
}
