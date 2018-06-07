import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { GoalUpdateComponent } from './goal-update/goal-update.component';
import { FilterDetailComponent } from './filter-detail/filter-detail.component';
import { ImageListComponent } from './image-list/image-list.component';
import { RecordingListComponent } from './recording-list/recording-list.component';
import { GoalDetailButtonsWithCreateRecordingComponent } from './goal-detail-buttons-with-create-recording/goal-detail-buttons-with-create-recording.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    GoalListComponent,
    GoalDetailComponent,
    GoalUpdateComponent,
    FilterDetailComponent,
    ImageListComponent,
    RecordingListComponent,
    GoalDetailButtonsWithCreateRecordingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'goals', component: GoalListComponent },
      {
        path: 'goals/:id/detail', component: GoalDetailComponent,
        children: [
          { path: 'create-recording', component: GoalDetailButtonsWithCreateRecordingComponent }
        ]
      },
      { path: 'goals/:id/update', component: GoalUpdateComponent },
      { path: 'goals/:id', redirectTo: 'goals/:id/detail', pathMatch: 'full' },
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
