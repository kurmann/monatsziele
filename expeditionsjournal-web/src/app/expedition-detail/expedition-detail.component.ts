import { Component, OnInit } from '@angular/core';
import { ExpeditionService } from '../expedition-service/expedition.service';
import { Expedition } from '../expedition';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expedition-detail',
  templateUrl: './expedition-detail.component.html',
  styleUrls: ['./expedition-detail.component.css']
})
export class ExpeditionDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {
    console.log(this._route.snapshot.paramMap.get('id'));
   }

   selectedExpedition: Expedition;

  ngOnInit() {  }
}
