import { Component, OnInit } from '@angular/core';
import { Expedition } from '../expedition';
import { ExpeditionService } from '../expedition-service/expedition.service';

@Component({
  selector: 'app-expedition-list',
  templateUrl: './expedition-list.component.html',
  styleUrls: ['./expedition-list.component.css']
})
export class ExpeditionListComponent implements OnInit {

  private _expeditionService: ExpeditionService;
  expeditions: Expedition[];
  selectedExpedition: Expedition;

  onSelect(expedition: Expedition): void {
    this.selectedExpedition = expedition;
  }

  constructor(expeditionService: ExpeditionService) {
    this._expeditionService = expeditionService;
   }

  ngOnInit() {
    this.expeditions = this._expeditionService.getExpeditions();
  }

}
