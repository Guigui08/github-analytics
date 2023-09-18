import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsRepartitionCardComponent } from './commits-repartition-card.component';

describe('CommitsRepartitionCardComponent', () => {
  let component: CommitsRepartitionCardComponent;
  let fixture: ComponentFixture<CommitsRepartitionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitsRepartitionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitsRepartitionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
