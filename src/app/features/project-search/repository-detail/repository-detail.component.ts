import { Component, OnInit } from '@angular/core';
import { GithubRepository } from '../../../shared/model/github/github-repository.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wmd-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.scss'],
})
export class RepositoryDetailComponent implements OnInit {
  repository!: GithubRepository;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ repository }) => {
      this.repository = repository;
    });
  }
}
