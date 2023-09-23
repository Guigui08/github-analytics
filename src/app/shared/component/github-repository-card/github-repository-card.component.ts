import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GithubRepository } from '../../model/github/github-repository.model';

@Component({
  selector: 'wmd-github-repository-card',
  templateUrl: './github-repository-card.component.html',
  styleUrls: ['./github-repository-card.component.scss'],
})
export class GithubRepositoryCardComponent {
  @Input() repository!: GithubRepository;
  @Input() static = false;
  @Output() onCardClick = new EventEmitter<GithubRepository>();
}
