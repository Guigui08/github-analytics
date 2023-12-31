import { Component, OnInit } from '@angular/core';
import { GithubRepository } from '../../../shared/model/github/github-repository.model';
import { ActivatedRoute } from '@angular/router';
import { GithubCommitter } from '../../../shared/model/github/github-committer.model';
import { GithubCommitAPI } from '../../../shared/model/github/github-commit.model';

@Component({
  selector: 'wmd-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.scss'],
})
export class RepositoryDetailComponent implements OnInit {
  repository!: GithubRepository;
  committers!: GithubCommitter[];
  commits!: GithubCommitAPI[];
  commitRepartition: Record<string, number> = {};
  commitRepartitionKeys!: string[];

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ repository, committers, commits }) => {
      this.repository = repository;
      this.committers = committers;
      this.commits = commits;
    });
  }
}
