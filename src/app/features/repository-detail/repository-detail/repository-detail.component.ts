import { Component, OnInit } from '@angular/core';
import { GithubRepository } from '../../../shared/model/github/github-repository.model';
import { ActivatedRoute } from '@angular/router';
import { GithubCommitter } from '../../../shared/model/github/github-committer.model';

@Component({
  selector: 'wmd-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.scss'],
})
export class RepositoryDetailComponent implements OnInit {
  repository!: GithubRepository;
  committers!: GithubCommitter[];
  commits!: any[];
  commitRepartition: Record<string, number> = {};
  commitRepartitionKeys!: string[];

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ repository, committers, commits }) => {
      this.repository = repository;
      this.committers = committers;
      this.commits = commits;
      console.log(this.commits);
      //count commits by committer

      this.commits.forEach((commit: any) => {
        const committer = commit.commit.author.name;
        if (this.commitRepartition[committer]) {
          this.commitRepartition[committer]++;
        } else {
          this.commitRepartition[committer] = 1;
        }
      });
      this.commitRepartitionKeys = Object.keys(this.commitRepartition);
      console.log(this.commitRepartition);
    });
  }
}
