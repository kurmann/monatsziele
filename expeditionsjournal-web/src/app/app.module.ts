import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExpeditionListComponent } from './expedition-list/expedition-list.component';
import { HeaderComponent } from './header/header.component';
import { ExpeditionDetailComponent } from './expedition-detail/expedition-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpeditionListComponent,
    HeaderComponent,
    ExpeditionDetailComponent
],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
