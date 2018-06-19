import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalListComponent } from 'src/app/goal-list/goal-list.component';
import { GoalDetailComponent } from 'src/app/goal-detail/goal-detail.component';
import { GoalDetailsButtonsComponent } from 'src/app/goal-details-buttons/goal-details-buttons.component';
import { GoalDetailCreateRecordingComponent } from 'src/app/goal-detail-create-recording/goal-detail-create-recording.component';
import { GoalUpdateComponent } from 'src/app/goal-update/goal-update.component';
import { ImageListComponent } from 'src/app/image-list/image-list.component';
import { RecordingDetailComponent } from 'src/app/recording-detail/recording-detail.component';
import { RecordingUpdateComponent } from 'src/app/recording-update/recording-update.component';
import { AboutComponent } from 'src/app/about/about.component';

const routes: Routes = [
  { path: 'goals', component: GoalListComponent },
  {
    path: 'goals/:id/detail',
    component: GoalDetailComponent,
    children: [
      {
        path: '',
        component: GoalDetailsButtonsComponent
      },
      {
        path: 'create-recording',
        component: GoalDetailCreateRecordingComponent
      }
    ]
  },
  { path: 'goals/:id/update', component: GoalUpdateComponent },
  { path: 'goals/:id/update/image', component: ImageListComponent },
  { path: 'goals/:id', redirectTo: 'goals/:id/detail', pathMatch: 'full' },
  { path: 'recordings/:id', redirectTo: 'recordings/:id/detail' },
  { path: 'recordings/:id/detail', component: RecordingDetailComponent },
  { path: 'recordings/:id/update', component: RecordingUpdateComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', redirectTo: 'goals', pathMatch: 'full' },
  { path: '', redirectTo: 'goals', pathMatch: 'full' },
  { path: '**', redirectTo: 'goals', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
