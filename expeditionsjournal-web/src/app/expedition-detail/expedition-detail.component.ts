import { Component, OnInit } from '@angular/core';
import { ExpeditionService } from '../expedition-service/expedition.service';
import { Expedition } from '../expedition';

@Component({
  selector: 'app-expedition-detail',
  templateUrl: './expedition-detail.component.html',
  styleUrls: ['./expedition-detail.component.css']
})
export class ExpeditionDetailComponent implements OnInit {

  constructor(private expeditionService: ExpeditionService) { }
  selectedExpedition: Expedition;

  ngOnInit() {  }
}
