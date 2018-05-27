import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expedition } from '../expedition';
import { ExpeditionService } from '../expedition-service/expedition.service';

@Component({
  templateUrl: './expedition-edit.component.html',
  styleUrls: ['./expedition-edit.component.css']
})
export class ExpeditionEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private expeditionService: ExpeditionService) { }

  selectedExpedition: Expedition;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedExpedition = this.expeditionService.getExpedition(id);
  }

}
