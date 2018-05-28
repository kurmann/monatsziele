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
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { GoalEditComponent } from './goal-edit/goal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpeditionListComponent,
    HeaderComponent,
    ExpeditionDetailComponent,
    AboutComponent,
    ExpeditionEditComponent,
    GoalListComponent,
    GoalDetailComponent,
    GoalEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'goals', component: GoalListComponent },
      { path: 'goals/:id', component: GoalDetailComponent },
      { path: 'goals/:id/edit', component: GoalEditComponent, },
      { path: 'about', component: AboutComponent },
      { path: 'home', redirectTo: 'goals', pathMatch: 'full' },
      { path: '', redirectTo: 'goals', pathMatch: 'full' },
      { path: '**', redirectTo: 'goals' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
