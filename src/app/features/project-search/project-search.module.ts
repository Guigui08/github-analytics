import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectSearchComponent } from './project-search.component';
import { RouterModule } from '@angular/router';
import { WmdPageHeaderModule } from '../../shared/design-system/page-header/page-header.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteModule } from '../../shared/design-system/autocomplete/autocomplete.module';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingPipeModule } from '../../shared/pipe/loading/loading.module';
import { LoadingSpinnerModule } from '../../shared/component/loading-spinner/loading-spinner.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocalDateModule } from '../../shared/pipe/local-date/local-date.module';
import { routes } from './project-search.routes';
import { GithubRepositoryCardModule } from '../../shared/component/github-repository-card/github-repository-card.module';

@NgModule({
  declarations: [ProjectSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WmdPageHeaderModule,
    ReactiveFormsModule,
    AutocompleteModule,
    TranslateModule,
    LoadingPipeModule,
    LoadingSpinnerModule,
    FontAwesomeModule,
    LocalDateModule,
    GithubRepositoryCardModule,
  ],
})
export class ProjectSearchModule {}
