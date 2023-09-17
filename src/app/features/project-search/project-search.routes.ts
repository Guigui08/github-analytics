import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot, Routes } from '@angular/router';
import { ProjectSearchComponent } from './project-search.component';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';
import { inject } from '@angular/core';
import { GitHubService } from '../../shared/service/github.service';
import { GithubRepository } from '../../shared/model/github/github-repository.model';
import { of } from 'rxjs';

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

/*@Injectable({ providedIn: 'root' })
export class GithubRepositoryResolve implements ResolveFn<GithubRepository> {
  constructor(private readonly githubService: GitHubService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GithubRepository> {
    const { name } = route.params;
    return name ? this.githubService.getRepositoryByName(name) : of(new GithubRepository());
  }
}*/

export const routes: Routes = [
  {
    path: '',
    component: ProjectSearchComponent,
  },
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
