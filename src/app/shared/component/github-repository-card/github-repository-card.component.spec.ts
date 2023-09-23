import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepositoryCardComponent } from './github-repository-card.component';

describe('GithubRepositoryCardComponent', () => {
  let component: GithubRepositoryCardComponent;
  let fixture: ComponentFixture<GithubRepositoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubRepositoryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubRepositoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
