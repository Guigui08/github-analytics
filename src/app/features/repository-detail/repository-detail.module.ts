import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';
import { RouterModule } from '@angular/router';
import { repositoryDetailRoutes } from './repository-detail.routes';
import { WmdPageHeaderModule } from '../../layout/page-header/page-header.module';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressBarModule } from 'primeng/progressbar';
import { ContributorsCardComponent } from './contributors-card/contributors-card.component';
import { CommitsRepartitionCardComponent } from './commits-repartition-card/commits-repartition-card.component';
import { OrderByModule } from '../../shared/pipe/order-by/order-by.module';
import { GithubRepositoryCardModule } from '../../shared/component/github-repository-card/github-repository-card.module';
import { CommitsTimelineComponent } from './commits-timeline/commits-timeline.component';
import { LocalDateModule } from '../../shared/pipe/local-date/local-date.module';
import { TranslateModule } from '@ngx-translate/core';
import { TextSliceModule } from '../../shared/pipe/text-slice/text-slice.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [RepositoryDetailComponent, ContributorsCardComponent, CommitsRepartitionCardComponent, CommitsTimelineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(repositoryDetailRoutes),
    WmdPageHeaderModule,
    AvatarModule,
    TooltipModule,
    ProgressBarModule,
    OrderByModule,
    GithubRepositoryCardModule,
    LocalDateModule,
    TranslateModule,
    TextSliceModule,
    ButtonModule,
  ],
})
export class RepositoryDetailModule {}
