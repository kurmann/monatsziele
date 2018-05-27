import { ExpeditionService } from './../expedition-service/expedition.service';
import { Component, OnInit } from '@angular/core';
import { Expedition } from '../expedition';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-expedition-detail',
  templateUrl: './expedition-detail.component.html',
  styleUrls: ['./expedition-detail.component.css']
})
export class ExpeditionDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private expeditionService: ExpeditionService) {
   }

   selectedExpedition: Expedition;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedExpedition = this.expeditionService.getExpedition(id);
   }

   onBack() {
     this.router.navigate(['/expediton-list']);
   }
}
