import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';
import { RouterModule } from '@angular/router';
import { repositoryDetailRoutes } from './repository-detail.routes';
import { WmdPageHeaderModule } from '../../shared/design-system/page-header/page-header.module';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [RepositoryDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(repositoryDetailRoutes),
    WmdPageHeaderModule,
    AvatarModule,
    TooltipModule,
    ProgressBarModule,
  ],
})
export class RepositoryDetailModule {}
