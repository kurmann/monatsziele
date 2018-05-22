import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpeditionListComponent } from './expedition-list/expedition-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpeditionListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
