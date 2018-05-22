import { Component, OnInit } from '@angular/core';
import { Expedition } from '../expedition';

@Component({
  selector: 'app-expedition-list',
  templateUrl: './expedition-list.component.html',
  styleUrls: ['./expedition-list.component.css']
})
export class ExpeditionListComponent implements OnInit {

  expedition: Expedition = {
    id: 1,
    name: 'Moléson',
    altitude_meters_above_sealevel: 2002
  };

  constructor() { }

  ngOnInit() {
  }

}
