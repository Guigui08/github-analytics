import { GithubCommitter } from './github-committer.model';

export class GithubCommitAPI {
  constructor(public commit?: GithubCommit, public committer?: GithubCommitter, public html_url?: string) {}
}

export class GithubCommit {
  constructor(public committer?: GithubCommitter, public author?: GithubCommitter, public message?: string) {}
}
