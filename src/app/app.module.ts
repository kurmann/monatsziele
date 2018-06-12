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
import { GoalDetailCreateRecordingComponent } from './goal-detail-create-recording/goal-detail-create-recording.component';
import { GoalDetailsButtonsComponent } from './goal-details-buttons/goal-details-buttons.component';
import { RecordingDetailComponent } from './recording-detail/recording-detail.component';
import { RecordingUpdateComponent } from './recording-update/recording-update.component';

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
    GoalDetailCreateRecordingComponent,
    GoalDetailsButtonsComponent,
    RecordingDetailComponent,
    RecordingUpdateComponent
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
          { path: '', component: GoalDetailsButtonsComponent },
          { path: 'create-recording', component: GoalDetailCreateRecordingComponent }
        ]
      },
      { path: 'goals/:id/update', component: GoalUpdateComponent },
      { path: 'goals/:id', redirectTo: 'goals/:id/detail', pathMatch: 'full' },
      { path: 'recordings/:id', redirectTo: 'recordings/:id/detail' },
      { path: 'recordings/:id/detail', component: RecordingDetailComponent },
      { path: 'recordings/:id/update', component: RecordingUpdateComponent },
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
