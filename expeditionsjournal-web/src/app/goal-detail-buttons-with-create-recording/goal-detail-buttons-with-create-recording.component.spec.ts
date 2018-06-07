/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoalDetailButtonsWithCreateRecordingComponent } from './goal-detail-buttons-with-create-recording.component';

describe('GoalDetailButtonsWithCreateRecordingComponent', () => {
  let component: GoalDetailButtonsWithCreateRecordingComponent;
  let fixture: ComponentFixture<GoalDetailButtonsWithCreateRecordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalDetailButtonsWithCreateRecordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalDetailButtonsWithCreateRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
