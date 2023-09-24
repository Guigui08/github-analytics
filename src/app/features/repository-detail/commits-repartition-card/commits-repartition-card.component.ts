import { Component, Input, OnInit } from '@angular/core';
import { GithubCommitAPI } from '../../../shared/model/github/github-commit.model';

interface CommitRepartition {
  name: string;
  count: number;
}

@Component({
  selector: 'wmd-commits-repartition-card',
  templateUrl: './commits-repartition-card.component.html',
  styleUrls: ['./commits-repartition-card.component.scss'],
})
export class CommitsRepartitionCardComponent implements OnInit {
  @Input() commits!: GithubCommitAPI[];

  repartitionCommits: CommitRepartition[] = [];

  ngOnInit() {
    const commitRepartition = this.commits
      .map((commit) => commit?.committer?.login || commit?.commit?.committer?.name || 'Unknown')
      .reduce(function (acc: any, curr: string) {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
      }, {});
    this.repartitionCommits = Object.keys(commitRepartition).map((key) => ({
      name: key,
      count: commitRepartition[key],
    }));
  }
}
