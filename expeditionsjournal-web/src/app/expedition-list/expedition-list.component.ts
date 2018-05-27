import { Component, OnInit } from '@angular/core';
import { Expedition } from '../expedition';
import { ExpeditionService } from '../expedition-service/expedition.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expedition-list',
  templateUrl: './expedition-list.component.html',
  styleUrls: ['./expedition-list.component.css']
})
export class ExpeditionListComponent implements OnInit {

  expeditions: Expedition[];
  selectedExpedition: Expedition;

  constructor(private expeditionService: ExpeditionService) {
   }

  ngOnInit() {
    this.expeditions = this.expeditionService.getExpeditions();
  }

}
