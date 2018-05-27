import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExpeditionListComponent } from './expedition-list/expedition-list.component';
import { HeaderComponent } from './header/header.component';
import { ExpeditionDetailComponent } from './expedition-detail/expedition-detail.component';
import { AboutComponent } from './about/about.component';
import { ExpeditionEditComponent } from './expedition-edit/expedition-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpeditionListComponent,
    HeaderComponent,
    ExpeditionDetailComponent,
    AboutComponent,
    ExpeditionEditComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: 'expedition-list', component: ExpeditionListComponent },
      { path: 'expedition-list/:id', component: ExpeditionDetailComponent },
      { path: 'expedition-list/:id/edit', component: ExpeditionEditComponent },
      { path: 'home', redirectTo: 'expedition-list', pathMatch: 'full' },
      { path: '', redirectTo: 'expedition-list', pathMatch: 'full' },
      { path: '**', redirectTo: 'expedition-list', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
