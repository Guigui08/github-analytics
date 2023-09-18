import { Component, Input } from '@angular/core';
import { GithubRepository } from '../../../shared/model/github/github-repository.model';
import { Router } from '@angular/router';

@Component({
  selector: 'wmd-project-search-item',
  templateUrl: './project-search-item.component.html',
  styleUrls: ['./project-search-item.component.scss'],
})
export class ProjectSearchItemComponent {
  @Input() repository!: GithubRepository;

  constructor(private readonly router: Router) {}

  onCardClick() {
    if (!this.repository.name) {
      throw new Error('Repository name is not defined');
    }

    if (!this.repository?.owner?.login) {
      throw new Error('Repository owner is not defined');
    }

    this.router.navigate(['/repository', this.repository.owner.login, this.repository.name]);
  }
}
