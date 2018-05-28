/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoalEditComponent } from './goal-edit.component';

describe('GoalEditComponent', () => {
  let component: GoalEditComponent;
  let fixture: ComponentFixture<GoalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
