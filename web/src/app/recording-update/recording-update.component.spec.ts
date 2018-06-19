import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordingUpdateComponent } from './recording-update.component';

describe('RecordingUpdateComponent', () => {
  let component: RecordingUpdateComponent;
  let fixture: ComponentFixture<RecordingUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordingUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
