import { Component, Input } from '@angular/core';
import { GithubCommitAPI } from '../../../shared/model/github/github-commit.model';

@Component({
  selector: 'wmd-commits-timeline',
  templateUrl: './commits-timeline.component.html',
  styleUrls: ['./commits-timeline.component.scss'],
})
export class CommitsTimelineComponent {
  @Input() commits!: GithubCommitAPI[];
}
