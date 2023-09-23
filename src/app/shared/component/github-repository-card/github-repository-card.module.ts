import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubRepositoryCardComponent } from './github-repository-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { LocalDateModule } from '../../pipe/local-date/local-date.module';

@NgModule({
  declarations: [GithubRepositoryCardComponent],
  imports: [CommonModule, FontAwesomeModule, TranslateModule, LocalDateModule],
  exports: [GithubRepositoryCardComponent],
})
export class GithubRepositoryCardModule {}
