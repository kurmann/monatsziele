import { Injectable, EventEmitter, Output } from '@angular/core';
import { Expedition } from '../expedition';
import { EXPEDITIONLIST } from '../mock-expedition-list';

@Injectable({
  providedIn: 'root'
})
export class ExpeditionService {

  @Output() change: EventEmitter<Expedition> = new EventEmitter();

  selectedExpedition: Expedition;

  getExpeditions(): Expedition[] {
    return EXPEDITIONLIST;
  }

  getExpedition(id: number): Expedition {
    return this.getExpeditions().find(e => e.id === id);
  }

  setSelectedExpedition(expedition: Expedition): void {
    this.selectedExpedition = expedition;
    this.change.emit(this.selectedExpedition);
  }

  getSelectedExpedition(): Expedition {
    return this.selectedExpedition;
  }

  constructor() { }
}
