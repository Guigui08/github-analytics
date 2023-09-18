import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributorsCardComponent } from './contributors-card.component';

describe('ContributorsCardComponent', () => {
  let component: ContributorsCardComponent;
  let fixture: ComponentFixture<ContributorsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributorsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributorsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
