import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSearchItemComponent } from './project-search-item.component';

describe('ProjectSearchItemComponent', () => {
  let component: ProjectSearchItemComponent;
  let fixture: ComponentFixture<ProjectSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSearchItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
