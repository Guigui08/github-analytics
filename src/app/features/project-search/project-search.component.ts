import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { GitHubService } from '../../shared/service/github.service';
import { AbstractObsList } from '../../shared/component/abstract/abstract-obs-list';
import { Pageable, Paginated } from '../../shared/model/pagination/pagination.model';

@Component({
  selector: 'wmd-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.scss'],
})
export class ProjectSearchComponent extends AbstractObsList<any> implements OnInit {
  public searchForm!: FormGroup;

  public repositories$!: Observable<any>;

  private search!: string;

  constructor(private readonly fb: FormBuilder, private readonly githubService: GitHubService) {
    super();
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: ['', [Validators.required]],
    });
  }

  public onSearch(value: string): void {
    this.search = value;
    this.clear();
  }

  protected findAll(pageable: Pageable): Observable<Paginated<any[]>> | undefined {
    return this.githubService.searchRepositories(this.search, pageable);
  }
}
