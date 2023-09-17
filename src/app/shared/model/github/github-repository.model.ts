import { GithubRepositoryOwner } from './github-repository-owner.model';

export class GithubRepository {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public url?: string,
    public language?: string,
    public stargazers_count?: number,
    public updated_at?: Date,
    public owner?: GithubRepositoryOwner
  ) {}
}
