import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectSearchComponent } from './project-search.component';
import { RouterModule, Routes } from '@angular/router';
import { WmdPageHeaderModule } from '../../shared/design-system/page-header/page-header.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteModule } from '../../shared/design-system/autocomplete/autocomplete.module';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingPipeModule } from '../../shared/pipe/loading/loading.module';
import { LoadingSpinnerModule } from '../../shared/component/loading-spinner/loading-spinner.module';
import { ProjectSearchItemComponent } from './project-search-item/project-search-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocalDateModule } from '../../shared/pipe/local-date/local-date.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectSearchComponent,
  },
];

@NgModule({
  declarations: [ProjectSearchComponent, ProjectSearchItemComponent],
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
  ],
})
export class ProjectSearchModule {}
