import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectSearchComponent } from './project-search.component';
import { RouterModule, Routes } from '@angular/router';
import { WmdPageHeaderModule } from '../../shared/design-system/page-header/page-header.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectSearchComponent,
  },
];

@NgModule({
  declarations: [ProjectSearchComponent],
  imports: [CommonModule, RouterModule.forChild(routes), WmdPageHeaderModule],
})
export class ProjectSearchModule {}
