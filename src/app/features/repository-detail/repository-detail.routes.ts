import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { GitHubService } from '../../shared/service/github.service';
import { of } from 'rxjs';
import { GithubRepository } from '../../shared/model/github/github-repository.model';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';

const githubRepositoryResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const { name, owner } = route.params;
  return name ? inject(GitHubService).getRepository(name, owner) : of(new GithubRepository());
};

const githubCommittersResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const { name, owner } = route.params;
  return name ? inject(GitHubService).getCommitters(name, owner) : of([]);
};

const githubCommitsResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const { name, owner } = route.params;
  return name ? inject(GitHubService).getCommits(name, owner) : of([]);
};

export const repositoryDetailRoutes = [
  {
    path: ':owner/:name',
    component: RepositoryDetailComponent,
    resolve: {
      repository: githubRepositoryResolver,
      committers: githubCommittersResolver,
      commits: githubCommitsResolver,
    },
  },
];
