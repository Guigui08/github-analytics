import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { GitHubService } from '../../shared/service/github.service';
import { AbstractObsList } from '../../shared/component/abstract/abstract-obs-list';
import { Pageable, Paginated } from '../../shared/model/pagination/pagination.model';
import { GithubRepository } from '../../shared/model/github/github-repository.model';
import { Router } from '@angular/router';

@Component({
  selector: 'wmd-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.scss'],
})
export class ProjectSearchComponent extends AbstractObsList<GithubRepository> implements OnInit {
  public searchForm!: FormGroup;
  private search!: string;

  constructor(private readonly fb: FormBuilder, private readonly githubService: GitHubService, private readonly router: Router) {
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

  public onCardClick(repository: GithubRepository) {
    if (!repository?.name) {
      throw new Error('Repository name is not defined');
    }

    if (!repository?.owner?.login) {
      throw new Error('Repository owner is not defined');
    }

    this.router.navigate(['/repository', repository.owner.login, repository.name]);
  }

  protected findAll(pageable: Pageable): Observable<Paginated<GithubRepository[]>> | undefined {
    return this.githubService.searchRepositories(this.search, pageable);
  }
}
