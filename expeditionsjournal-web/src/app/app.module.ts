import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { GoalUpdateComponent } from './goal-update/goal-update.component';
import { FilterDetailComponent } from './filter-detail/filter-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    GoalListComponent,
    GoalDetailComponent,
    GoalUpdateComponent,
    FilterDetailComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'goals', component: GoalListComponent },
      { path: 'goals/:id/detail', component: GoalDetailComponent },
      { path: 'goals/:id/update', component: GoalUpdateComponent },
      { path: 'goals/:id',  redirectTo: 'goals/:id/detail', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'home', redirectTo: 'goals', pathMatch: 'full' },
      { path: '', redirectTo: 'goals', pathMatch: 'full' },
      { path: '**', redirectTo: 'goals', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
