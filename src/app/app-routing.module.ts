import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search',
  },
  {
    path: 'search',
    loadChildren: () => import('./features/project-search/project-search.module').then((m) => m.ProjectSearchModule),
  },
  {
    path: 'repository',
    loadChildren: () => import('./features/repository-detail/repository-detail.module').then((m) => m.RepositoryDetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
