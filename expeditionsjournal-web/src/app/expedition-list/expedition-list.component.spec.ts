import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionListComponent } from './expedition-list.component';

describe('ExpeditionListComponent', () => {
  let component: ExpeditionListComponent;
  let fixture: ComponentFixture<ExpeditionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpeditionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
