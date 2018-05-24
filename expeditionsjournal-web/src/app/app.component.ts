import { Component } from '@angular/core';
import { ExpeditionService } from './expedition-service/expedition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExpeditionService]
})
export class AppComponent {}
