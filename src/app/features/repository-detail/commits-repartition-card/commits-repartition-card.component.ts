import { Component, Input, OnInit } from '@angular/core';

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
  @Input() commits!: any[];

  repartitionCommits: CommitRepartition[] = [];

  ngOnInit() {
    const commitRepartition = this.commits
      .map((commit) => commit?.author?.login || commit?.committer?.login)
      .reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
      }, {});
    this.repartitionCommits = Object.keys(commitRepartition).map((key) => ({
      name: key,
      count: commitRepartition[key],
    }));
  }
}
