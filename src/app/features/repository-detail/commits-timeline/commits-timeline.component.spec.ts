import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsTimelineComponent } from './commits-timeline.component';

describe('CommitsTimelineComponent', () => {
  let component: CommitsTimelineComponent;
  let fixture: ComponentFixture<CommitsTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitsTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
