import { Component, OnInit } from '@angular/core';
import { Expedition } from '../expedition';
import { EXPEDITIONLIST } from '../mock-expedition-list';

@Component({
  selector: 'app-expedition-list',
  templateUrl: './expedition-list.component.html',
  styleUrls: ['./expedition-list.component.css']
})
export class ExpeditionListComponent implements OnInit {

  expeditions = EXPEDITIONLIST;
  selectedExpedition: Expedition;

  onSelect(expedition: Expedition): void {
    this.selectedExpedition = expedition;
  }

  constructor() { }

  ngOnInit() {
  }

}
