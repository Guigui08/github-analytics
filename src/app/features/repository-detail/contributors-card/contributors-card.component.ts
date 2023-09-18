import { Component, Input } from '@angular/core';
import { GithubCommitter } from '../../../shared/model/github/github-committer.model';

@Component({
  selector: 'wmd-contributors-card',
  templateUrl: './contributors-card.component.html',
  styleUrls: ['./contributors-card.component.scss'],
})
export class ContributorsCardComponent {
  @Input() committers!: GithubCommitter[];
}
