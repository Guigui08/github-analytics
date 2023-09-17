import { Component, Input } from '@angular/core';
import { GithubRepository } from '../../../shared/model/github/github-repository.model';

@Component({
  selector: 'wmd-project-search-item',
  templateUrl: './project-search-item.component.html',
  styleUrls: ['./project-search-item.component.scss'],
})
export class ProjectSearchItemComponent {
  @Input() repository!: GithubRepository;
}
