import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { GitHubService } from '../../shared/service/github.service';

@Component({
  selector: 'wmd-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.scss'],
})
export class ProjectSearchComponent implements OnInit {
  public searchForm!: FormGroup;

  public repositories$!: Observable<any>;

  constructor(private readonly fb: FormBuilder, private readonly githubService: GitHubService) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: ['', [Validators.required]],
    });
  }

  public onSearch(value: string): void {
    console.log(value);
    this.repositories$ = this.githubService.searchRepositories(value);
  }
}
